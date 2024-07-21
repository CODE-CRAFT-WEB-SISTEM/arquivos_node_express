const express = require('express');
const path = require('node:path');
const PORT = 3000;
const app = express();
let registerUsers = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/users', (req, res) => {

    const { email } = req.body

    registerUsers.push({ email })

    res.redirect('/users')
});

app.get('/users', (req, res) => {
    res.render('users', { getUsers: registerUsers });
});

app.post('/users/delete', (req, res) => {
    const { email } = req.body
    registerUsers = registerUsers.filter(item => item.email !== email)
    res.redirect('/users')

})

app.listen(PORT, (req, res) => {
    console.log(`Servidor ativo na rota http://localhost:${PORT}`)
});


