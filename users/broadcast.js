module.exports = function broadcast(wss, players, clients) {

    wss.clients.forEach(client => {

        if(client.readyState === 1){

            client.send(JSON.stringify({

                message:"playerssnapshot",

                players:players

            }));

        }

    });

};
