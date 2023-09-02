import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { initialDB } from "./db.js";
import cors from "cors";
import indexRouter from "./routes/indexRoutes.js";
import codeBlockRouter from "./routes/codeBlockRoutes.js";

const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
app.use(cors());
const io = new Server(server);

app.use(bodyParser.urlencoded({ extended: true, limit: "1mb" }));
app.use(bodyParser.json());

initialDB();

app.use("/", indexRouter);
app.use("/codeBlocks", codeBlockRouter);

let numOfClients = 0;

io.on("connection", (socket) => {
  numOfClients += 1;
  socket.emit("clientsCounter", numOfClients);

  socket.on("disconnect", () => {
    numOfClients -= 1;
  });

  socket.on("codeEdit", (data) => {
    io.emit("sendStudentCode", data.data);
  });
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
