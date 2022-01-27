const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            default: 0,
        },
        image: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            require: true,
        },
        subCategory: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('product', Product);
