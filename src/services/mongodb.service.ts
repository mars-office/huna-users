import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(
  `mongodb://admin:${process.env.MONGODB_PASSWORD}@huna-mongodb:27017/`,
  {
    appName: "huna-users",
  }
);
export const db = mongoClient.db("huna-users");
export default db;