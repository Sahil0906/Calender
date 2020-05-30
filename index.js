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
const port = process.env.PORT || 3000;

app.listen(port);
console.log(port);
