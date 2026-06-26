import { categoryProducts } from "./categories";

export function getProductById(id: string) {
  const allProducts = Object.values(categoryProducts).flat();

  const product = allProducts.find((item) => item.id === id);

  if (!product) return null;

  return {
    ...product,

    description:
      "Oak Coffee – A Bold Brew with Earthy Depth  Savor the rich, full-bodied character of Oak Coffee, crafted from carefully roasted beans that deliver warm, toasty notes reminiscent of oak-aged perfection. Its smooth, earthy undertones and subtle hint of smokiness create a comforting, sophisticated cup — perfect for slow mornings or thoughtful conversations. Whether enjoyed black to appreciate its complexity, or with milk for a softer profile, Oak Coffee is a timeless choice for those who seek depth in every sip.",
  };
}
