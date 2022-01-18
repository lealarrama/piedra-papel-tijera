const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'/public');
app.use(express.static(publicPath));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))

})


app.listen(process.env.PORT ||
    4000,() => {
    console.log('Servidor funcionando en el puerto 4000');
})
