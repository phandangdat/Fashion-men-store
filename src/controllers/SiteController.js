const Product = require('../models/Product');
class SiteController {
    // [GET] /
    home(req, res, next) {
        var page = parseInt(req.query.page) || 1;
        var perPage = 8;
        if (page) {
            var skipNum = (page-1) * perPage;

            Product.find({})
                .skip(skipNum)
                .limit(perPage)
                .sort({ createdAt: -1 })
                .lean()
                .then((products) => res.render('home', { products }))
                .catch(next);
        }else {
            Product.find({})
            .sort({ createdAt: -1 })
            .lean()
            .then((products) => res.render('home', { products }))
            .catch(next);
        }
    }
    // [GET] /:category/:subCategory/:name
    show(req, res, next) {
        var page = parseInt(req.query.page) || 1;
        var perPage = 8;
        if (page) {
            var skipNum = (page-1) * perPage;

            Product.find({})
                .skip(skipNum)
                .limit(perPage)
                .sort({ createdAt: -1 })
                .lean()
                .then((products) => res.render('newProducts', { products }))
                .catch(next);
        }else {
            Product.find({})
            .sort({ createdAt: -1 })
            .lean()
            .then((products) => res.render('newProducts', { products }))
            .catch(next);
        }
    }
    // [GET] /admin
    admin(req, res, next) {
        res.render('./manage/admin')
    }
}

module.exports = new SiteController();
