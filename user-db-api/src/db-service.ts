import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: {users?:mongoDB.Collection} = {}

export async function connectToDB() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb+srv://pkoe99:pkoe9221@projectthis.m69cgde.mongodb.net/?retryWrites=true&w=majority");

    await client.connect();

    const db: mongoDB.Db =client.db("projectThis");

    const usersCollection: mongoDB.Collection=db.collection("Users");

    collections.users=usersCollection;

    console.log(`connected to db ${db.databaseName}`)

}