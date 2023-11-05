const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoriaRoutes');
const estadosRoutes = require('./routes/estadosRoutes');
const marcasRoutes = require('./routes/marcasRoutes');
const productosRoutes = require('./routes/productosRoutes');
const rolesController = require('./routes/rolesRoutes');
const usuariosController = require('./routes/usuariosRoutes');
const ventasController = require('./routes/ventasRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/categoria", categoriaRoutes);
app.use("/estados",estadosRoutes);
app.use("/marcas",marcasRoutes);
app.use("/productos",productosRoutes);
app.use("/roles",rolesController);
app.use("/usuarios",usuariosController);
app.use("/ventas",ventasController);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});