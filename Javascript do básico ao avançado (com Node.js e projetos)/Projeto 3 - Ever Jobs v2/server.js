const express           = require('express');
const app               = express();
const router            = require('./router/routes');

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 8000, () => {
    console.log('O Express está rodando');
});