const mongoose = require("mongoose");
const User = require("../models/user.model")

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  company: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('product', productSchema)