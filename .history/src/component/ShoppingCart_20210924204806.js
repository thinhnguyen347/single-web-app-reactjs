import React, { useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import MainContent from "./ShoppingCartItem";
import MenuPage from "./MenuPage";

export default function ShoppingCart() {
  const [addedList, setAddedList] = useState(localStorage.getItem("cart"));
  const [message, setMessage] = useState(true);
  const [hideDeleteAllBtn, setHideDeleteAllBtn] = useState(false);

  let list, vat, final_price, content;

  if (addedList !== "") {
    let temp = JSON.parse(addedList);
    list = [...temp];
  } else {
    list = []
  }

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

  function checkCart (){
    if (list.length===0) setHideDeleteAllBtn(true)
  }

  checkCart();

  function deleteAll() {
    
    setMessage(false);
    setHideDeleteAllBtn(true);
    localStorage.setItem("cart", "");
  }

  function increase(id) {
    let index = list.findIndex((item) => item.id === id);
    list[index].amount = list[index].amount + 1;
    localStorage.setItem("cart", JSON.stringify(list));
    setAddedList(JSON.stringify(list));
  }

  function decrease(id) {
    let index = list.findIndex((item) => item.id === id);
    if (list[index].amount >= 2) list[index].amount = list[index].amount - 1;
    localStorage.setItem("cart", JSON.stringify(list));
    setAddedList(JSON.stringify(list));
  }

  function deleteItem(id) {
    let index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    if (list.length === 0) setHideDeleteAllBtn(true);
    localStorage.setItem("cart", JSON.stringify(list));
    setAddedList(JSON.stringify(list));
  }

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
            Giỏ hàng
          </li>
        </ol>
      </nav>
      <section className="px-3 py-5 mb-5 p-md-3">
        <h2 className="text-center">GIỎ HÀNG</h2>
        {message ? (
          <p className="h6 text-center">
            Hiện có
            <span className="text-danger fw-bold mx-2">{list.length}</span>
            sản phẩm trong giỏ hàng
          </p>
        ) : (
          <p></p>
        )}
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-8 py-0 ps-md-0">
              {content}
              {list.map(({ id, title, img, price, amount }) => (
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
              <Link to="/menu">
                <button
                  className={`btn d-block mx-auto btn btn-primary mt-3 text-end ${
                    hideDeleteAllBtn ? "" : "d-none"
                  }`}
                >
                  Quay lại mua hàng
                </button>
              </Link>
            </div>
            <div className="col-12 col-md-4 pe-0">
              <div className="p-4 border rounded">
                <p className="h4 fw-bold text-center pb-3 border-bottom">
                  Thông tin đơn&nbsp;hàng
                </p>
                <div className="mt-5 mb-3 d-flex flex-row flex-wrap justify-content-between align-items-center">
                  <p
                    className="text-start text-secondary mb-0"
                  >
                    VAT (10%):
                  </p>
                  <p className="h5 text-end mb-0">
                    {vat.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-between justify-content-md-center justify-content-lg-between align-items-center">
                  <p className="text-start text-secondary mb-0">Tổng tiền:</p>
                  <p className="h3 text-end text-danger ms-2 mb-0">
                    {final_price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <p className="text-secondary mt-4">
                    *** Phí vận chuyển, mã giảm giá sẽ được tính ở bước
                    kế&nbsp;tiếp
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
          <MenuPage />
        </Route>
      </Switch>
    </>
  );
}
