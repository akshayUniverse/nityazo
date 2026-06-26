export const categoryProducts = {
  groceries: [
    {
      id: "1",
      title: "Oak Coffee",
      weight: "100g",
      price: "₹ 540",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "2",
      title: "Oak Coffee Premium",
      weight: "200g",
      price: "₹ 760",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "3",
      title: "Coffee Beans",
      weight: "500g",
      price: "₹ 980",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "4",
      title: "Ground Coffee",
      weight: "250g",
      price: "₹ 620",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "5",
      title: "Oak Coffee",
      weight: "100g",
      price: "₹ 540",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "6",
      title: "Coffee Pack",
      weight: "1kg",
      price: "₹ 1450",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "7",
      title: "Oak Coffee",
      weight: "100g",
      price: "₹ 540",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "8",
      title: "Oak Coffee",
      weight: "100g",
      price: "₹ 540",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "9",
      title: "Oak Coffee",
      weight: "100g",
      price: "₹ 540",
      image: require("../assets/images/oak-coffee.webp"),
    },
    {
      id: "10",
      title: "Oak Coffee",
      weight: "100g",
      price: "₹ 540",
      image: require("../assets/images/oak-coffee.webp"),
    },
  ],

  vegetables: Array.from({ length: 10 }, (_, i) => ({
    id: `v${i}`,
    title: "Fresh Vegetables",
    weight: "1kg",
    price: "₹ 90",
    image: require("../assets/images/vegetables.webp"),
  })),

  fruits: Array.from({ length: 10 }, (_, i) => ({
    id: `f${i}`,
    title: "Fresh Fruits",
    weight: "1kg",
    price: "₹ 180",
    image: require("../assets/images/fruits.webp"),
  })),

  dairy: Array.from({ length: 10 }, (_, i) => ({
    id: `d${i}`,
    title: "Fresh Dairy",
    weight: "500ml",
    price: "₹ 65",
    image: require("../assets/images/dairy.webp"),
  })),
};
