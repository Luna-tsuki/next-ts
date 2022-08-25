import styles from "./cart_item.module.scss";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className={styles.main_cart}>
      <ul className={styles.main_ul}>
        <li className={styles.main_li}>
          <div className={styles.main_li_div}>
            <div className={styles.media_left}>
              <a className={styles.media_left_a} href="/ec/product/8431007/">
                <Image
                  className={styles.media_left_a_image}
                  src="https://www.nitori-net.jp/ecstatic/image/product/8431007/843100701.jpg?imwidth=97&imdensity=1&ts=20200528175325664"
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
                    キャスター付きベッド下収納
                  </span>
                </a>
              </p>
              <p className={styles.media_middle_code}>商品コード　8431007</p>
              <p className={styles.media_middle_color}>カラー：クリア</p>
              <p className={styles.media_middle_price}>
                <span className={styles.media_middle_price_span}>1,290</span>
                円（税込）
              </p>
              <p className={styles.media_middle_delivery}>2～6日で出荷</p>
            </div>
            <div className={styles.media_right}>
              <div className={styles.media_right_grid}>
                <div className={styles.media_right_number}>
                  <input
                    type="text"
                    name="number"
                    value="1"
                    className={styles.media_right_number_input}
                  />
                </div>
                <div className={styles.media_right_delivery_price}>
                  個別送料
                  <span className={styles.media_right_delivery_price_span}>
                    0
                  </span>
                  円
                </div>
                <div className={styles.media_right_after}>
                  <button className={styles.media_right_after_button}>
                    あとで買う
                  </button>
                </div>
                <div className={styles.media_right_price}>
                  小計
                  <span className={styles.media_right_price_span}>1,290</span>
                  円（税込）
                </div>
                <div className={styles.media_right_delete}>
                  <span className={styles.media_right_delete_icon}>X</span>{" "}
                  <span className={styles.media_right_delete_text}>
                    <a className={styles.media_right_delete_text_a}>削除</a>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.media_bottom}>
              <span className={styles.media_bottom_span}>店舗受取可能商品</span>
            </div>
          </div>
        </li>
        <li className={styles.main_li}>
          <div className={styles.main_li_div}>
            <div className={styles.media_left}>
              <a className={styles.media_left_a} href="/ec/product/8431007/">
                <Image
                  className={styles.media_left_a_image}
                  src="https://www.nitori-net.jp/ecstatic/image/product/8431007/843100701.jpg?imwidth=97&imdensity=1&ts=20200528175325664"
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
                    キャスター付きベッド下収納
                  </span>
                </a>
              </p>
              <p className={styles.media_middle_code}>商品コード　8431007</p>
              <p className={styles.media_middle_color}>カラー：クリア</p>
              <p className={styles.media_middle_price}>
                <span className={styles.media_middle_price_span}>1,290</span>
                円（税込）
              </p>
              <p className={styles.media_middle_delivery}>2～6日で出荷</p>
            </div>
            <div className={styles.media_right}>
              <div className={styles.media_right_grid}>
                <div className={styles.media_right_number}>
                  <input
                    type="text"
                    name="number"
                    value="1"
                    className={styles.media_right_number_input}
                  />
                </div>
                <div className={styles.media_right_delivery_price}>
                  個別送料
                  <span className={styles.media_right_delivery_price_span}>
                    0
                  </span>
                  円
                </div>
                <div className={styles.media_right_after}>
                  <button className={styles.media_right_after_button}>
                    あとで買う
                  </button>
                </div>
                <div className={styles.media_right_price}>
                  小計
                  <span className={styles.media_right_price_span}>1,290</span>
                  円（税込）
                </div>
                <div className={styles.media_right_delete}>
                  <span className={styles.media_right_delete_icon}>X</span>{" "}
                  <span className={styles.media_right_delete_text}>
                    <a className={styles.media_right_delete_text_a}>削除</a>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.media_bottom}>
              {/* <span className={styles.media_bottom_span}>
                  店舗受取可能商品
                </span> */}
            </div>
          </div>
        </li>
        <li className={styles.main_li}>
          <div className={styles.main_li_div}>
            <div className={styles.media_left}>
              <a className={styles.media_left_a} href="/ec/product/8431007/">
                <Image
                  className={styles.media_left_a_image}
                  src="https://www.nitori-net.jp/ecstatic/image/product/8431007/843100701.jpg?imwidth=97&imdensity=1&ts=20200528175325664"
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
                    キャスター付きベッド下収納
                  </span>
                </a>
              </p>
              <p className={styles.media_middle_code}>商品コード　8431007</p>
              <p className={styles.media_middle_color}>カラー：クリア</p>
              <p className={styles.media_middle_price}>
                <span className={styles.media_middle_price_span}>1,290</span>
                円（税込）
              </p>
              <p className={styles.media_middle_delivery}>2～6日で出荷</p>
            </div>
            <div className={styles.media_right}>
              <div className={styles.media_right_grid}>
                <div className={styles.media_right_number}>
                  <input
                    type="text"
                    name="number"
                    value="1"
                    className={styles.media_right_number_input}
                  />
                </div>
                <div className={styles.media_right_delivery_price}>
                  個別送料
                  <span className={styles.media_right_delivery_price_span}>
                    0
                  </span>
                  円
                </div>
                <div className={styles.media_right_after}>
                  <button className={styles.media_right_after_button}>
                    あとで買う
                  </button>
                </div>
                <div className={styles.media_right_price}>
                  小計
                  <span className={styles.media_right_price_span}>1,290</span>
                  円（税込）
                </div>
                <div className={styles.media_right_delete}>
                  <span className={styles.media_right_delete_icon}>X</span>{" "}
                  <span className={styles.media_right_delete_text}>
                    <a className={styles.media_right_delete_text_a}>削除</a>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.media_bottom}>
              <span className={styles.media_bottom_span}>店舗受取可能商品</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
