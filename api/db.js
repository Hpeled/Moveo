// const mongoose = require("mongoose");
// const data = require("./constants");

// let connectionString = "";

// if (process.env.NODE_ENV === "production") {
//     connectionString = process.env.DATABASE_URL_PRODUCTION;
// } else {
//     connectionString = process.env.DATABASE_URL;
// }

// const connection = mongoose.createConnection(connectionString);

// export const initialDB = async () => {
//     connection.on("open", function () {
//         //  TODO: change toArray  and insertMany (deprecated)
//         connection.db.listCollections().toArray((err, collectionNamesList) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }

//             const collection = collectionNamesList.filter((collectionName) => collectionName.name === "codeblocks")[0];

//             if (collection) {
//                 return;
//             }

//             connection.db.collection("codeblocks").insertMany(data, (err, res) => {
//                 if (err) throw err;
//             });
//         });
//     });
// };

// mongoose.set("strictQuery", false);
// mongoose.connect(connectionString);

// const db = mongoose.connection;
// db.on("error", (error) => {
//     console.log(error);
// });

// db.once("open", () => {
//     console.log("Connected to mongoDB");
// });

// // module.exports = initialDB;

import mongoose from "mongoose";
import codeBlocksMigrationData from "./constants.js";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();
let connectionString = "";

if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DATABASE_URL_PRODUCTION;
} else {
  connectionString = process.env.DATABASE_URL;
}

const connection = mongoose.createConnection(connectionString);

export const initialDB = async () => {
  connection.on("open", function () {
    connection.db.listCollections().toArray((err, collectionNamesList) => {
      if (err) {
        console.log(err);
        return;
      }

      const collection = collectionNamesList.find(
        (collectionName) => collectionName.name === "codeblocks"
      );

      if (collection) {
        return;
      }

      connection.db
        .collection("codeblocks")
        .insertMany(codeBlocksMigrationData, (err, res) => {
          if (err) throw err;
        });
    });
  });
};

mongoose.set("strictQuery", false);
mongoose.connect(connectionString);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => {
  console.log("Connected to mongoDB");
});

// Export initialDB if needed in another module
// export { initialDB };
