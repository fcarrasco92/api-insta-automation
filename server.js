const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require("./config");
//const User = require('./app/models/user');

const apiRoutes = require('./app/routes/api')

// settings
const port = process.env.PORT || 3000;
mongoose.connect(config.database,{
    useNewUrlParser: true
}); // db connection
mongoose.Promise = global.Promise;

//app.set('superSecret', config.secret);


//middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

// app routes
app.get('/', (req, res) => {
    res.send('Hello, Welcome to API Instagram Automation');
});

/*
app.get('/setup',(req, res) =>{
    const testUser = new User({
        name: 'Fazt',
        password: 'password',
        admin: true
    });
    testUser.save((err) =>{
        if(err) throw err;
        console.log('User saved succesful');
        res.json({
            success: true            
        });
    });
});
*/

// api
app.use('/api', apiRoutes);

app.listen(port, (req, res) => {
    console.log('Server on port 3000');
});