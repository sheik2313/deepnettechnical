var addfoodschema = require('../model/addfoodschema');

var addmenudetail = async (req, res) => {
    const fooddetail = new addfoodschema({
        itemname: req.body. itemname,
        price: req.body.price,
        description: req.body. description
    });
    await fooddetail.save()
    .then((data) => {
        res.json({
            status: 200,
            msg: "food detail saved",
            data: data
        });
    })
    .catch((err) => {
        res.json({
            status: 400,
            msg: "detail not saved",
            err: err
        });
    });
};


var fooddetaildfind = (req, res) => {
    addfoodschema.find()
        .then((foodItems) => {
            res.json({
                status: 200,
                data: foodItems
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Failed to retrieve food items",
                error: err
            });
        });
};


module.exports = {addmenudetail,fooddetaildfind};
