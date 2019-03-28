require("./config/_config");
const app = require("../app");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io").listen(server);

io.emit("some event", { for: "everyone" });

io.on("connection", socket => {
    console.log(`un usuario se ha conectado`);

    socket.on("chat message", function(msg) {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("Usuario desconectado");
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});
