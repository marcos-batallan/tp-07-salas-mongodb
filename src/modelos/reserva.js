const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema (
    {
        estudiante: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        sala: {},
        fecha: {},
        turno: {},
        personas: { type: Number, },
    },
    { collection: "reservas" },
)

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = { Reserva };