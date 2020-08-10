const express       = require('express');
const exphbs        = require('express-handlebars');
const app           = express();
const path          = require('path');
const db            = require('./src/db/job');
const bodyParser    = require('body-parser')

//cria o banco
 db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log('O Express está rodando');
    }).catch(err => console.log(err));
});

//configurações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handlebars
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/src/views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

//static folder
app.use(express.static(path.join(__dirname, '/src/public')));

//rotas
app.use('/job', require('./src/controllers/job'));
app.use('/', require('./src/controllers/index'));

//gcloud app deploy
//gcloud app browse