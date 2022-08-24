import { useState, useEffect, Fragment } from "react";
import styles from "./category.module.scss";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

type categoryType = {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
  parentId: number;
  subList: Array<subCategoryType>;
};

type subCategoryType = {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
  parentId: number;
};

const localhost = axios.create({
  baseURL: "http://localhost:8080",
});

const Category = () => {
  // 初始值
  const initialState = [
    {
      categoryId: 15,
      categoryName: "家电",
      categoryImage:
        "https://www.nitori-net.jp/ecstatic/image/sys-master/images/8993449607198/Bed.jpg",
      parentId: 0,
      subList: [
        {
          categoryId: 23,
          categoryName: "冰箱",
          categoryImage: null,
          parentId: 15,
        },
        {
          categoryId: 23,
          categoryName: "电视机",
          categoryImage: null,
          parentId: 15,
        },
      ],
    },
    {
      categoryId: 17,
      categoryName: "数码",
      categoryImage:
        "https://www.nitori-net.jp/ecstatic/image/sys-master/images/8993449607198/Bed.jpg",
      parentId: 0,
      subList: [
        {
          categoryId: 18,
          categoryName: "手机",
          categoryImage: null,
          parentId: 17,
        },
      ],
    },
  ];
  // 初始化 categorys 信息
  const [categorys, setCategorys] = useState([]);

  // 发送请求
  useEffect(() => {
    async function getPost() {
      const response = await localhost.get("/category");
      setCategorys(response.data.data);
    }
    getPost();
  }, []);

  // function 控制category是否显示
  const [categoryDisplay, setCategoryDisplay] = useState(false);
  const categoryDisappear = () => {
    setCategoryDisplay(false);
  };
  const categoryAppear = () => {
    setCategoryDisplay(true);
  };

  return (
    <nav className={styles.category_nav}>
      <div className={styles.category}>
        <div
          className={styles.global_category}
          onMouseOver={categoryAppear}
          onMouseLeave={categoryDisappear}
        >
          カテゴリ
        </div>
        <div
          className={styles.content_category}
          style={{
            display: categoryDisplay ? "block" : "none",
          }}
          onMouseOver={categoryAppear}
          onMouseLeave={categoryDisappear}
        >
          <ul>
            {categorys.map((category: categoryType) => {
              return (
                <li key={category.categoryId}>
                  <div className={styles.parent_category}>
                    {category.categoryName}
                    {category.categoryId}
                  </div>
                  <div className={styles.children_category}>
                    <p className={styles.img_category}>
                      <Image
                        src={category.categoryImage}
                        alt="imgs"
                        width={70}
                        height={70}
                      />
                      {/* <img src={category.categoryImage} alt="imgs" /> */}
                      <span>
                        {category.categoryName}
                        {category.categoryId}
                      </span>
                    </p>
                    <ul>
                      {category.subList.map((childrenlist) => {
                        return (
                          <li
                            className={styles.sub_category}
                            key={childrenlist.categoryId}
                            onClick={categoryDisappear}
                          >
                            {childrenlist.categoryName}
                            {childrenlist.categoryId}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Category;
