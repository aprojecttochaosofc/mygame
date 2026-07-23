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
    ssl: { rejectUnauthorized: false }
});

module.exports = function loginuser(ws, data) {
 


    async function checkLogin() {

        var email=data.email;
        var password=convertmd5(data.pass)

        try {

           ws.send(JSON.stringify({ 
                    message: "userlogued",
                    email:email,
               password:password
                }));

        } catch (err) {
            console.log("ERRO LOGIN:", err);
            ws.send(JSON.stringify({
                message: "servererror"
            }));

        }
    }

    checkLogin();

    
  
}
