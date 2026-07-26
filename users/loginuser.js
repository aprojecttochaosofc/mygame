module.exports = function loginuser(ws, data, players, clients, lastPing) {


async function checkLogin(){


    var email = data.email;

    var password = convertmd5(data.pass);



    try{

        let result;


        if(data.reconnect === true){


            result = await pool.query(
                "SELECT * FROM users WHERE email = $1",
                [
                    email
                ]
            );


        }
        else{


            result = await pool.query(
                "SELECT * FROM users WHERE email = $1 AND password = $2",
                [
                    email,
                    password
                ]
            );


        }



        if(result.rows.length > 0){


            const userId = createUserId(email);



            clients.set(
                ws,
                userId
            );



            lastPing[userId] = Date.now();



            const user = result.rows[0];



            players[userId] = {

                id:userId,

                x:user.posx,

                y:user.posy,

                stage:user.stage,

                animation:"player_idle_down"

            };



            ws.send(JSON.stringify({

                message:"userlogued",

                email:email,

                userid:userId,

                posx:user.posx,

                posy:user.posy,

                stage:user.stage

            }));



        }
        else{


            ws.send(JSON.stringify({

                message:"loginfailed"

            }));


        }



    }
    catch(err){


        console.log(
            "ERRO LOGIN:",
            err
        );


        ws.send(JSON.stringify({

            message:"servererror"

        }));


    }


}



checkLogin();


}
