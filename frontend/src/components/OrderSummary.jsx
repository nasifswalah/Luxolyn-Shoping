import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from '../lib/axios.js'

const OrderSummary = () => {
  const { total } = useSelector((state) => state.cart);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const handleCheckout = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        toast.error("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const result = await axios.post("/payment/checkout", {
        totalAmount: total,
      });

      if (!result) {
        toast.error("Server error. Are you online?");
        return;
      }

      const { amount, id: order_id, currency, receipt } = result.data;

      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Luxolyn",
        description: "Test Transaction",
        image: null,
        order_id: order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            receipt,
          };

          const result = await axios.post("/payment/success", data);
		  toast.success(result.data.message);
        },
        prefill: {
          name: "Soumya Dey",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Soumya Dey Corporate Office",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
		console.log(error);
		
      toast.error(error?.response?.data?.message || "Payment Failed");
    }
  };

  return (
    <motion.div
      className="space-y-4 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(61,27,56,0.24)] sm:p-6 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-semibold text-white ">Order summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-300">Total price</dt>
            <dd className="text-base font-medium text-white">₹{total}</dd>
          </dl>
        </div>

        <motion.button
          className="flex w-full items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-[#a16bacc4] hover:text-white  "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </motion.button>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-400">or</span>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#833991] to-[#CE5ED5] "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
