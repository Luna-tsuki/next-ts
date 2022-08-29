export type Book = {
  title: string;
  description: string;
  imageUrl: string;
};

export type Review = {
  id: string;
  author: string;
  text: string;
};

export type Post = {
  id: string;
  text: string;
};

export type cartItemsObject = {
  id: number;
  images: string;
  skuName: string;
  skuId: number;
  color: string;
  size: string;
  deliveryTime: string;
  storePickUp: boolean;
  quantity: number;
  price: number;
  itemsPrice: number;
  deliveryPrice: number;
  point: number;
  isBuyAfter: boolean;
};
export type cart = {
  cartItems: cartItemsObject[];
  cartAfterItems: cartItemsObject[];
  totalPrice: number;
  totalPoint: number;
};
