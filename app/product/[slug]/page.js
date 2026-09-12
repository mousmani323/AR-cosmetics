import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import ProductClientPage from "./ProductClientPage";

const prisma = new PrismaClient();

export default async function ProductPage({ params }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug }
  });

  if (!product) {
    notFound();
  }

  return <ProductClientPage product={product} />;
}