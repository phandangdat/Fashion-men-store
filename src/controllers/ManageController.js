const Product = require('../models/Product');
const Bill = require('../models/Bill');

class ManageController {
    // [GET] /create
    create(req, res, next) {
        res.render('manage/create');
    }
    // [POST] /store
    store(req, res, next) {
        const product = new Product(req.body);
        product
            .save()
            .then(() => res.redirect('/stored'))
            .catch((error) => {});
    }
    // [GET] /stored
    stored(req, res, next) {
        Product.find({})
            .lean()
            .sort({ createdAt: -1 })
            .then((products) => res.render('manage/stored', { products }))
            .catch(next);
    }
    // [GET] /:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .lean()
            .then((products) => res.render('manage/edit', { products }))
            .catch(next);
    }
    // [PUT] /:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .lean()
            .then(() => res.redirect('stored'))
            .catch(next);
    }
    // [DELETE] /:id
    delete(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [GET] /bill-manage
    billManage(req, res, next) {
        Promise.all([Bill.find({}), Bill.countDocumentsDeleted(), Bill.countDocuments()])
            .then(([bills, deletedCount, count]) => {
                bills = bills.map(bill => bill.toObject());
                res.render('./manage/bill-manage', { count, deletedCount, bills })
            })
            .catch(next);
    }
    // [DELETE] /:id
    deleteBill(req, res, next) {
        Bill.delete({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [DELETE] /:id
    forceDeleteBill(req, res, next) {
        Bill.deleteOne({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }    
    // [GET] /bill-manage/order-packed
    orderpPacked(req, res, next) {
        Promise.all([Bill.findDeleted({}), Bill.countDocuments(), Bill.countDocumentsDeleted()])
            .then(([bills, count, deletedCount]) => {
                bills = bills.map(bill => bill.toObject());
                res.render('./manage/order-packed', { deletedCount, count, bills })
            })
            .catch(next);
    }
    // [PATCH] /bill/:id/restore
    restore(req, res, next) {
        Bill.restore({ _id: req.params.id })
            .lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ManageController();
