var express = require('express'),
    helloController = require('./controllers/helloHelper');

var port = process.env.PORT || 8000;

var router = express.Router();

var app = express();

app.use('/api', router);

app.get('/', function (req, res) {
    res.send('Welcome to Best API unni can write');
});

router.route('/hello')
    .get(helloController.displayHello)

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});




app.listen(port, function () {
    console.log("Gulp is running on port: " + port);
});