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
    res.status(200).json({
        message: 'Handeling POST request to /products'
    });
});


module.exports = router;