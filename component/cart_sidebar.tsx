import { useState, useEffect } from "react";
import styles from "./cart_sidebar.module.scss";
import Image from "next/image";

const CartSidebar = () => {
  const [radioShow, setRadioShow] = useState(false);
  //function 单选
  const handleRadio = () => {
    setRadioShow(!radioShow);
  };
  return (
    <div className={styles.nav_div}>
      <div className={styles.nav_payment}>
        <div className={styles.nav_payment_total}>
          <span className={styles.nav_paymentAmountLabel}>お支払金額</span>
          <span className={styles.nav_paymentAmountLabel}>
            <span className={styles.nav_payment_price}>11,270</span>円
          </span>
        </div>
        <div className={styles.nav_payment_point}>
          <span className={styles.nav_payment_point_a}>獲得予定ポイント</span>
          <span className={styles.nav_payment_point_number}>102pt</span>
        </div>
        <div className={styles.nav_payment_SumShorten}>
          <span className={styles.nav_payment_SumShorten_a}>商品金額合計</span>
          <span className={styles.nav_payment_SumShorten_number}>11,270円</span>
        </div>
        <div className={styles.nav_payment_delivery}>
          <span className={styles.nav_payment_delivery_a}>送料</span>
          <span className={styles.nav_payment_delivery_number}>0円</span>
        </div>
        <div className={styles.nav_payment_info}>
          <span className={styles.nav_payment_info_left}>*</span>
          <span className={styles.nav_payment_info_right}>
            送料および手数料はまだ確定しておりません。一部地域へのご配達は、別途料金がかかる場合がございます。(沖縄本島以外の離島の中継料は、別途ご案内いたします)
          </span>
        </div>
        <div className={styles.nav_checkoutFlowModeForm}>
          <label className={styles.nav_label}>
            <input
              className={styles.nav_label_input}
              type="radio"
              checked={radioShow}
              name="DELIVERY"
              onChange={() => handleRadio()}
            />
            <span className={styles.nav_checkmark}>ご指定の場所に配送する</span>
          </label>
          <br />
          <label className={styles.nav_label}>
            <input
              className={styles.nav_label_input}
              type="radio"
              checked={radioShow}
              name="DELIVERY"
              onChange={() => handleRadio()}
            />
            <span className={styles.nav_checkmark}>
              店舗/配送センターで受け取る
              <span className={styles.nav_checkmark_noprice}>送料無料</span>
            </span>
          </label>
        </div>
        <div className={styles.nav_payment_calcShipping}>
          <span className={styles.nav_payment_calcShipping_span}>
            あと
            <span className={styles.nav_payment_calcShipping_price}>
              1,720
              <span className={styles.nav_payment_calcShipping_free}>円</span>
            </span>
            （税込）で
            <span className={styles.nav_payment_calcShipping_free}>
              <b>送料無料</b>
            </span>
          </span>
        </div>
        <div className={styles.nav_payment_note}>
          <span className={styles.nav_payment_note_left}>*</span>
          <span className={styles.nav_payment_note_right}>大型家具除く</span>
        </div>
        <div className={styles.nav_submit}>
          <button className={styles.nav_submit_button} type="submit">
            レジへ進む
          </button>
          <button className={styles.nav_submit_button_shop} type="submit">
            ショッピングを続ける
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
