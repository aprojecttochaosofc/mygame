module.exports = function broadcast(wss, players, clients) {


    let onlinePlayers = {};


    for(let id in players){


        if(players[id].online === true){

            onlinePlayers[id] = players[id];

        }


    }



    wss.clients.forEach(client => {


        if(client.readyState === 1){


            client.send(JSON.stringify({

                message:"playerssnapshot",

                players:onlinePlayers

            }));


        }


    });


};
