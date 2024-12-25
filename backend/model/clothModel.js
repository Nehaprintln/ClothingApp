const mongoose = require('mongoose');

const clothProductSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String, requierd: true},
    description: {type: String, default: ''},
    inStock: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now}
});

const Cloth = mongoose.model('Cloth', clothProductSchema);
module.exports = Cloth;