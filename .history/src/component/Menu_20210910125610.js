import React, { useState } from "react";
import { PRODUCTS } from "./data-products";
import { BiPlus, BiMinus } from "react-icons/bi";
import Header from "./HeaderMenu";

export default function MenuLayout() {
  const [products] = useState(PRODUCTS);

  function MainContent({ img, title, price }) {
    return (
      <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="yummy-food" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center flex-fill">
              {title}
            </h5>
            <p className="card-text text-center text-success">
              {price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
              /suất
            </p>

            <div className="spinbox d-flex flex-row">
              <div className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-start">
                <BiMinus />
              </div>
              <div className="d-flex w-100 align-items-center justify-content-center border-top border-bottom border-secondary">
                <span className="p-0 fs-5">0</span>
              </div>
              <div className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-end">
                <BiPlus />
              </div>
            </div>

            <a href="/" className="btn btn-warning w-100 fw-bold mt-3">
              Đặt ngay
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header/>
      <div>
        <section className="px-3 py-5 p-md-5">
          <h2 className="text-center pt-4">THỰC ĐƠN TUẦN NÀY</h2>
          <div className="container-fluid pt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-2">
              {products.map(({ id, img, title, price }) => (
                <MainContent key={id} img={img} title={title} price={price} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
