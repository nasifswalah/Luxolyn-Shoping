import Razorpay from "razorpay";
import crypto from 'crypto';
import Order from "../models/order.model.js";

export const paymentCheckout = async (req, res) => {
    try {
        const { totalAmount } = req.body;

        const newOrder = await Order.create({
            user: req.user._id,
            totalAmount,
            paymentStatus: 'Pending',
        });

        if(!newOrder) {
            return res.status(500).json({message: "Failed to create order, tay again later"});
        }

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET_KEY,
          });
      
          const options = {
            amount: totalAmount * 100,
            currency: "INR",
            receipt: newOrder._id
          };
      
          const order = await instance.orders.create(options);
          if (!order) {
            return res.status(500).json({message: "Failed to create order, tay again later"});
          }

          res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to create order"});
    }
};

export const orderSuccess = async (req, res) => {
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            receipt,
          } = req.body;
      
          const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET_KEY);
      
          shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
      
          const digest = shasum.digest("hex");
      
          if (digest !== razorpaySignature)
            return res.status(400).json({ message: "Transaction not legit!" });

          await Order.findByIdAndUpdate(receipt, {paymentStatus : "Paid"}, {new: true});

          res.status(200).json({ message: "Your order placed. Development progress: You are in test mode"});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}