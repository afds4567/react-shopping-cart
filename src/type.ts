export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export type CartProduct = {
  id: number;
  quantity: number;
  productId: number;
};

export type Cart = CartProduct[];
