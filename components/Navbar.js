import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-500 body-font bg-red-200 mb-4">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              className="rounded-3xl"
              height={40}
              width={40}
              src="/logo.png"
              alt="logo"
            />
            <span className="ml-3 text-xl">Al-Rehman Cosmetics</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/products" className="mr-5 hover:text-gray-900">
              Products
            </Link>
            <Link href="/blogs" className="mr-5 hover:text-gray-900">
              Blogs
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact us
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About us
            </Link>
          </nav>
          <Link
            href="/cart"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
