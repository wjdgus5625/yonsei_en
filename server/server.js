const express = require('express');
const app = express();
const api = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use('/api', api);

app.listen(4000, () => console.log('Server is Running on port 4000'))