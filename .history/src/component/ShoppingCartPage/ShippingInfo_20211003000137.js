import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <li className="breadcrumb-item">
            <Link to="/" className="text-dark text-decoration-none">
              Trang chủ
            </Link>
          </li>
          <li className="breadcrumb-item ">
            <Link to="/menu" className="text-dark text-decoration-none">
              Thực đơn
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Thông tin giao hàng
          </li>
        </ol>
      </nav>
      <section className="px-3 py-5 mb-5 p-md-3">
        <h2 className="text-center">Thông tin giao hàng</h2>
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-4 py-0 ps-md-0">
              {addedList.map(({ id, title, img, price, amount }) => (
                <CartSummary
                  key={id}
                  title={title}
                  price={price}
                  img={img}
                  amount={amount}
                />
              ))}

              <p
                className="btn btn-dark mt-3 me-0 d-block"
                onClick={()=>}
              >
                Quay lại giỏ hàng
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
