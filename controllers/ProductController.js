const ProductList = require('../models/ProductList');
const { mongooseToObject } = require('../util/mongoose');
 class ProductController{
     // [GET] /products/create
    create(req, res, next){
        res.render('create');
        next();}
    store(req, res, next){
        const product = new ProductList(req.body);
        product
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
        }
    show(req, res, next) {
        console.log(req.params);
        ProductList.findOne({ name: req.params.name }) // Sử dụng req.params.name hoặc trường khác phù hợp
            .then((product) => {
                if (!product || !product.name) {
                    res.render('productDetail', {
                        product: null, // Gửi null để chỉ ra sản phẩm không được tìm thấy
                    });
                } else {
                    res.render('productDetail', {
                        product: product,
                    });
                }
            })
            .catch(next);
        }
};

module.exports = new ProductController();