import React, { useState, useRef } from "react";
const combo = [
  {
    id: 30,
    title: "Combo 1",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/0XjsT2X/combo-nem-nuong.webp",
  },
  {
    id: 31,
    title: "Combo 2",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp",
  },
  {
    id: 32,
    title: "Combo 3",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp",
  },
];

export default function Combo() {

  let timer = useRef();

  function addToList(id) {
    clearTimeout(timer.current);
  
    let index = combo.findIndex((item) => item.id === id);
    if (combo[index].amount === 0) {
      setAlertFail(true);
      timer.current = setTimeout(() => setAlertFail(false), 2000);
      return;
    }
  
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
    let temp = [...list].map((item) => ({ ...item }));
    temp[index].amount = 0;
    setProducts(temp);
  }


  return (
    <div className="container-fluid pb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5">
        {combo.map(({ id, img }) => (
          <div key={id} className="col-12 col-md-6 col-lg-4">
            <div className="container px-0 border rounded overflow-hidden position-relative combo">
              <img src={img} className="img-fluid" alt="combo" />
              <div className="tag border p-2 bg-danger position-absolute bottom-0">
                <p className="btn m-0 fs-5 fw-bold text-light" onClick={addToList(id)}>MUA NGAY!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
