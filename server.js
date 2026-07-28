const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const cadusers = require("./caduser/caduser");
const loginuser = require("./users/loginuser");
const playerupdate = require("./users/playerupdate");
const broadcast = require("./users/broadcast");
const playerupdatepos = require("./users/playerupdatepos");
const initialpos = require("./users/initialpos");
const getprofileuser = require("./users/getprofileuser");

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

const players = {};
const clients = new Map();
const lastPing = {};

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/cadastro", (req, res) => {
    cadastro(req, res);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({server});


wss.on("connection", (ws) => {

    ws.on("message", (msg) => {

        let data;

        try {
            data = JSON.parse(msg.toString());
        } catch {
            return;
        }

        switch(data.message){

            case 'startserver':
                ws.send(JSON.stringify({
                    message:"gamestarted",
                    datas:data
                }));
                break

                
            case 'ping':
                 if(data.userid){ lastPing[data.userid] = Date.now(); }
                    ws.send(JSON.stringify({
                        message:"pong"
                    }));
                break

            case 'loginuser' :
                loginuser(wss,ws,data,players,clients,lastPing);
                break 

            case 'getprofileuser':
                getprofileuser(ws,data);
                break

            case 'initialpos':
               initialpos(ws, data);
                break

            case 'playerupdatepos':
               playerupdatepos(ws,data);
                break

            

        }
 
        


    });


    ws.on("close",()=>{

        let userid = clients.get(ws);

        if(userid){

            delete players[userid];

            clients.delete(ws);

        }

    });


});


setInterval(()=>{

    broadcast(wss,players,clients);

},20);


setInterval(()=>{

    var now = new Date();
    for(var id in players){
        if(now - new Date(players[id].time) > 60000){
            console.log("Removendo jogador inativo:", id);
            delete players[id];
            wss.clients.forEach(client => {
                if(client.readyState === 1){
                    client.send(JSON.stringify({
                        message:"youdisconected",
                        userid:id,
                        players:players
                    }));
                }
            });
        }
    }
},5000);



server.listen(process.env.PORT || 3000,()=>{

    console.log("Servidor online");

});
