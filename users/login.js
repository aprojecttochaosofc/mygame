module.exports = function login(wss,req, res) {
wss.on("connection", (ws) => {

    ws.on("message", (msg) => {

        let data;

        try {
            data = JSON.parse(msg.toString());
        } catch {
            return;
        }


       


    });


    oncloser(ws,data);


});
}
