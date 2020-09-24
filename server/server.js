const express = require('express');
const app = express();
const http = require('http')
const search = require('./routes/search/index')
const cors = require('cors')
const createError = require('http-errors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/search', search);

app.use((req, res, next) => {
    next(createError(404)); 
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log({
        status: err.status || 500,
        message: err.message
    })

    // render the error page
    res.status(err.status || 500).send({
        status: err.status || 500,
        message: err.message
    });
});

http.createServer(app).listen(4500, () => console.log('Server is Running on port 4500'))