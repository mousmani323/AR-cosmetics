"use client"
import React, { useState } from "react";
import { useCart } from '../../../context/CartContext';

export default function ProductClientPage({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.slug,
      name: product.title,
      price: product.price,
      quantity: quantity,
      image: product.image
    });
    alert("Added to cart!");
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image || "https://m.media-amazon.com/images/I/71k9RKiV0-L._AC_UL480_FMwebp_QL65_.jpg"}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed mt-4 border-b-2 mb-5 pb-5">
              {product.description || "No description available."}
            </p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex ml-auto items-center">
                <span className="mr-3">Quantity</span>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 border border-gray-300 rounded px-2 py-1"
                />
              </div>
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex ml-4 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded disabled:opacity-50"
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-500">{product.stock} items available in stock</p>
          </div>
        </div>
      </div>
    </section>
  );
}