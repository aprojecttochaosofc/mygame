const { Pool } = require("pg");
const crypto = require("crypto");

const callconfigs = require("../config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl: { rejectUnauthorized: false }
});

module.exports = function cadusers(ws, data) {
 


    async function checkLogin(data) {

        try {

            const result = await pool.query(
                "SELECT id FROM users WHERE email = $1",
                [data.signupEmail]
            );

            if (result.rows.length > 0) {  

                 ws.send(JSON.stringify({ 
                    message: "userexists",
                    dados:data
                }));

            } else {    
                

                const insertuser = await pool.query(
                        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
                        [data.signupName, data.signupEmail, data.password]
                    );

                if (insertuser.rowCount > 0) {
                    ws.send(JSON.stringify({
                        message: "usercreated"
                    }));
                }else{
                    ws.send(JSON.stringify({
                        message: "usernotcreated"
                    }));
                }

            }

        } catch (err) {
            console.error(err);
            ws.send(JSON.stringify({
                message: "servererror"
            }));

        }
    }

    checkLogin(data);

    
  
}
