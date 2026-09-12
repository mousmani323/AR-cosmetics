import React from 'react';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const productsCount = await prisma.product.count();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-4xl text-red-600 font-bold">{productsCount}</p>
        </div>
        {/* We can add more stats here in the future, like Total Orders, Total Users, etc. */}
      </div>
    </div>
  );
}