/* import express from "express";
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
    res.sendFile(join(__dirname, "client", "index.html"));
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
 */

const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})