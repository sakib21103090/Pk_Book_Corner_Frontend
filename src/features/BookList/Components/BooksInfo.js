import { useContext, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { fetchProductsByIdAsync, selectedProductById } from "./BooksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { addToCartAsync, selectCartItems } from "../../Cart/CartSlice";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BooksInfo() {
  const product = useSelector(selectedProductById);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useContext(AuthContext);

  const handleCart = (e) => {
    e.preventDefault();
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      Swal.fire("Oops", "Book is already added to cart", "warning");
    } else {
      dispatch(addToCartAsync({ ...product, quantity: 1, user: user.uid }));
      Swal.fire("Success", "Book is added to cart", "success");
    }
  };

  useEffect(() => {
    dispatch(fetchProductsByIdAsync(params.id));
  }, [dispatch, params.id]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-8 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-yellow-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pb-6 pt-6 bg-gradient-to-br from-indigo-100 to-yellow-100">
      <div className="bg-white max-w-screen-md rounded-xl shadow-2xl mx-auto">
        <div className="">
          {/* Product info */}
          <div className="mx-auto px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.BookName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Book information</h2>
              <p className="text-2xl font-bold text-gray-900">
                Book Price: $
                {Math.round(
                  product.price * (1 - product.discountPercentage / 100)
                )}
              </p>
              <p className="block line-through text-2xl text-red-400">
                ${product.price}
              </p>
              {/* rating */}
              <div className="mt-4 flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      product.rating > rating
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} out of 5 stars
                </span>
              </div>

              <form className="mt-10">
                {/* AuthorName */}
                <div>
                  <h3 className="tracking-wide text-base font-semibold">
                    <span>Author Name: </span>
                    {product.AuthorName}
                  </h3>
                </div>

                {/* discountPercentage */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <span className="ml-2 text-2xl font-medium text-red-500">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCart}
                  type="submit"
                  className="mt-10 w-full relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-green-500  rounded-lg  hover:bg-gray-500"
                >
                  <span className="relative">Add to Cart</span>
                </button>
              </form>
              <Link to="/">
  <button
    type="button"
    className="font-medium text-indigo-600 hover:text-indigo-500 mt-8 transition-colors ml-2"
  >
    <span aria-hidden="true">&larr;</span> Continue Shopping
  </button>
</Link>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200  lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div>
                <h3 className="sr-only">Image</h3>

                <div className="mt-6">
                  <img
                    src={product.images}
                    alt={product.BookName || "Book cover"}
                    className="w-full h-[450px] overflow-hidden rounded-md "
                  />
                </div>
              </div>

              <div className="mt-10"></div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
