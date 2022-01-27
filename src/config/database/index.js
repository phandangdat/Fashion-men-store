const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/fashion_store', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        });
        console.log('Connect success!!');
    } catch (err) {
        console.log('Error connecting!!!');
    }
}

module.exports = { connect: connect };
