const ProductList = require('../models/ProductList');
 class SiteController{
    index(req, res, next) {
        ProductList.find({})
            .then((products) => {
                res.render('home', {
                    products: products
                });
            })
            .catch(next);
    }
};
module.exports = new SiteController();