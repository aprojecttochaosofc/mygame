module.exports = function getprofileuser(ws,data) {


   ws.send(JSON.stringify({
       message:"receiveprofile"
   }));


};
