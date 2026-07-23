const express = require("express"); 
const http = require("http");
const WebSocket = require("ws");
const path = require("path");
const callconfigs = require("./config");
const homepage = require("./home");
const cadusers = require("./caduser/caduser");
const loginuser = require("./users/loginuser");
const uploadimage = require("./assets/js/uploadimage"); 

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});

app.get("/cadastro", (req, res) => {
    cadastro(req, res);
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
        if (data.message === "caduser") {           
            cadusers(ws,data);
        }

        if (data.message === "loginuser") {
            loginuser(ws, data);
        }

    });

});


server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor online");
});
