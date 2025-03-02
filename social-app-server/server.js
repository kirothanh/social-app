const express = require("express");
const { createServer } = require("node:http");
const socketIO = require("socket.io");
const cors = require('cors')
const connectDB = require("./src/config/db");
const socketHandler = require("./src/socket/socketHandler")

const app = express();
const server = createServer(app);
require("dotenv").config();

const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));

app.use(express.json()); //Nhận body từ json
app.use(express.urlencoded({ extended: true })) //Nhận body từ urlencoded
app.use(express.static('public'));

socketHandler(io)

// Route
const api_V1 = require("./src/routes/api");
app.use('/api', api_V1);

server.listen(process.env.PORT, () => {
  console.log(`Server running: http://localhost:${process.env.PORT}`);
});