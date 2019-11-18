let bodyParser = require('body-parser');
let cors = require('cors');
let express = require('express');
let controller = require('./controller');

let app = express();
let port = process.env.PORT || 3500;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

app.listen(port);
console.log('Transactions Web Service started on: ' + port);