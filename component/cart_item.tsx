import { ChangeEvent } from "react";

import styles from "./cart_item.module.scss";
import Image from "next/image";
import { cartItemsObject } from "../types/cart_type";

type CartItemType = {
  cartItems: cartItemsObject[];
  handleCartItemBuyAfter: (cartId: number) => void;
  handleCartItemDelete: (cartId: number) => void;
  handleUpdateQuality: (event: ChangeEvent<HTMLInputElement>, itemId: number) => void;
};

const CartItem = ({
  cartItems,
  handleCartItemBuyAfter,
  handleCartItemDelete,
  handleUpdateQuality
}: CartItemType) => {
  if (cartItems.length < 1) {
    return (
      <div style={{ marginBottom: "20px" }}>
        <p>ショッピングカートに商品が入っていません。</p>
        <p>ショッピングカート内の商品は自由に出し入れしていただけます。</p>
        <p>また、商品は「あとで買う」に移動していただくこともできます。</p>
      </div>
    );
  } else {
    return (
      <div className={styles.main_cart}>
        <ul className={styles.main_ul}>
          {cartItems.map((cartItem) => {
            return (
              <li className={styles.main_li} key={cartItem.id}>
                <div className={styles.main_li_div}>
                  <div className={styles.media_left}>
                    <a className={styles.media_left_a} href={""}>
                      <Image
                        className={styles.media_left_a_image}
                        src={cartItem.images}
                        alt="キャスター付きベッド下収納"
                        width={140}
                        height={140}
                        style={{ borderRadius: "4px" }}
                      />
                    </a>
                  </div>
                  <div className={styles.media_middle}>
                    <p className={styles.media_middle_name}>
                      <a
                        href="/ec/product/8431007/"
                        className={styles.media_middle_name_a}
                      >
                        <span className={styles.media_middle_name_a_span}>
                          {cartItem.skuName}
                        </span>
                      </a>
                    </p>
                    <p className={styles.media_middle_code}>
                      商品コード　{cartItem.skuId}
                    </p>
                    <p className={styles.media_middle_color}>
                      カラー：{cartItem.color}
                    </p>
                    <p className={styles.media_middle_size}>
                      サイズ：{cartItem.size}
                    </p>
                    <p className={styles.media_middle_price}>
                      <span className={styles.media_middle_price_span}>
                        {cartItem.price}
                      </span>
                      円（税込）
                    </p>
                    <p className={styles.media_middle_delivery}>
                      {cartItem.deliveryTime}
                    </p>
                  </div>
                  <div className={styles.media_right}>
                    <div className={styles.media_right_grid}>
                      <div className={styles.media_right_number}>
                        <input
                          type="text"
                          name="number"
                          value={cartItem.quantity}
                          onChange={(val) => handleUpdateQuality(val, cartItem.id)}
                          className={styles.media_right_number_input}
                        />
                      </div>
                      <div className={styles.media_right_delivery_price}>
                        個別送料
                        <span
                          className={styles.media_right_delivery_price_span}
                        >
                          {cartItem.deliveryPrice}
                        </span>
                        円
                      </div>
                      <div className={styles.media_right_after}>
                        <button
                          className={styles.media_right_after_button}
                          onClick={() => handleCartItemBuyAfter(cartItem.id)}
                        >
                          あとで買う
                        </button>
                      </div>
                      <div className={styles.media_right_price}>
                        小計
                        <span className={styles.media_right_price_span}>
                          {cartItem.price * cartItem.quantity}
                        </span>
                        円（税込）
                      </div>
                      <div className={styles.media_right_delete}>
                        <span className={styles.media_right_delete_icon}>
                          X
                        </span>{" "}
                        <span
                          className={styles.media_right_delete_text}
                          onClick={() => handleCartItemDelete(cartItem.id)}
                        >
                          <a className={styles.media_right_delete_text_a}>
                            削除
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.media_bottom}>
                    <span className={styles.media_bottom_span}>
                      店舗受取可能商品
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default CartItem;
