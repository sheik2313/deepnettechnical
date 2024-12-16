var mongoose = require('mongoose');

var addFoodSchema = new mongoose.Schema({
    itemname: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('AddFood',addFoodSchema);
