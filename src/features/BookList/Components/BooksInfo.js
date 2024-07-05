import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { fetchProductsByIdAsync, selectedProductById } from "./BooksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BooksInfo() {
  const product = useSelector(selectedProductById);
  console.log(product);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProductsByIdAsync(params.id));
  }, [dispatch, params.id]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
        <div className="w-16 h-16 border-8 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-yellow-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className=" pb-6 pt-6 bg-gradient-to-br  from-indigo-100 to-yellow-100">
      <div className="bg-white   max-w-screen-md rounded-xl shadow-2xl  mx-auto">
        <div className=" ">
          {/* Product info */}
          <div className="mx-auto   px-4  pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8  lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.BookName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Book information</h2>
              <p className="text-2xl font-bold text-gray-900">
                Books Price: $
                {Math.round(
                  product.price * (1 - product.discountPercentage / 100)
                )}
              </p>
              <p className="block line-through text-2xl text-gray-400">
                ${product.price}
              </p>
              {/* Reviews */}
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
                {/* Colors */}
                <div>
                  <h3 className=" tracking-wide text-2xl font-semibold">
                    <span>Author Name: </span>
                    {product.AuthorName}
                  </h3>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <span className="ml-2 text-2xl font-medium text-red-500">
                      {product.discountPercentage}% OFF
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-10 w-full relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gray-800 rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Add to Cart</span>
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div>
                <h3 className="sr-only">Image</h3>

                <div className="mt-6">
                  <img
                    src={product.images}
                    alt={product.BookName || "Book cover"}
                    className="w-full h-[400px] object-cover rounded-md shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-10"></div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  {" "}
                  description
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
