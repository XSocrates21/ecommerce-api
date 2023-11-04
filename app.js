const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoriaRoutes');
const estadosRoutes = require('./routes/estadosRoutes');
const marcasRoutes = require('./routes/marcasRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/categoria", categoriaRoutes);
app.use("/estados",estadosRoutes);
app.use("/marcas",marcasRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});