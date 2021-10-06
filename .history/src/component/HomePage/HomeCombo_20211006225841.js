import React, { useState, useRef, useEffect } from "react";

export default function Combo() {
  import { useDispatch } from "react-redux";
  const [combo, setCombo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const url = "https://yummy-db.herokuapp.com";
  let timer = useRef();

  useEffect(() => {
    fetch(`${url}/combo`)
      .then((res) => res.json())
      .then((result) => {
        setCombo(result);
        setIsLoading(false);
      });
  }, []);

  function addToList(id) {
    clearTimeout(timer.current);
    let index = combo.findIndex((item) => item.id === id);
    let cart_current = JSON.parse(localStorage.getItem("cart"));
    let index1 = cart_current.findIndex((item) => item.id === combo[index].id);
    if (index1 < 0) {
      cart_current.push(combo[index]);
    } else {
      cart_current[index1].amount += combo[index].amount;
    }
    setAlertSuccess(true);
    timer.current = setTimeout(() => setAlertSuccess(false), 2000);
    localStorage.setItem("cart", JSON.stringify(cart_current));
    let temp = [...combo].map((item) => ({ ...item }));
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
        <div className="container-fluid pb-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
            {combo.map(({ id, img }) => (
              <div key={id} className="col-12 col-md-6 col-lg-4">
                <div className="container px-0 border rounded overflow-hidden position-relative combo">
                  <img src={img} className="img-fluid" alt="combo" />
                  <div className="tag border p-2 bg-danger position-absolute bottom-0">
                    <p
                      className="btn m-0 fs-5 fw-bold text-light"
                      onClick={addToList(id)}
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
        className={`alert alert-primary position-fixed start-50 translate-middle-x ${
          alertSuccess ? "bottom-0 opacity-100" : "top-100 opacity-100"
        }`}
        role="alert"
      >
        Thêm vào giỏ thành công!
      </div>
    </>
  );
}
