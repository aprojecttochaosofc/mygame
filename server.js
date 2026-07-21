const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const callconfigs = require("./config");
const homepage = require("./home");
const cadastro = require("./caduser/caduser");
const loginuser = require("./users/loginuser");

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
    homepage(req, res);
});

app.get("/cadastro", (req, res) => {
    cadastro(req, res);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ...
