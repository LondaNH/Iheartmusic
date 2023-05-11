const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  Package: [
    {
      type: Schema.Types.ObjectId,
      // Switch "Product" to "Package"
      ref: 'Package'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;