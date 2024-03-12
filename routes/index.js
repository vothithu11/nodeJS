const siteRouter = require('./site');
const productsRouter = require('./products');
const validateMiddleWare = require('../middleware/validateMiddleWare');
function route(app) {
    app.use('/', siteRouter);
    app.use('/products', productsRouter);
    app.use('/products/create',validateMiddleWare);
}

module.exports = route;
