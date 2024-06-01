import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const port = process.env.PORT || 8080;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (_req, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

app.get("/test", (_req, res) => {
    res.send("yes!");
});

io.on("connection", (socket) => {
    console.log("a user connected to " + socket.id);

    socket.on("input change", (value) => {
        socket.broadcast.emit("input change", value);
    });
});

server.listen(port, () => {
    console.log("server running at port " + port);
});