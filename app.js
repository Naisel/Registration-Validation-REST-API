const express = require('express');
const mongoose = require('mongoose');
const app = express();
const registerRoute = require('./routes/register');
const bodyParser = require('body-parser');

require('dotenv/config');
//middlewares

app.use(bodyParser.json());

app.use('/register', registerRoute);

//connection to database
const uri = process.env.DB_CONNECTION;
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('connected');

    }catch(err) {
        console.error(err);
    }
}

connect();


//

app.get('/', (req, res)=> {
    res.send('hi welcome home');
})
const PORT = process.env.PORT || 4000;
app.listen(PORT);