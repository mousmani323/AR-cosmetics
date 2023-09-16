"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { Button } from "reactstrap";
import Sidecart from "./Sidecart";


const Navbar = () => {
  const [isSidecartOpen, setIsSidecartOpen] = useState(false);

  const toggleSidecart = () => {
    setIsSidecartOpen(!isSidecartOpen);
  };

  return (
    <div>
      <header className="text-gray-700 body-font bg-red-200 mb-4 shadow-md">
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
            <Dropdown />

            <Link href="/blogs" className="mr-5 hover:text-gray-400">
              Blogs
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-400">
              Contact us
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-400">
              About us
            </Link>
          </nav>
          <Button
          onClick={toggleSidecart}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            <FaShoppingCart className="text-2xl" />
          </Button>
        </div>
      </header>
      {isSidecartOpen && <Sidecart />}
    </div>
  );
};

export default Navbar;
