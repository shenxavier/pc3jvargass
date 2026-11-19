const express = require('express');
const cors = require('cors');
const datosUniversidades = require('./datos.json');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/universidades', (req, res) => {
    try {
        const universidades = datosUniversidades.map((u) => ({
            nombre: u.name,
            dominio: u.domains[0] || '',
            web: u.web_pages[0] || '',
        }));
        res.json(universidades);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`);
});