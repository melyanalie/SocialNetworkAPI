const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect('mongodb://localhost/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
