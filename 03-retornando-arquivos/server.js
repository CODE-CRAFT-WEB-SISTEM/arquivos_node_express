const express = require("express");
const app = express();
const PORT = 7700;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home/index.html')
})

app.listen(PORT, () => {
    console.log(`servidor iniciado na porta http://localhost:${PORT}/`);
});