import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";

export default function ShippingInfo({ moveToPaymentMethod, returnToCart }) {
  const [addedList, setAddedList] = useState([]);
  const [shippingFee, setShippingFee] = useState(30000);
  const [discount, setDiscount] = useState(1);

  useEffect(() => {
    let data = localStorage.getItem("cart");
    setAddedList(JSON.parse(data));
  }, []);
  let subtotals = addedList.map((item) => item.price * item.amount);
  let total_temp = subtotals.reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );

  let totalAfterSale = total_temp* 1.1 * discount;
  let final_price=totalAfterSale + shippingFee

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
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between align-items-center">
                <label htmlFor="code" className="d-block me-5">
                  Mã giảm giá:
                </label>
                <input
                  id="code"
                  className="d-block p-2 flex-fill ms-5 rounded"
                  placeholder="Nhập mã giảm giá..."
                />
              </div>
              <hr />
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                <span className="d-block">Tạm tính sau thuế 10%:</span>
                <span className="d-block fw-bold">{totalAfterSale.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
              </div>
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                <span className="d-block">Phí vận chuyển:</span>
                <span className="d-block fw-bold">
                  {shippingFee.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <hr />
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                <span className="d-block">Tổng cộng:</span>
                <span className="d-block h4 fw-bold">{final_price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
              </div>

              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
              <p
                className="btn btn-light mt-4 me-0 d-block text-secondary"
                onClick={() => returnToCart()}
              >
                Quay lại giỏ hàng
              </p>
              <p
                className="btn btn-success mt-4 me-0 d-block text-secondary"
                onClick={() => returnToCart()}
              >
                Quay lại giỏ hàng
              </p>
              </div>

              
            </div>

            <div className="col-12 col-md-7 py-0 ps-md-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}
