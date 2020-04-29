const express = require('express')

router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handeling GET request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'Handeling GET request to /products special ID',
            id: id
        });
    }  else {
        res.status(200).json({
            message: 'Handeling GET request to /products ID'
        });
    }
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handeling POST request to /products',
        createdProduct: product
    });
});


router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    });
});



module.exports = router;