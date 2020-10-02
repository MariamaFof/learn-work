import * as mongo from "mongodb";

export const booksValidator = {

  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false, 
      required: ["_id", "title", "author", "description"], 
      properties: {
        _id: { 
          bsonType: "objectId" },
        title: {
            bsonType: "string",
            description: "must be a string and is required",
        },
        author: { 
            bsonType: "string",
            description: "must be a string and is required",
        },
        description: {
            bsonType: "string",
            maxLength: 100,
            description: "must be a string and is required and characters maximun ",
            
         }
        }
       }
      }
    }
  
  
export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}