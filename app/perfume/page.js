import Link from "next/link";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Perfume() {
  const products = await prisma.product.findMany({
    where: { category: 'perfume' }
  });

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">Perfumes</h1>
          <div className="flex flex-wrap justify-center -m-4">
            {products.map(product => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="p-4 sm:w-1/2 lg:w-1/5 md:w-1/3 flex shadow-lg m-2 flex-col items-center hover:shadow-xl transition-shadow"
              >
                <div>
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={product.title}
                      className="m-auto h-[30vh] md:h-[36vh] object-cover justify-center"
                      src={product.image || "https://m.media-amazon.com/images/I/71k9RKiV0-L._AC_UL480_FMwebp_QL65_.jpg"}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs text-center tracking-widest title-font mb-1 uppercase">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg text-center font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1 text-center font-bold text-red-600">${product.price.toFixed(2)}</p>
                    <p className="mt-1 text-center text-sm text-gray-500">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                  </div>
                </div>
              </Link>
            ))}
            {products.length === 0 && (
              <p className="text-center w-full text-gray-500">No perfume products available at the moment.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}