import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import GuestInfo from "./GuestInfo";
import PaymentInfo from "./PaymentInfo";
import { useSelector } from "react-redux";

export default function ShippingAndPayment({ returnToCart }) {
  const [addedList, setAddedList] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [paymentOn, setPaymentOn] = useState(false);
  const fee = useSelector((state) => state.shippingFee.fee);

  useEffect(() => {
    let data = localStorage.getItem("cart");
    setAddedList(JSON.parse(data));
  }, []);

  let subtotals = addedList.map((item) => item.price * item.amount);
  let total_temp = subtotals.reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );
  let shippingFee = subtotals > 300000 ? 0 : fee;
  let totalAfterVAT = total_temp * 1.1;
  let totalDiscount = total_temp * discount;
  let final_price = totalAfterVAT - totalDiscount + shippingFee;

  function returnToGuestInfo() {
    setPaymentOn(false);
  }

  function goToPaymentInfo() {
    setPaymentOn(true);
  }

  function salesOff(e) {
    switch (e.target.value) {
      case "SALE10":
        setDiscount(0.1);
        break;
      case "SALE15":
        setDiscount(0.15);
        break;
      default:
        setDiscount(0);
        break;
    }
  }

  return (
    <>
      <nav aria-label="breadcrumb" className="ms-4 ms-lg-5 py-3">
        <ol className="breadcrumb">
          <li
            className="breadcrumb-item text-dark"
            onClick={() => returnToCart()}
          >
            Giỏ hàng
          </li>
          <li
            className={`breadcrumb-item ${!paymentOn && "text-primary active"}`}
            onClick={() => returnToGuestInfo()}
          >
            Thông tin giao hàng
          </li>
          <li
            className={`breadcrumb-item ${paymentOn && "text-primary active"}`}
          >
            Thanh toán
          </li>
        </ol>
      </nav>
      <section className="px-3 py-5 mb-5 p-md-3">
        <h2 className="text-center">
          {paymentOn ? "Thanh toán" : "Thông tin giao hàng"}
        </h2>
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-3 pt-md-4">
          <div className="row g-5">
            <div className="col-12 col-lg-6 py-0 line">
              {paymentOn ? (
                <PaymentInfo returnToGuestInfo={returnToGuestInfo} />
              ) : (
                <GuestInfo
                  returnToCart={returnToCart}
                  goToPaymentInfo={goToPaymentInfo}
                />
              )}
            </div>
            <div className="col-12 col-lg-6 py-0">
              <h4 className="mb-4 mb-md-5"> Tóm tắt đơn hàng</h4>
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
              <div className="container-fluid px-0">
                <div className="row row-cols-2 row-cols-md-1 g-3">
                  <label htmlFor="code" className="d-block col-12 col-md-6">
                    Mã giảm giá (SALE10, SALE15):
                  </label>
                  <div className="col-12 col-md-6">
                    <input
                      id="code"
                      maxLength="10"
                      className="d-block p-2 rounded text-center"
                      placeholder="Nhập mã giảm giá..."
                      onChange={(e) => salesOff(e)}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                <span className="d-block">Tạm tính sau thuế 10%:</span>
                <span className="d-block fw-bold">
                  {totalAfterVAT.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                <span className="d-block">Chiết khấu mã giảm giá:</span>
                <span
                  className={`d-block fw-bold ${
                    discount > 0 ? "text-danger" : ""
                  }`}
                >
                  {discount > 0 ? "-" : ""}
                  {totalDiscount.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
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
              <span className="d-block fst-italic text-secondary">
                (Ưu đãi: Miễn phí vận chuyển trong bán kính 5km cho đơn hàng
                trên 300 ngàn đồng)
              </span>
              <hr />
              <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                <span className="d-block">Tổng cộng:</span>
                <span className="d-block h4 fw-bold">
                  {final_price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
