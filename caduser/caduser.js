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
                "SELECT * FROM users WHERE email = $1 AND password = $2",
                [data.signupEmail, data.password]
            );

            if (result.rows.length > 0) {

                const userId = createUserId(email);

                 ws.send(JSON.stringify({ 
                    message: "userexists",
                    dados:data
                }));

            } else {    
                ws.send(JSON.stringify({
                    message: "usercreated"
                }));

            }

        } catch (err) {
            ws.send(JSON.stringify({
                message: "servererror"
            }));

        }
    }

    checkLogin(data);

    
  
}
