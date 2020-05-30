var express = require('express');
const bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/', require('./routes/calendarnew'));
app.use(express.static("public"));


// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     res.render('notFound');
// });

//listen to port
const port = process.env.port || 3000;
app.listen(port);
console.log('You are listening to port 9000 : open http://localhost:9000/ in browser');
