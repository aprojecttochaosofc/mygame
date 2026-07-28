const { Pool } = require("pg");
const callconfigs = require("../config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl:{
        rejectUnauthorized:false
    }
});

module.exports = function playerupdatepos(ws,data) {

    async function updatePos(){

        try{

            const result = await pool.query(
                `
                UPDATE users
                SET
                    posx = $1,
                    posy = $2,
                    stage = $3
                WHERE email = $4
                `,
                [
                    data.posx,
                    data.posy,
                    data.stage,
                    data.email
                ]
            );


            if(result.rowCount > 0){

                console.log("Posição salva:", data.email);

            }
            else{

                ws.send(JSON.stringify({
                    message:"playerupdatefail"
                }));

            }

        }
        catch(err){

            console.log("ERRO UPDATE POS:", err);

            ws.send(JSON.stringify({
                message:"servererror"
            }));

        }

    }


    updatePos();

};
