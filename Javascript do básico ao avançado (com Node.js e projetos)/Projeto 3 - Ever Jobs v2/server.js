const express           = require('express');
const app               = express();
const router            = require('./router/routes');
const createDb          = require('./database/create');

app.use(express.json());
//app.use(createDb);
app.use(router);

app.listen(process.env.PORT || 8000, () => {
    console.log('O Express está rodando');
});