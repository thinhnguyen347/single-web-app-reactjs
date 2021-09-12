import React, { useState } from "react";
import {
  BrowserRouter as 
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContent from "./ShoppingCartItem";
import Menu from "./Menu";
import { addedItems } from "./data-cart";

export default function ShoppingCart() {
  const [addedList, setAddedList] = useState(addedItems);
  const [message, setMessage] = useState(true);
  const [hideDeleteAllBtn, setHideDeleteAllBtn] = useState(false);

  let list = [...addedList],
    vat,
    final_price,
    content;

  if (list.length > 0) {
    let subprice = list.map((item) => item.price * item.amount);
    let subprice1 = subprice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    vat = subprice1 * 0.1;
    final_price = subprice1 + vat;
    content = "";
  } else {
    vat = 0;
    final_price = 0;
    content = <p className="text-center">Giỏ hàng không có sản phẩm!</p>;
  }

  function deleteAll() {
    setAddedList([]);
    setMessage(false);
    setHideDeleteAllBtn(true);
  }

  function comeback() {
    setAddedList(addedItems);
    setMessage(true);
    setHideDeleteAllBtn(false);
  }

  function increase(id) {
    let index = list.findIndex((item) => item.id === id);
    list[index].amount = list[index].amount + 1;
    setAddedList(list);
  }

  function decrease(id) {
    let index = list.findIndex((item) => item.id === id);
    if (list[index].amount >= 2) list[index].amount = list[index].amount - 1;
    setAddedList(list);
  }

  function deleteItem(id) {
    let index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    if (list.length === 0) setHideDeleteAllBtn(true);
    setAddedList(list);
  }

  return (
    <>
      <nav aria-label="breadcrumb" className="ms-4 ms-lg-5 py-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-dark text-decoration-none">
              Trang chủ
            </a>
          </li>
          <li className="breadcrumb-item ">
            <a href="/" className="text-dark text-decoration-none">
              Thực đơn
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Giỏ hàng
          </li>
        </ol>
      </nav>
      <section className="px-3 py-5 mb-5 p-md-3">
        <h2 className="text-center">GIỎ HÀNG</h2>
        {message ? (
          <p className="h6 text-center">
            Hiện có{" "}
            <span className="text-danger fw-bold">{addedList.length}</span> sản
            phẩm trong giỏ hàng
          </p>
        ) : (
          <p></p>
        )}
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-8 py-0 ps-md-0">
              {content}
              {addedList.map(({ id, title, img, price, amount }) => (
                <MainContent
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  img={img}
                  amount={amount}
                  decrease={decrease}
                  increase={increase}
                  deleteItem={deleteItem}
                />
              ))}
              <button
                className={`btn btn-light text-decoration-underline mt-3 text-end ${
                  hideDeleteAllBtn ? "d-none" : ""
                }`}
                onClick={deleteAll}
              >
                Xoá hết
              </button>
              <Link to="/menu"
                className={`btn d-block mx-auto btn btn-primary mt-3 text-end ${
                  hideDeleteAllBtn ? "" : "d-none"
                }`}
              >
                Quay lại mua hàng</Link>
              
            </div>
            <div className="col-12 col-md-4">
              <div className="p-4 border rounded">
                <p className="h4 fw-bold text-center pb-3 border-bottom">
                  Thông tin đơn hàng
                </p>
                <div className="mt-5 d-flex flex-row flex-wrap justify-content-between align-items-center">
                  <p
                    className={`${
                      hideDeleteAllBtn ? "d-none" : "d-block"
                    }text-start text-secondary`}
                  >
                    VAT (10%):
                  </p>
                  <p className="h5 text-end">
                    <span className="vat-cost">
                      {vat.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </p>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
                  <p className="text-start text-secondary">Tổng tiền:</p>
                  <p className="h5 text-end text-danger">
                    <span className="h3 total-cost">
                      {final_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </p>
                  <p className="text-secondary mt-4">
                    *** Phí vận chuyển, mã giảm giá sẽ được tính ở bước kế tiếp
                  </p>
                  <a
                    href="/"
                    className="payment btn btn-warning w-100 fw-bold text-uppercase"
                  >
                    Thanh toán
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
    </>
  );
}
