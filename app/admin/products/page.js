import React from 'react';
import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <Link href="/admin/products/new" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Add New Product
        </Link>
      </div>

      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Stock</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map(product => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{product.title}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span>{product.category}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span>${product.price.toFixed(2)}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <span>{product.stock}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center space-x-4">
                    <Link href={`/admin/products/edit/${product.id}`} className="text-blue-500 hover:text-blue-700">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500">No products found. Add some!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}