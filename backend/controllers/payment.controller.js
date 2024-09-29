// import dotenv from 'dotenv';
// import Razorpay from 'razorpay';
// import Order from '../models/order.model';

// dotenv.config();

// export const createCheckoutSession = async (req, res) => {
//     try {
//         const { products } = req.body;

// 		if (!Array.isArray(products) || products.length === 0) {
// 			return res.status(400).json({ error: "Invalid or empty products array" });
// 		}

// 		let totalAmount = 0;

// 		const lineItems = products.map((product) => {
// 			const amount = Math.round(product.price * 100); 
// 			totalAmount += amount * product.quantity;

// 			return {
//                 name: product.name,
//                 amount: amount,
//                 quantity: product.quantity,
//             };
// 		});

//         const instance = new Razorpay({
//             key_id: process.env.RAZORPAY_KEY_ID,
//             key_secret: process.env.RAZORPAY_SECRET_KEY,
//           });

//           const order = await instance.orders.create({
//             amount: totalAmount, 
//             currency: "INR",
//             receipt: `receipt_${Date.now()}`,
//             metadata: {
// 				userId: req.user._id.toString(),
// 				products: JSON.stringify(
// 					products.map((p) => ({
// 						id: p._id,
// 						quantity: p.quantity,
// 						price: p.price,
// 					}))
// 				),
// 			},
//         }); 
//         res.status(200).json(order);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message});
//     }
// };

// export const checkoutSuccess = async (req, res) => {
// 	try {
//         const {
//             orderCreationId,
//             razorpayPaymentId,
//             razorpayOrderId,
//             razorpaySignature,
//             order
//           } = req.body;
      
//           const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET_KEY);
      
//           shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
      
//           const digest = shasum.digest("hex");
      
//           if (digest !== razorpaySignature)
//             return res.status(400).json({ msg: "Transaction not legit!" });

// 			// create a new Order
// 			const products = JSON.parse(order.metadata.products);
// 			const newOrder = new Order({
// 				user: order.metadata.userId,
// 				products: products.map((product) => ({
// 					product: product.id,
// 					quantity: product.quantity,
// 					price: product.price,
// 				})),
// 				totalAmount: order.amount_total / 100, // convert from cents to dollars,
// 				stripeSessionId: sessionId,
// 			});

// 			await newOrder.save();

// 			res.status(200).json({
// 				success: true,
// 				message: "Payment successful, order created, and coupon deactivated if used.",
// 				orderId: newOrder._id,
// 			});
// 	} catch (error) {
// 		console.error("Error processing successful checkout:", error);
// 		res.status(500).json({ message: "Error processing successful checkout", error: error.message });
// 	}
// };