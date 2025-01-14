const mongoose = require('mongoose');
require('dotenv').config();

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Connection to database successful');
    } catch (error) {
        console.log('Connection to database failed: ', error);
    }
}

module.exports = connectDatabase;