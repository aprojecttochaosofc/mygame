const { Pool } = require("pg");
const crypto = require("crypto");

const callconfigs = require("../config");


function convertmd5(texto) {

    return crypto
        .createHash("md5")
        .update(String(texto))
        .digest("hex");

}


function createUserId(email) {

    const emailMd5 = crypto
        .createHash("md5")
        .update(email.toLowerCase())
        .digest("hex");


    const sessionId = crypto.randomUUID();


    return `${sessionId}_${emailMd5}`;

}



const pool = new Pool({

    connectionString: callconfigs("postgre"),

    ssl:{
        rejectUnauthorized:false
    }

});



module.exports = function loginuser(ws, data, players, clients, lastPing) {


async function checkLogin(){


    var email = data.email;

    var password = convertmd5(data.pass);



    try{


        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1 AND password = $2",
            [
                email,
                password
            ]
        );



        if(result.rows.length > 0){


            const userId = createUserId(email);


            clients.set(
                ws,
                userId
            );


            lastPing[userId] = Date.now();



            const user = result.rows[0];



            // cria somente esse jogador no servidor
            players[userId] = {

                id:userId,

                x:user.posx,

                y:user.posy,

                stage:user.stage,

                animation:"player_idle_down"

            };



            // responde somente para quem logou
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
