const express           = require('express');
const app               = express();
const router            = require('./router/routes');
const bodyParser        = require('body-parser')

app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8000, () => {
    console.log('O Express está rodando');
});