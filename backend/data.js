import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "sundar",
      email: "admin@sample.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Sri",
      email: "user@sample.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: "Chicken Biryani",
      slug: "chicken-biryani",
      category: "Biryani",
      image: "/images/briyani.webp", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "Star Biryani",
      rating: 4.5,
      numReviews: 10,
      description: "Made with indian spices",
    },
    {
      //_id: '2',
      name: "Mutton Biryani",
      slug: "mutton-biryani",
      category: "Biryani",
      image: "/images/bri.jpeg",
      price: 250,
      countInStock: 0,
      brand: "BVK",
      rating: 4.0,
      numReviews: 10,
      description: "high quality Biryani",
    },
    {
      //_id: '3',
      name: "Chicken Nuggets",
      slug: "chicken-nuggets",
      category: "Fried chicken",
      image: "/images/fd-chicken.jpeg",
      price: 99,
      countInStock: 15,
      brand: "Fried Chicken",
      rating: 4.5,
      numReviews: 14,
      description: "Made with italian crenchy sauce and Booty chicken",
    },
    {
      //_id: '4',
      name: "Grilled Chicken",
      slug: "grilled-chicken",
      category: "Barbeque",
      image: "/images/fd-chick2.webp",
      price: 110,
      countInStock: 5,
      brand: "Best Barbeque",
      rating: 4.5,
      numReviews: 10,
      description: "Made with Organic foods",
    },
  ],
};
export default data;
