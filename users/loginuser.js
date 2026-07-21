module.exports = function loginuser(ws, data) {
  ws.send(JSON.stringify({ 
                message: "userlogued"
            }));
  
}
