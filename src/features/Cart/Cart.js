import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  selectCartItems,
  updateCartAsync,
} from "./CartSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
    Swal.fire("Removed", "Book has been removed from the cart", "success");
  };

  const handleDeliveryCharge = (charge) => {
    setDeliveryCharge(charge);
  };

  const Subtotal = items.reduce((amount, item) => {
    const price = item.discountPercentage
      ? Math.round(item.price * (1 - item.discountPercentage / 100))
      : item.price;
    return amount + price * item.quantity;
  }, 0);

  const TotalPrice = Subtotal + deliveryCharge;
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  return (
    <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="shadow-xl rounded-lg p-6 bg-yellow-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 shadow-md">
                    <img
                      src={item.images}
                      alt={item.BookName}
                      className="h-full w-full object-cover object-center transition-transform transform hover:scale-110"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="hover:underline text-xl">
                          {item.BookName}
                        </h3>
                        {item.discountPercentage ? (
                          <div>
                            <p className="">
                              <p>
                                {(
                                  item.price -
                                  (item.price * item.discountPercentage) / 100
                                ).toFixed(2)}
                                Tk
                              </p>
                            </p>
                          </div>
                        ) : (
                          <p>{item.price.toFixed(2)}Tk</p>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500 flex items-center">
                        <span className="mr-2">Rating:</span>
                        <span className="text-yellow-400">★ {item.rating}</span>
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="quantity"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>
                        <select
                          onChange={(e) => handleQuantity(e, item)}
                          value={item.quantity}
                          className="rounded-md border-gray-300 shadow-sm"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div className="flex">
                        <button
                          onClick={(e) => {
                            handleRemove(e, item.id);
                          }}
                          type="button"
                          className="font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 rounded-full shadow-md"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-lg font-medium text-gray-700 mb-4">
                Delivery Location
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleDeliveryCharge(90)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none transition duration-300"
                >
                  Dhaka(90 Tk)
                </button>
                <button
                  onClick={() => handleDeliveryCharge(120)}
                  className="px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition duration-300"
                >
                  Without Dhaka(120Tk)
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 bg-yellow-50 p-6 rounded-lg shadow-md">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex text-xl justify-between font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{Subtotal}Tk</p>
              </div>
              <div className="flex text-xl justify-between font-medium text-gray-900">
                <p>Total books</p>
                <p>{totalItems}</p>
              </div>
              <div className="flex text-xl justify-between font-medium text-gray-900">
                <p>Delivery charge</p>
                <p>{deliveryCharge}Tk</p>
              </div>
              <div className="flex text-xl justify-between font-medium text-gray-900">
                <p>Total price</p>
                <p>{TotalPrice}Tk</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/checkoutpage"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors ml-2"
                    onClick={() => setOpen(false)}
                  >
                    <span aria-hidden="true">&larr;</span> Continue Shopping
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
