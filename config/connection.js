const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
