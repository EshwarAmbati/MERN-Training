const express = require('express')
const app = express();
app.listen(2000);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.jus1nri.mongodb.net/<dbName>?appName=Cluster0";

let dbURL = uri;
dbURL = dbURL.replace('<username>',process.env.DB_USERNAME);
dbURL = dbURL.replace('<password>',process.env.DB_PASSWORD);
dbURL = dbURL.replace('<dbName>',process.env.DB_NAME);

const client = new MongoClient(dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db(process.env.DB_NAME);
const userCollection = database.collection("user");

module.exports = {
  database,
  userCollection,
};
