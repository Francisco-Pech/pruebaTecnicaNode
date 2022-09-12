const corstOptions  = require('./config/corsOptions');
const PORT          = process.env.SERVER_PORT || 3000;
const routes        = require('./routes/router');
const sequelize     = require('./database/db');
const bodyParser    = require('body-parser');
const { engine }    = require('express-handlebars');
const express       = require('express');
const cors          = require('cors');
const app           = express();
require('dotenv').config();

app.use(cors(corstOptions));

app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.send('Welcome to Test'));
app.use(routes);  

app.listen(PORT,() =>{
    console.log(`Server Run On Port: ${PORT}`);

    sequelize.sync({force:false})
    .then(() => {
        console.log('Successful connection to database');
    }).catch(error => {
        console.log('Failed connection to database: ', error);
    });
});



