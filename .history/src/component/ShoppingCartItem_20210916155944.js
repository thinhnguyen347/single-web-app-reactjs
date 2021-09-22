import React from "react";
import {BiPlus} from "react-icons/bi"
import {BiMinus} from "react-icons/bi"


export default function MainContent({
  id,
  title,
  img,
  price,
  amount,
  increase,
  decrease,
  deleteItem,
}) {
  return (
    <div className="container-fluid p-0 mb-3">
      <div className="row row-cols-2 g-3">
        <div className="col-12 col-md-4 col-lg-2">
          <img src={img} alt="added-product" className="img-fluid" />
        </div>
        <div className="col-12 col-md-8 col-lg-10 container-fluid">
          <div className="row row-cols-2">
            <div className="col-12 col-lg-5">
              <p className="h5 item-name text-center text-lg-start">{title}</p>
              <div className="spinbox d-flex mx-auto ms-lg-0">
                <div className="border flex-fill text-center border-end-0 border-secondary rounded-start">
                  <p className="fs-5 mb-0" onClick={(e) => decrease(id, e)}>
                  <BiMinus/>
                  </p>
                </div>
                <div className="border flex-fill text-center border-secondary">
                  <p className="fs-6 mb-0 py-1 px-2 fw-bolder">{amount}</p>
                </div>
                <div className="border flex-fill text-center border-start-0  border-secondary rounded-end">
                  <p className="fs-5 mb-0" onClick={(e) => increase(id, e)}>
                  <BiPlus/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3 mt-3">
              <p className="m-0 text-center">Đơn giá</p>
              <p className=" py-1 py-lg-2 text-center">
                <span className="price">
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </p>
            </div>
            <div className="col-6 col-md-6 col-lg-4 mt-3 position-relative">
              <p className="m-0 text-center">Thành tiền</p>
              <p className="h5 py-1 py-lg-2 text-center fw-bold">
                <span className="price">
                  {(price * amount).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </p>
              <button
                className="btn-close position-absolute end-0 top-0 p-0 mt-0 me-2 me-md-1 me-lg-3"
                onClick={(e) => deleteItem(id, e)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
