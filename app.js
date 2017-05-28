var app = require('express')();
var bodyParser = require('body-parser');
const jsonParser = bodyParser.json ({
    type: 'application/json'
});
const urlencodedParser = bodyParser.urlencoded ({
    extended: true,
    type: 'application/x-www-form-urlencoded'
});

app.use(jsonParser);
app.use(urlencodedParser);

app.listen(process.env.PORT || 8100, function() {
    console.log(`Listening hicapiher on port ${process.env.PORT || 8100}.`)
});

app.get('/', function (req, res) {
   res.send('Hello world');
});

app.get('/staging/test', function (req, res) {
   res.send('test staging');
});