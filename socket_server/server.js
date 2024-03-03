"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const express = require("express");
const http_1 = require("http");
const app = express();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
io.on("connection", socket => {
    console.log("socket id", socket.id);
    socket.on("input_message", (msg) => {
        io.emit("input_message", msg);
    });
});
server.listen(3001, () => {
    console.log("Server running!");
});
//()
