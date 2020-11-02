import * as fs from "fs";
import * as mongo from "mongodb";
import * as path from "path";

type Platform = { [key: string]: unknown };
type games = { [key: string]: unknown };
type Game = { [key: string]: unknown };

function getDatafile(fileName: string): [Game[], Platform] {
    const fichPath = path.resolve(`data/${fileName}`);
    const stringifiedPlatform = fs.readFileSync(fichPath, "utf-8");
    const platform = JSON.parse(stringifiedPlatform);

    const { games, ...platformWithoutGames } = platform;
    return [games, platformWithoutGames];
}

export default function dataImport(db: mongo.Db): Promise<true> {
    let allGames: Game[] = [];
    const allPlatforms: Platform[] = [];

    const fileNames = ["gba.json", "n64.json", "nes.json"];

    fileNames.forEach((fileName) => {
        const [games, platform] = getDatafile(fileName);
        allPlatforms.push(platform);
        allGames = [...allGames, ...games];
    });

    return db.createCollection<Game>("games").then((gamesCollection) => {
        return db.createCollection<Platform>("platforms").then((plateformsCollection) => {
            return plateformsCollection.insertMany(allPlatforms).then(() => {
                return gamesCollection.insertMany(allGames).then(() => {
                    return true;
                });
            });
        });
    });
}
