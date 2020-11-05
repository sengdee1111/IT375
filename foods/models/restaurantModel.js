const mongoose = require('mongoose');
const ddaaSchema = new mongoose.Schema({
id: Number,
ProductName: String,
Ingredient: String,
Size: String,
Price: String,
imageURL: String
});
const Ddaa = mongoose.model('Ddaa',ddaaSchema);
module.exports = Ddaa;