import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../app/cartSlice";

export default function Combo() {
  const dispatch = useDispatch();
  const [combo, setCombo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const url = "https://yummy-db.herokuapp.com";
  let timer = useRef(),
    comboTemp = [...combo];

  useEffect(() => {
    fetch(`${url}/combos`)
      .then((res) => res.json())
      .then((result) => {
        setCombo(result);
        con
        setIsLoading(false);
      });
  }, []);

  function addToList(id) {
    clearTimeout(timer.current);
    let index = comboTemp.findIndex((item) => item.id === id);
    let cart_current = JSON.parse(window.localStorage.getItem("cart"));
    let index1 = cart_current.findIndex((item) => item.id === comboTemp[index].id);
    if (index1 < 0) {
      cart_current.push(comboTemp[index]);
    } else {
      cart_current[index1].amount += comboTemp[index].amount;
    }
    setAlertSuccess(true);
    timer.current = setTimeout(() => setAlertSuccess(false), 2000);
    window.localStorage.setItem("cart", JSON.stringify(cart_current));
    let temp = [...comboTemp].map((item) => ({ ...item }));
    temp[index].amount = 0;
    setCombo(temp);
  }

  return (
    <>
      {isLoading ? (
        <div className="loadingio-spinner-rolling-ejs4tg3ktq7 mt-0">
          <div className="ldio-i7neyuiwdre d-flex justify-content-center align-self-center">
            <div></div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
            {comboTemp.map(({ id, img }) => (
              <div key={id} className="col-12 col-md-6 col-lg-4">
                <div className="container px-0 border rounded overflow-hidden position-relative combo">
                  <img src={img} className="img-fluid" alt="combo" />
                  <div className="tag border border-dark border-start-0 px-2 bg-warning position-absolute bottom-0">
                    <p
                      className="btn m-0 fs-5 fw-bold text-dark"
                      onClick={(e) => {
                        addToList(id, e);
                        dispatch(updateCart());
                      }}
                    >
                      MUA NGAY!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        className={`alert alert-primary text-center position-fixed start-50 translate-middle-x ${
          alertSuccess ? "opacity-100 active" : "opacity-0"
        }`}
        role="alert"
      >
        Thêm vào giỏ thành&nbsp;công!
      </div>
    </>
  );
}
