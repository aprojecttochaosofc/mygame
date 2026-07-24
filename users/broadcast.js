module.exports = function broadcast(wss, players, clients) {


    wss.clients.forEach(client => {


        if(client.readyState === 1){


            let userid = clients.get(client);


            let others = {};


            for(let id in players){


                // não manda o próprio player
                if(id !== userid){

                    others[id] = players[id];

                }


            }


            client.send(JSON.stringify({

                message:"playerssnapshot",

                players:others

            }));


        }


    });


};
