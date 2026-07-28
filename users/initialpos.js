const { Pool } = require("pg");
const callconfigs = require("../config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl:{
        rejectUnauthorized:false
    }
});


module.exports = async function initialpos(ws, data) {

 

        try{

            const result = await pool.query(
                "SELECT posx, posy, stage FROM users WHERE email = $1",
                [
                    data.email
                ]
            );


            if(result.rows.length > 0){

                ws.send(JSON.stringify({

                    message:"initialpos",

                    posx:result.rows[0].posx,

                    posy:result.rows[0].posy,

                    stage:result.rows[0].stage

                }));

            }
            else{

                ws.send(JSON.stringify({

                    message:"initialposfail"

                }));

            }


        }
        catch(err){

            console.log("ERRO INITIAL POS:", err);

            ws.send(JSON.stringify({

                message:"servererror"

            }));

        }

    

};
