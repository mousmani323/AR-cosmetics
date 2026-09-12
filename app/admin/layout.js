import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-800 w-full md:w-64 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <a href="/admin" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="/admin/products" className="hover:bg-gray-700 p-2 rounded">Products</a>
          <a href="/admin/products/new" className="hover:bg-gray-700 p-2 rounded">Add Product</a>
          <a href="/api/auth/signout" className="hover:bg-red-700 bg-red-600 p-2 rounded mt-8 text-center">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}