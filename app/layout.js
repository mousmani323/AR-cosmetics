import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import React from 'react';
import { CartProvider } from '../context/CartContext.js';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al-Rehman cosmetics",
  description: "Cosmetics and general store",
};

export default function RootLayout({ children }) {
 

  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div className={inter.className}>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
