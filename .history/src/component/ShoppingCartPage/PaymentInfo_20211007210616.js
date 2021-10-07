import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { backHome } from "../../app/backHomePageSlice";

export default function PaymentInfo({ returnToGuestInfo }) {
  const dispatch = useDispatch();
  const [onlinePayment, setOnlinePayment] = useState(false);

  return (
    <>
      <div className="section">
        <div className="mb-4 mb-md-4">
          <p className="h4 fw-bold">Phương thức thanh toán</p>
        </div>

        <div>
          <span className="fw-bold d-block p-2">
            Lựa chọn phương thức thanh toán:
          </span>
          <label className="py-3 d-block" htmlFor="homeDelivery">
            <input
              id="homeDelivery"
              type="radio"
              name="deliveryOption"
              className="me-3"
              defaultChecked
              onClick={(e) => {
                if (e.target.checked) setOnlinePayment(false);
              }}
            />
            Thanh toán khi nhận hàng
          </label>
          <label className="pb-3 d-block" htmlFor="onSite">
            <input
              id="onSite"
              type="radio"
              name="deliveryOption"
              className="me-3"
              onClick={(e) => {
                if (e.target.checked) setOnlinePayment(true);
              }}
            />
            Chuyển khoản qua tài khoản hoặc ví điện tử.
          </label>
          {onlinePayment && (
            <div className="border border-success rounded p-2 mt-3">
              <p>
                Số tài khoản: <span className="fw-bold">0011 1100 1111 </span>{" "}
                tại ngân hàng Vietcom&nbsp;Bank
              </p>
              <p>
                Ví Momo: <span className="fw-bold">0984018891</span>
              </p>
              <p className="fw-bold">
                Chủ tài khoản: <span>Nguyễn Đức Thịnh</span>
              </p>
            </div>
          )}
        </div>

        <div className="container-fluid mx-0 mt-3 px-0 d-flex justify-content-between">
          <button
            className="btn btn-light mt-4 me-0 text-secondary"
            onClick={() => returnToGuestInfo()}
          >
            Trở về Thông tin khách hàng
          </button>
          <button
            className="btn btn-primary mt-4 me-0 d-block"
            onClick={() => {
              dispatch(backHome());
            }}
          >
            Hoàn thành đơn hàng
          </button>
        </div>
      </div>
    </>
  );
}
