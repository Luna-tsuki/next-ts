import { rest } from "msw";
import { cart } from "../../types/cart_type";

let cartItems = [
  {
    id: 1,
    images:
      "https://www.nitori-net.jp/ecstatic/image/product/8431007/843100701.jpg?imwidth=97&imdensity=1&ts=20200528175325664",
    skuName: "キャスター付きベッド下収納",
    skuId: 8431007,
    color: "クリア",
    size: "ダブル",
    deliveryTime: "2～6日で出荷",
    storePickUp: true,
    quantity: 2,
    price: 200,
    itemsPrice: 400,
    deliveryPrice: 0,
    point: 15,
  },
  {
    id: 2,
    images:
      "https://www.nitori-net.jp/ecstatic/image/product/7564741/756474101.jpg?imwidth=97&imdensity=1&ts=20200903170525431",
    skuName:
      "ベッドパッド マルチすっぽりシーツ 3点セット シングル(ヨウモウコンVT S)",
    skuId: 7564741,
    color: "アイボリー",
    size: "シングル",
    deliveryTime: "2～6日で出荷",
    storePickUp: false,
    quantity: 1,
    price: 7990,
    itemsPrice: 7990,
    deliveryPrice: 0,
    point: 72,
  },
];

const cartAfterItems = [
  {
    id: 3,
    images:
      "https://www.nitori-net.jp/ecstatic/image/product/7760904/776090401.jpg?imwidth=97&imdensity=1&ts=20201116102157609",
    skuName: "フェイスタオル(シェリーST GY)",
    skuId: 7760904,
    color: "グレー",
    size: "フェイスタオル",
    deliveryTime: "2～6日で出荷",
    storePickUp: true,
    quantity: 3,
    price: 100,
    itemsPrice: 300,
    deliveryPrice: 0,
    point: 25,
  },
  {
    id: 4,
    images:
      "https://www.nitori-net.jp/ecstatic/image/product/7563921/756392101.jpg?imwidth=97&imdensity=1&ts=20220620112138465",
    skuName: "洗える珪藻土入り除湿シート　シングル(NEW S)",
    skuId: 7563921,
    color: "グレー",
    size: "シングル",
    deliveryTime: "2～6日で出荷",
    storePickUp: false,
    quantity: 1,
    price: 3990,
    itemsPrice: 3990,
    deliveryPrice: 0,
    point: 22,
  },
];

export const cartHandlers = [
  // Client-side request
  rest.get("/cart", (_req, res, ctx) => {
    return res(
      ctx.json<cart>({
        cartItems,
        cartAfterItems,
        totalPrice: 1,
        totalPoint: 2,
      })
    );
  }),

  rest.delete("/cart/:id", (req, res, ctx) => {
    // Persist user's authentication in the session
    console.log(req, "req");
    const itemId = req.params.id;
    if (!itemId) {
      return res(
        // Respond with a 200 status code
        ctx.status(404)
      );
    }

    const newItems = cartItems.filter((item) => item.id !== Number(itemId));
    cartItems = Object.assign([], newItems);

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json<cart>({
        cartItems,
        cartAfterItems,
        totalPrice: 1,
        totalPoint: 2,
      })
    );
  }),
];
