const Bill = require('../models/Bill');
const Product = require('../models/Product');
class ProductController {
    // [GET] /:category/:subCategory/:name
    show(req, res, next) {
        Product.findOne({ name: req.params.name })
            .lean()
            .then((products) => res.render('detailProduct', { products }))
            .catch(next);
    }
    // [GET] /:category
    category(req, res, next) {
        var page = parseInt(req.query.page) || 1;
        var perPage = 8;
        if (page) {
            var skipNum = (page-1) * perPage;

            Product.find({ category: req.params.category })
                .skip(skipNum)
                .limit(perPage)
                .sort({ createdAt: -1 })
                .lean()
                .then((products) => res.render('category', { products }))
                .catch(next);
        }else {
            Product.find({ category: req.params.category })
                .sort({ createdAt: -1 })
                .lean()
                .then((products) => res.render('category', { products }))
                .catch(next);
        }
    }
    // [GET] /:subCategory
    subCategory(req, res, next) {
        var page = parseInt(req.query.page) || 1;
        var perPage = 8;
        if (page) {
            var skipNum = (page-1) * perPage;

            Product.find({ subCategory: req.params.subCategory })
                .skip(skipNum)
                .limit(perPage)
                .sort({ createdAt: -1 })
                .lean()
                .then((products) => res.render('subCategory', { products }))
                .catch(next);
        }else {
            Product.find({ subCategory: req.params.subCategory })
                .sort({ createdAt: -1 })
                .lean()
                .then((products) => res.render('subCategory', { products }))
                .catch(next);
        }
    }
    // [POST] /bill
    bill(req, res, next) {
        const bill = new Bill(req.body);
        bill.save();
        res.redirect('back');
    }
}

module.exports = new ProductController();
