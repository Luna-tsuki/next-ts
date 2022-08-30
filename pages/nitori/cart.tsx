import { useState, useEffect, ChangeEvent } from "react";
import styles from "./cart.module.scss";
import Head from "next/head";
import axios from "axios";

import CartItem from "../../component/cart_item";
import CartAfterItem from "../../component/cart_after_item";
import CartSidebar from "../../component/cart_sidebar";
import VideoModule from "../../component/video";
import { Book, Review, Post, cartItemsObject } from "../../types/cart_type";
import { useRouter } from "next/router";

type Props = {
  book: Book;
  post: Post;
};

type cartItemsServerSidePropsType = {
  cartItemsServerSideProps: cartItemsObject[];
};

const localhost = axios.create({
  baseURL: "http://localhost:4000/",
});

export default function Cart({
  cartItemsServerSideProps,
}: cartItemsServerSidePropsType) {
  // const initialState = {
  //   cartItems: [
  //     {
  //       cartId: 1,
  //       images:
  //         "https://www.nitori-net.jp/ecstatic/image/product/8431007/843100701.jpg?imwidth=97&imdensity=1&ts=20200528175325664",
  //       skuName: "キャスター付きベッド下収納",
  //       skuId: 8431007,
  //       color: "クリア",
  //       size: "ダブル",
  //       deliveryTime: "2～6日で出荷",
  //       storePickUp: true,
  //       quantity: 2,
  //       price: 200,
  //       itemsPrice: 400,
  //       deliveryPrice: 0,
  //       point: 15,
  //     },
  //     {
  //       cartId: 2,
  //       images:
  //         "https://www.nitori-net.jp/ecstatic/image/product/7564741/756474101.jpg?imwidth=97&imdensity=1&ts=20200903170525431",
  //       skuName:
  //         "ベッドパッド マルチすっぽりシーツ 3点セット シングル(ヨウモウコンVT S)",
  //       skuId: 7564741,
  //       color: "アイボリー",
  //       size: "シングル",
  //       deliveryTime: "2～6日で出荷",
  //       storePickUp: false,
  //       quantity: 1,
  //       price: 7990,
  //       itemsPrice: 7990,
  //       deliveryPrice: 0,
  //       point: 72,
  //     },
  //   ],
  //   cartAfterItems: [
  //     {
  //       cartAfterId: 1,
  //       images:
  //         "https://www.nitori-net.jp/ecstatic/image/product/7760904/776090401.jpg?imwidth=97&imdensity=1&ts=20201116102157609",
  //       skuName: "フェイスタオル(シェリーST GY)",
  //       skuId: 7760904,
  //       color: "グレー",
  //       size: "フェイスタオル",
  //       deliveryTime: "2～6日で出荷",
  //       storePickUp: true,
  //       quantity: 3,
  //       price: 100,
  //       itemsPrice: 300,
  //       deliveryPrice: 0,
  //       point: 25,
  //     },
  //     {
  //       cartAfterId: 2,
  //       images:
  //         "https://www.nitori-net.jp/ecstatic/image/product/7563921/756392101.jpg?imwidth=97&imdensity=1&ts=20220620112138465",
  //       skuName: "洗える珪藻土入り除湿シート　シングル(NEW S)",
  //       skuId: 7563921,
  //       color: "グレー",
  //       size: "シングル",
  //       deliveryTime: "2～6日で出荷",
  //       storePickUp: false,
  //       quantity: 1,
  //       price: 3990,
  //       itemsPrice: 3990,
  //       deliveryPrice: 0,
  //       point: 22,
  //     },
  //   ],
  //   totalPrice: 11111,
  //   totalPoint: 2,
  // };

  const [data, setData] = useState(cartItemsServerSideProps);
  const [cartItems, setCartItems] = useState<cartItemsObject[]>(
    cartItemsServerSideProps.filter(
      (item: cartItemsObject) => item.isBuyAfter === false
    )
  );
  const [cartAfterItems, setCartAfterItems] = useState<cartItemsObject[]>(
    cartItemsServerSideProps.filter(
      (item: cartItemsObject) => item.isBuyAfter === true
    )
  );

  let tPrice: number = 0;
  let tPoint: number = 0;
  for (const item of cartItems) {
    tPrice += item.price * item.quantity;
    tPoint += item.point * item.quantity;
  }
  const [totalPrice, setTotalPrice] = useState(tPrice);
  const [totalPoint, setTotalPoint] = useState(tPoint);
  const [isLoading, setLoading] = useState(false);

  //reload
  const router = useRouter();
  const reload = () => {
    router.reload();
  };

  //msw Client-side request 例子
  // const [reviews, setReviews] = useState<Review[] | []>([]);
  // useEffect(() => {
  //   // Client-side request are mocked by `mocks/browser.ts`.
  //   fetch("/reviews")
  //     .then((res) => res.json())
  //     .then(setReviews);
  // }, []);

  //msw Client-side request
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/cart")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setCartItems(data.cartItems);
  //       setCartAfterItems(data.cartAfterItems);
  //       setTotalPrice(data.totalPrice);
  //       setTotalPoint(data.totalPoint);
  //       setLoading(false);
  //     });
  // }, []);

  //get 请求
  // async function getCartItems() {
  //   setLoading(true);
  //   const response = await localhost.get("/cart");

  //   setData(response.data);
  //   setCartItems(
  //     response.data.filter((item: cartItemsObject) => item.isBuyAfter === false)
  //   );
  //   setCartAfterItems(
  //     response.data.filter((item: cartItemsObject) => item.isBuyAfter === true)
  //   );
  //   setTotalPrice(
  //     response.data
  //       .filter((item: cartItemsObject) => item.isBuyAfter === false)
  //       .map((item: cartItemsObject) => {
  //         tPrice += item.price;
  //         return tPrice;
  //       })[0]
  //   );
  //   setTotalPoint(
  //     response.data
  //       .filter((item: cartItemsObject) => item.isBuyAfter === false)
  //       .map((item: cartItemsObject) => {
  //         tPoint += item.point;
  //         return tPoint;
  //       })[0]
  //   );
  //   setLoading(false);
  // }

  //あとで買う put请求
  async function putBuyAfterOrReturnToCart(id: number, data: cartItemsObject) {
    const response = await localhost.put(`/cart/${id}`, data);
    reload();
  }

  //削除 delete请求
  async function deleteCartItems(cartId: number) {
    const response = await localhost.delete(`/cart/${cartId}`);
    reload();
  }

  //JSON Server
  // useEffect(() => {
  //   getCartItems();
  // }, []);

  //function 「あとで買う」「カートに戻す」
  const handleCartItemChange = (id: number, isBuyAfter: boolean) => {
    const changeItem: cartItemsObject = cartItemsServerSideProps.filter(
      (item) => item.id === id
    )[0];
    changeItem.isBuyAfter = !isBuyAfter;
    putBuyAfterOrReturnToCart(id, changeItem);
  };

  //function 「削除」
  const handleDelete = async (id: number) => {
    deleteCartItems(id);
  };

  //function 更改数量
  const handleUpdateQuality = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const changeItem: cartItemsObject = cartItemsServerSideProps.filter(
      (item) => item.id === id
    )[0];
    changeItem.quantity = Number(event.target.value);
    putBuyAfterOrReturnToCart(id, changeItem);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className={styles.cart}>
      <Head>
        <title>Nitori cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.h1}>カート</h1>
        {/* <span>{book.title}</span> */}
      </header>
      <main className={styles.main}>
        <CartItem
          cartItems={cartItems}
          handleCartItemChange={handleCartItemChange}
          handleDelete={handleDelete}
          handleUpdateQuality={handleUpdateQuality}
        />
        <CartAfterItem
          cartAfterItems={cartAfterItems}
          handleCartItemChange={handleCartItemChange}
          handleDelete={handleDelete}
        />
        {/* <span>{book.title}</span> */}
        <VideoModule />
      </main>
      <nav className={styles.sidebar}>
        <CartSidebar
          cartItems={cartItems}
          totalPrice={totalPrice}
          totalPoint={totalPoint}
        />
      </nav>
    </div>
  );
}

//fetch getStaticProps SSG
// export async function getStaticProps() {
//   const res = await fetch("http://localhost:4000/cart");
//   const carts = await res.json();
//   return {
//     props: {
//       cartItemsServerSideProps: carts,
//     },
//   };
// }

//fetch getServerSideProps SSR
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/cart");
  const carts = await res.json();
  return {
    props: {
      cartItemsServerSideProps: carts,
    },
  };
}

// axios getServerSideProps SSR
// export async function getServerSideProps() {
//   const { data: carts } = await localhost.get("/cart");
//   return {
//     props: {
//       cartItemsServerSideProps: carts,
//     },
//   };
// }

// export async function getServerSideProps() {
//   // Server-side requests are mocked by `mocks/server.ts`.
//   const res = await fetch("https://my.backend/book");
//   const book = await res.json();

//   return {
//     props: {
//       book,
//     },
//   };
// }

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("https://my.backend/posts");
//   console.log(res);
//   const post = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       post,
//     },
//   };
// }
