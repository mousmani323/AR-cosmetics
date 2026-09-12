const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@alrehmancosmetics.com' },
    update: {},
    create: {
      email: 'admin@alrehmancosmetics.com',
      name: 'Admin',
      password: hashedPassword,
    },
  });

  console.log('Seeded admin user:', admin);

  // Seed some initial products based on the old hardcoded ones
  const products = [
    {
      title: "The Catalyzer",
      slug: "the-catalyzer-1",
      description: "A great makeup product.",
      price: 16.00,
      image: "https://m.media-amazon.com/images/I/71k9RKiV0-L._AC_UL480_FMwebp_QL65_.jpg",
      category: "makeup",
      stock: 100,
    },
    {
      title: "Perfume De Luxe",
      slug: "perfume-de-luxe",
      description: "Awesome fragrance.",
      price: 45.00,
      image: "https://m.media-amazon.com/images/I/71k9RKiV0-L._AC_UL480_FMwebp_QL65_.jpg",
      category: "perfume",
      stock: 50,
    },
    {
      title: "Skin Clear",
      slug: "skin-clear-serum",
      description: "Clear your skin.",
      price: 25.00,
      image: "https://m.media-amazon.com/images/I/71k9RKiV0-L._AC_UL480_FMwebp_QL65_.jpg",
      category: "skincare",
      stock: 200,
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  console.log('Seeded initial products');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
