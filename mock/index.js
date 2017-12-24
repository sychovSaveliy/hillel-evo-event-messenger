let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 5006;
let $data = require('./routes/data');
$data.collections = require('./routes/services/collections');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", function (req, res) {
    return res.json({ message: "Hello! Its API!" })
});

app.route('/user/:id/')
  .get($data.getUserById);

app.route('/auth')
  .post($data.postDataUserById);


app.listen(port);
console.log("Mock server listening on port " + port);

module.exports = { app };
