import React from "react";
import CartSummary from "./CartSummary";
export default function ShippingInfo(moveToPaymentMethod) {
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
            <div className="col-12 col-md-8 py-0 ps-md-0">
              {list.map(({ id, title, img, price, amount }) => (
                <CartSummary
                  key={id}
                  title={title}
                  price={price}
                  img={img}
                  amount={amount}
                />
              ))}

              <button
                className="btn d-block mx-auto btn btn-primary mt-3 text-end"
              >
                Quay lại giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
