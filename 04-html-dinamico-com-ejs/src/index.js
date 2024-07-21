const express = require("express");
const patch = require("node:path");
const app = express();
const PORT = 3000;

const storageUsers = [];

app.set("view engine", "ejs");
app.set("views", patch.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  storageUsers.push({email, password})
  
  res.redirect('/register')
})

app.get('/register', (req, res) => {
  res.render('register', {users: storageUsers})
})

app.listen(PORT, (req, res) => {
  console.log(`Servidor ativo ma porta na rota http://localhost:${PORT}`)
});
