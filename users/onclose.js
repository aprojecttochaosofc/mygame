module.exports = function oncloser(ws, data) {
  ws.on("close",()=>{
  
          let userid = clients.get(ws);
  
          if(userid){
  
              delete players[userid];
  
              clients.delete(ws);
  
          }
  
      });

}
