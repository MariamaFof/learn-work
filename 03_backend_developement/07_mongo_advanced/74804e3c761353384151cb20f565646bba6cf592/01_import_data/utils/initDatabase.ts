import * as mongo from "mongodb";

export function dropAll(db: mongo.Db): Promise<boolean> {
    return db
        .listCollections()
        .toArray()
        .then((results) => {
            const collectionsNames = results.map((result) => result.name);
            const dropPromises = collectionsNames.map((name) => db.collection(name).drop());
            return Promise.all(dropPromises).then(() => true);
        });
}
export default function initDatabase(
    databaseUrl = "mongodb://mongo-advanced-app:password@localhost:27017/mongo-advanced",
    options = { useNewUrlParser: true, useUnifiedTopology: true },
): Promise<mongo.MongoClient> {
    return new Promise((resolve, reject) => {
        mongo.MongoClient.connect(databaseUrl, options, function (error, client) {
            dropAll(client.db())
                .then(() => resolve(client))
                .catch((error) => reject(error));
        });
    });
}
