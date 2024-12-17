const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId :{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  phone: {
    type: String,
    required: true,
    
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{4,5}$/, 'Please provide a valid zipcode'],
    },
  },
  productIds: [{
    type: Number,
    required: true,
  }],
  totalPrice: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
