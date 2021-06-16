const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ;

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
   res.render("index.html")
})

app.get('/about', (req, res) => {
    res.render("about.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})