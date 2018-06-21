var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.enable("jsonp callback");
app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var server = app.listen(app.get('port'), function() {
    console.log("연락처 서비스가 " + app.get('port') + "번 포트에서 시작되었습니다!");
});

var router = require('./routes')(app);