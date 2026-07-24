const express = require("express"); 
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const callconfigs = require("./config");
const homepage = require("./home");

const cadusers = require("./caduser/caduser");
const loginuser = require("./users/loginuser");
const playerupdate = require("./users/playerupdate");
const broadcast = require("./users/broadcast");


const app = express();


app.use(
    "/assets",
    express.static(path.join(__dirname, "assets"))
);



const players = {};
const clients = new Map();



app.get("/", (req,res)=>{

    res.sendFile(
        path.join(__dirname,"index.html")
    );

});



app.get("/cadastro",(req,res)=>{

    cadastro(req,res);

});



const server = http.createServer(app);



const wss = new WebSocket.Server({
    server
});




wss.on("connection",(ws)=>{


    ws.on("message",(msg)=>{


        let data;


        try{

            data = JSON.parse(msg.toString());

        }
        catch{

            return;

        }




        if(data.message === "startserver"){


            ws.send(JSON.stringify({

                message:"gamestarted",

                datas:data

            }));


        }





        if(data.message === "caduser"){


            cadusers(
                ws,
                data
            );


        }





       if (data.message === "loginuser") {

    loginuser(
        ws,
        data,
        players,
        clients
    );

}






        if(data.message === "playerupdate"){


            playerupdate(
                ws,
                data,
                players,
                wss
            );


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






// envia os jogadores online para todos a cada 100ms
setInterval(()=>{


    broadcast(
        wss,
        players,
        clients
    );


},100);






server.listen(
    process.env.PORT || 3000,
    ()=>{

        console.log("Servidor online");

    }
);
