const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const homepage = require("./home");
const cadastro = require("./carduser");

const app = express();

app.get("/", (req, res) => {
    cadastro(req, res);
});
app.get("/cadastro", (req, res) => {
    homepage(req, res);
});
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {

    ws.on("message", (msg) => {

        let data;

        try {
            data = JSON.parse(msg.toString());
        } catch {
            return;
        }

        if (data.message === "startserver") {
            ws.send(JSON.stringify({
                message: "gamestarted"
            }));
        }

    });

});

server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor online");
});
