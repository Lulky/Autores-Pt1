const express = require("express");
const cors = require("cors");
const app = express();

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//PErimer accesar desde un origen distinto
app.use (
    cors({
        origin: "http://localhost:3000"
    })
)

//Inicializamos DB
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas= require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos SErver
app.listen(8000, () => console.log("servidor listo!"));
