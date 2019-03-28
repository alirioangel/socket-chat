require("./config/_config");
const app = require("../app");
const http = require("http").Server(app);

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});
