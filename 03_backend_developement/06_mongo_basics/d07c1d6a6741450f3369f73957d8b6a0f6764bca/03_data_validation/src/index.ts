import * as mongo from "mongodb";
import { createBooksCollection } from "./createBooksCollection";
// import { createMoviesCollection } from "./createMoviesCollection";

import { showCollections } from "./showCollections";

const databaseUrl = "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongo.MongoClient.connect(databaseUrl, options).then((client) => {
  const db = client.db();

  // You can test your query function by placing it here instead of `showCollections`
  showCollections(db)
    .then((collection) => {
      console.log(collection);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      client.close();
    });
});
