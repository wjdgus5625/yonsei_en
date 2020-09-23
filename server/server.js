const express = require('express');
const app = express();
const search = require('./routes/search/index')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/search', search);

app.listen(4500, () => console.log('Server is Running on port 4500'))