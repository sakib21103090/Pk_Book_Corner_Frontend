import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../Cart/CartSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const items = useSelector(selectCartItems);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleDeliveryCharge = (charge) => {
    setDeliveryCharge(charge);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const Subtotal = items.reduce((amount, item) => {
    const price = item.discountPercentage
      ? Math.round(item.price * (1 - item.discountPercentage / 100))
      : item.price;
    return amount + price * item.quantity;
  }, 0);

  const TotalPrice = Subtotal + deliveryCharge;
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const onSubmit = (data) => {
    Swal.fire("Success", "Your order has been placed!", "success").then(() => {
      reset();
      setDeliveryCharge(0);
      setPaymentMethod("");
    });
  };

  return (
    <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="shadow-xl rounded-lg p-6 bg-yellow-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Checkout</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Delivery Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="border rounded-md p-2 w-full"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border rounded-md p-2 w-full"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="border rounded-md p-2 w-full"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="border rounded-md p-2 w-full"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      className="border rounded-md p-2 w-full"
                      {...register("postalCode", {
                        required: "Postal Code is required",
                      })}
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Delivery Options</h3>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleDeliveryCharge(90)}
                    className={`px-4 py-2 rounded-full shadow-lg focus:outline-none transition duration-300 ${
                      deliveryCharge === 90
                        ? "bg-yellow-600 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    Dhaka (90 Tk)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeliveryCharge(120)}
                    className={`px-4 py-2 rounded-full shadow-lg focus:outline-none transition duration-300 ${
                      deliveryCharge === 120
                        ? "bg-green-600 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    Outside Dhaka (120 Tk)
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handlePaymentMethod("bkash")}
                    className={`px-4 py-2 rounded-full shadow-lg focus:outline-none transition duration-300 ${
                      paymentMethod === "bkash"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    bkash
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePaymentMethod("Nagad")}
                    className={`px-4 py-2 rounded-full shadow-lg focus:outline-none transition duration-300 ${
                      paymentMethod === "Nagad"
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-500 text-white"
                    }`}
                  >
                    Nagad
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePaymentMethod("Cash on Delivery")}
                    className={`px-4 py-2 rounded-full shadow-lg focus:outline-none transition duration-300 ${
                      paymentMethod === "Cash on Delivery"
                        ? "bg-orange-600 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex text-xl justify-between font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{Subtotal} Tk</p>
                </div>
                <div className="flex text-xl justify-between font-medium text-gray-900">
                  <p>Total books</p>
                  <p>{totalItems}</p>
                </div>
                <div className="flex text-xl justify-between font-medium text-gray-900">
                  <p>Delivery charge</p>
                  <p>{deliveryCharge} Tk</p>
                </div>
                <div className="flex text-xl justify-between font-medium text-gray-900">
                  <p>Total price</p>
                  <p>{TotalPrice} Tk</p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center rounded-md  px-6 py-3 text-base font-medium text-white shadow-sm  border
                  ${
                    isValid? " bg-green-600 hover:bg-green-700"
                      : " bg-gray-200"
                  } 
                  `}
                  disabled={!isValid}
                >
                  Place Order
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <Link to="/cart">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                  >
                    <span aria-hidden="true">&larr;</span> Back to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
