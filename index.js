const express = require('express')
const app = express()
const port = 3000
const routes   = require('./app/routes.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const path  = require('path');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
routes(app);
app.listen(port, () => console.log(`Example app listening on port port!`))