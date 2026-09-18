const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).json({
        estado: "Operativo",
        mensaje: "API Node.js ejecutándose en producción."
    });
});

app.get('/datos',(req, res) => {
    res.status(200).json({ data: ["ADSO", "DevOps", "Seguridad"] });
});

app.get('/api/crash', (req, res) => {
    cosole.error("[FATAL ERROR] Fallo de segmento. El sistema se ha quedado sin memoria.");
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`[SERVER] API escuchando en el puerto ${PORT}`);
});