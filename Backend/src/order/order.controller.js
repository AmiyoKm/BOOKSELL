const { default: mongoose } = require('mongoose');
const Order = require('./order.model.js');

const createOrder = async (req, res) => {
    try {
        const { name, email, phone, address, productIds, totalPrice } = req.body;
        
        const newOrder = {
            userId:req.params.id,
            name, email, phone, address : {
                city: address.city, state: address.state, country: address.country, zipcode: address.zipcode
            }, productIds, totalPrice
        };
        //console.log(newOrder);
        
        const user =  await Order.create(newOrder);
        res.status(200).json({ message: "Order created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllOrderOfUser = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createOrder , getAllOrders ,getAllOrderOfUser
};