const mongoose = require('mongoose')
const ProductList = require('./models/ProductList')
// mongoose.connect('mongodb://localhost/e-commerce', { useNewUrlParser: true });
// const newProduct = {
//     name: 'Samsung Galaxy A34 5G 128GB Chính Hãng (BHĐT)',
//     description: 'Samsung Galaxy A34 128GB (BHĐT) là máy mới, nguyên Seal 100%, sản phẩm chỉ kích hoạt trực tuyến và được bảo hành trong vòng 12 tháng',
//     image: 'https://cdn-v2.didongviet.vn/files/products/2023/5/9/1/1686296072076_samsung_galaxy_a34_128gb_xanh_dao_didongviet_1.jpg'
// };

// Creating and saving the new product
// ProductList.create(newProduct)
//     .then(createdProduct => {
//         console.log('New product created and saved successfully:', createdProduct);
//     })
//     .catch(error => {
//         console.error('Error occurred while creating the product:', error);
//     });

// ProductList.find()
//     .then(Product => {
//         console.log('New product created and saved successfully:', Product);
//     })
//     .catch(error => {
//         console.error('Error occurred while creating the product:', error);
//     });
async function getProductList() {
    try {
        await mongoose.connect('mongodb://localhost/e-commerce', { useNewUrlParser: true });
        const productList = await ProductList.find({});
        console.log(productList); // Do something with the fetched data
        
        mongoose.connection.close(); // Close the connection when done
    } catch (error) {
        console.error(error);
    }
}

getProductList();