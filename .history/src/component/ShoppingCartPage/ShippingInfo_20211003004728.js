import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";

export default function ShippingInfo({ moveToPaymentMethod, returnToCart }) {
  const [addedList, setAddedList] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("cart");
    setAddedList(JSON.parse(data));
  }, []);

  return (
    <>
      <nav aria-label="breadcrumb" className="ms-4 ms-lg-5 py-3">
        <ol className="breadcrumb">
          <li
            className="breadcrumb-item text-primary"
            onClick={() => returnToCart()}
          >
            Giỏ hàng
          </li>
          <li className="breadcrumb-item text-dark active" aria-current="page">
            Thông tin giao hàng
          </li>
          <li className="breadcrumb-item text-secondary">Thanh toán</li>
        </ol>
      </nav>
      <section className="px-3 py-5 mb-5 p-md-3">
        <h2 className="text-center">Thông tin giao hàng</h2>
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-5 py-0 ps-md-0 border-end border-dark">
              <h4 className="mb-5"> Tóm tắt đơn hàng</h4>
              {addedList.map(({ id, title, img, price, amount }) => (
                <CartSummary
                  key={id}
                  title={title}
                  price={price}
                  img={img}
                  amount={amount}
                />
              ))}

              <hr />

              <div className="container-fluid mx-0 px-">
                  <span className="text-start">Tạm tính:</span>
                  <span className="text-end">100k</span>
              </div>

              <p
                className="btn btn-light mt-4 me-0 d-block"
                onClick={() => returnToCart()}
              >
                Quay lại giỏ hàng
              </p>
            </div>

            <div className="col-12 col-md-7 py-0 ps-md-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}
