import React, { useState } from "react";
export default function PaymentInfo({ returnToGuestInfo }) {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);

  return (
    <div className="section">
      <div className="mb-4 mb-md-4">
        <p className="h4">Phương thức thanh toán</p>
      </div>
      
      <div>
        <span className="fw-bold d-block p-2">Lựa chọn phương thức nhận hàng</span>
        <label className="py-3 d-block">
        <input id="homeDelivery" type="radio" name="deliveryOption" className="me-3" checked/>
        Giao hàng tận nhà
        </label>
        <label className="pb-3 d-block">
        <input id="onSite" type="radio" name="deliveryOption" className="me-3"/>
        Nhận tại cửa hàng
        </label>
      </div>

      <div>
        <span className="fw-bold d-block p-2">Lựa chọn phương thức nhận hàng</span>
        <label className="py-3 d-block">
        <input id="homeDelivery" type="radio" name="deliveryOption" className="me-3" checked/>
        Giao hàng tận nhà
        </label>
        <label className="pb-3 d-block">
        <input id="onSite" type="radio" name="deliveryOption" className="me-3"/>
        Nhận tại cửa hàng
        </label>
      </div>

      <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
        <button
          className="btn btn-light mt-4 me-0 text-secondary"
          onClick={() => returnToGuestInfo()}
        >
          Trở về Thông tin khách hàng
        </button>
        <button
          className="btn btn-primary mt-4 me-0 d-block"
          onClick={() => {
            setAlertSuccess(true);
            setTimeout(() => setAlertSuccess(false), 3000);
          }}
        >
          Hoàn thành đơn hàng
        </button>
      </div>
      <div
        className={`alert alert-primary position-fixed bottom-0 start-50 translate-middle ${
          alertSuccess && "opacity-100"
        }`}
        role="alert"
      >
        Đặt hàng thành công!
      </div>
      <div
        className={`alert alert-danger position-fixed bottom-0 start-50 translate-middle ${
          alertFail && "opacity-100"
        }`}
        role="alert"
      >
        Vui lòng chọn số lượng!
      </div>
    </div>
  );
}
