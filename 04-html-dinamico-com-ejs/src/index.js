const express = require('express');
const app = express();
const PORT = 3000;

const getUser = []

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/cadastro/index.html');
});

app.post('/users', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    getUser.push({username, password})

    res.redirect('/users')
})

app.listen(PORT, () => {
    console.log(`Servidor on-line na rota http://localhost:${PORT}`)
})