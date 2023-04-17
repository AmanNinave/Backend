const mongoose = require('mongoose');

async function connectDatabase() {
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/blogs-example');

        console.log('Connected to database');

    }catch(err) {

        console.error('Could not connect to database');

    }
}

module.exports = connectDatabase ;     