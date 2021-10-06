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
              Giỏ hàng
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/shopping-car" className="text-dark text-decoration-none">
              Thông tin giao hàng
            </Link>
          </li>
          <li className="breadcrumb-item " >
            Thanh toán
          </li>
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

              <p
                className="btn btn-light mt-3 me-0 d-block"
                onClick={() => returnToCart()}
              >
                Quay lại giỏ hàng
              </p>
            </div >

            <div className="col-12 col-md-7 py-0 ps-md-0">


            </div>
          </div>
        </div>
      </section>
    </>
  );
}
