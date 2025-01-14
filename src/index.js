// dependencies
const express = require('express');
const cors = require('cors');
const connectDatabase = require('../database/connection');

// route dependencies
const posts = require('./routes/posts.router');

// setup
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// connect to database
connectDatabase()

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/posts', posts);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});