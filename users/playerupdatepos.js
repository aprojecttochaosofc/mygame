const { Pool } = require("pg");
const callconfigs = require("../config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl:{
        rejectUnauthorized:false
    }
});


module.exports = function playerupdatepos(ws,data,clients){

    async function updatePos(){

        let userid = clients.get(ws);


        if(!userid){

            console.log("Usuário não autenticado");
            return;

        }


        try{

            const result = await pool.query(
                `
                UPDATE users
                SET
                    posx = $1,
                    posy = $2,
                    stage = $3,
                    atualizado_em = CURRENT_TIMESTAMP
                WHERE session_id = $4
                `,
                [
                    data.posx,
                    data.posy,
                    data.stage,
                    userid
                ]
            );


            if(result.rowCount > 0){

                console.log(
                    "Posição salva:",
                    userid
                );

            }
            else{

                console.log(
                    "Usuário não encontrado no banco"
                );

            }


        }
        catch(err){

            console.log(
                "ERRO UPDATE POS:",
                err
            );

        }

    }


    updatePos();

}
