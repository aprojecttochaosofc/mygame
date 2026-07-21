const { Pool } = require("pg");
const crypto = require("crypto");

const callconfigs = require("../config");

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
  ws.send(JSON.stringify({ 
                message: "userlogued"
            }));
  
}
