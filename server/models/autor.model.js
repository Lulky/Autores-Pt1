const mongoose = require("mongoose");
const { stringify } = require("querystring");

const EsquemaAutor = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre es obligatorio"],
        minlength: [2, "nombre debe tener al menos 2 caracteres"],
        unique: [true, "El autor ya esta siendo usado"]
    }
},{timestamps: true, versionKey: false})

const Autor = mongoose.model("autores", EsquemaAutor);
module.exports = Autor;