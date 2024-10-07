import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    totalAmount:{
        type: Number,
        required: true,
        min: 0,
    },
    paymentStatus:{
        type: String,
        required: true,
    },
},
{
    timeStamps: true,
}
);

const Order = mongoose.model('Order', orderSchema);

export default Order;