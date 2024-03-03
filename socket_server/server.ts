import { Server } from "socket.io";
import * as express from "express";
import * as cors from "cors"; 
import { createServer } from "http";

const app = express();
const server = createServer(app);
const io = new Server(server, { 
  cors: {
    origin: ["http://localhost:3000"]
  }
 });

io.on("connection", socket => {
  console.log("socket id", socket.id);
  socket.on("input_message", (msg: string) => {
    io.emit("input_message", msg);
  });
});

server.listen(3001, () => {
	console.log("Server running!");
});
