const express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const Comments = require('../store/Comment');

/* GET Products page. */
router.get('/', function(_, res) {
  Products.get()
    .then(function(products) {      
      res.render('products', { products });
    })
});

/* GET Product by id */

router.get('/:id', function(req, res){
  Products.getById(req.params.id)
    .then(function(products) {
      res.render('product-detail', { name: products[0].name, description: products[0].description, price: products[0].price });
    })
});

module.exports = router;
