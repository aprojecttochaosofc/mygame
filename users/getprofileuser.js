const { Pool } = require("pg");
const callconfigs = require("../config");
const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl:{rejectUnauthorized:false}
});
module.exports = function getprofileuser(ws,data) {
   async function checkLogin(){
      var email = data.email;
    try{
       let result;

       if(email){
          result = await pool.query(
                    "SELECT * FROM users WHERE email = $1",
                    [email]
                );
             if(result.rows.length > 0){
                const profile = result.rows[0];
                ws.send(JSON.stringify({
                   message:"receiveprofile",
                   nome:profile.nome,
                   apelido:profile.apelido,
                   datanasc:profile.data_nascimento,
                   pais:profile.pais,
                   telefone:profile.telefone,
                   whatsapp:profile.whatsapp,
                   email:profile.email,
                   emailrecuperacao:profile.email_recuperacao,
                   dinheiro:profile.dinheiro,                   
                   score:profile.score,
                   life:profile.life,
                   lifebar:profile.lifebar,
                   tipoconta:profile.tipo_conta,
                   stage:profile.stage,
                   activity:profile.activity,
                   sessionid:profile.session_id,
                   loginat:profile.login_at,
                   logoutat:profile.logout_at,
                   lastactivity:profile.last_activity,
                   criadoem:profile.criado_em,
                   stage:profile.stage,
                   atualizadoem:profile.atualizado_em
                   
               }));
                
             }else{
               ws.send(JSON.stringify({
                   message:"notreceiveprofile",
                   error:"02"
               }));

             }
       }else{
          ws.send(JSON.stringify({
             message:"notreceiveprofile",
             error:"01"
         }));
      }

      
    }
      

   }

   


};
