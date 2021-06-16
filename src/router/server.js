const fs = require("fs");
const path = require("path");
const express = require('express')
let sociosRoutes = require("../router/socios-routes.js");
const app = express();
app.use(express.json());
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
// ----

app.use('/api/socios', sociosRoutes);


/* app.use('/api/canchas', canchasRoutes);
app.use('/api/reservas', reservasRoutes); */

const puerto = 3001;
const server = app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${server.address().port}`)
});
