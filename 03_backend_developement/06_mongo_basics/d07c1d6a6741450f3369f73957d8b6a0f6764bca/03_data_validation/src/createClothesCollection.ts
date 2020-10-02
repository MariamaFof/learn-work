import * as mongo from "mongodb";

export const sweaterProperties = {
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be a string and is required",
    },
    name: {
      bsonType: "string",
      description: "must be a string and is required",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      description: "must be a string and is required",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "int",
      description: "must be a string and is required",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};
export const shoesProperties = {
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be a string and is required",
    },
    name: {
      bsonType: "string",
      description: "must be a string and is required",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      description: "must be a string and is required",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
    },
    size: {
      bsonType: "int",
      description: "must be a string and is required",
      maximum: 50,
      minimum: 30,
    },
    material: {
      bsonType: "string",
      description: "must be a string and is required",
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const pantsProperties = {
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be a string and is required",
    },
    name: {
      bsonType: "string",
      description: "must be a string and is required",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      description: "must be a string and is required",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
    },
    size: {
      bsonType: "object",
      required: ["width"],
      additionalProperties: false,
      description: "must be a string and is required",
      properties: {
        width: {
          bsonType: "int",
          maximum: 46,
          minimum: 32,
        },
        cut: {
          bsonType: "string",
          enum: ["slim", "skinny", "regular", "straight"],
        },
      },
    },
  },
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id"],
      properties: {
        _id: {
          bsonType: "objectId",
        },
      },
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
