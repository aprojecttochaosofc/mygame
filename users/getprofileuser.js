const { Pool } = require("pg");
const callconfigs = require("../config"); 

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl:{rejectUnauthorized:false}
});

module.exports = async function getprofileuser(ws,data){

    try{

        var email=data.email;

        if(!email){

            ws.send(JSON.stringify({
                message:"notreceiveprofile",
                error:"01"
            }));

            return;

        }

        const result=await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if(result.rows.length==0){

            ws.send(JSON.stringify({
                message:"notreceiveprofile",
                error:"02"
            }));

            return;

        }

        const profile=result.rows[0];
 
       ws.send(JSON.stringify({
        message:"receiveprofile",
        profile:profile
    }));

    }catch(err){

        console.log(err);

        ws.send(JSON.stringify({
            message:"notreceiveprofile",
            error:"03"
        }));

    }

};
