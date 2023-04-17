const connectDatabase = require('./db/connectDatabase');
const express = require('express');

const app = express();

app.use(express.json());


app.get('/' , ( req , res ) => {

    res.send("connected to database");

})

connectDatabase()
.then( () => {

    app.listen('8080' , () => {
        console.log('server started on http://localhost:8080');
    })

});





