const { Pool } = require("pg");
const callconfigs = require("../config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl:{rejectUnauthorized:false}
});

module.exports = function getprofileuser(ws,data){

    ws.send(JSON.stringify({
                    message:"receiveprofile",
                    error:"01"
                }));

};
