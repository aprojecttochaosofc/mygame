module.exports = function loginuser(req, res) {
  ws.send(JSON.stringify({
                message: "userlogued"
            }));
  
}
