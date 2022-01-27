const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Bill = new Schema(
    {
        image: { type: String, require: true },
        nameProduct: { type: String, require: true },
        price: { type: String, require: true },
        size: { type: String },
        quantity: { type: Number, default: 1 },
        nameCustomer: { type: String, require: true },
        phoneNumber: { type: String, require: true },
        email: { type: String },
        address: { type: String, require: true },
        note: { type: String },
    },
    {
        timestamps: true,
    }
);
//add plugin
Bill.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

module.exports = mongoose.model('bills', Bill);
