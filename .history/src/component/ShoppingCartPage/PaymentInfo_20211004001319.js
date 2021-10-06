import React,{useState} from 'react';
export default function PaymentInfo({ returnToGuestInfo }) {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);

  return (
    <div className="section">
      <div className="mb-4 mb-md-4">
        <p className="h4">Phương thức thanh toán</p>
      </div>
      <div className="section-content section-customer-information">
        <div className="fieldset">
          <div className="field">
            <div className="field-input-wrapper">
              <label
                className="field-label d-block p-2"
                htmlFor="billing_address_full_name"
              >
                Họ và tên:
              </label>
              <input
                placeholder="Họ và tên"
                autocapitalize="off"
                spellcheck="false"
                className="field-input p-2 w-100 rounded"
                type="text"
                id="billing_address_full_name"
                name="billing_address[full_name]"
                value=""
              />
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            <div className="col-12 col-md-6 flex-fill">
              <label className="field-label p-2" htmlFor="checkout_user_email">
                Email:
              </label>
              <input
                placeholder="Email"
                autocapitalize="off"
                spellcheck="false"
                className="field-input p-2 w-100 rounded"
                type="email"
                id="checkout_user_email"
                name="checkout_user[email]"
                value=""
              />
            </div>

            <div className="col-12 col-md-6 flex-fill">
              <div className="field-input-wrapper d-flex flex-column">
                <label
                  className="field-label p-2"
                  htmlFor="billing_address_phone"
                >
                  Số điện thoại:
                </label>
                <input
                  placeholder="Số điện thoại"
                  autocapitalize="off"
                  spellcheck="false"
                  className=" p-2 rounded flex-fill"
                  maxlength="15"
                  type="tel"
                  id="billing_address_phone"
                  name="billing_address[phone]"
                  value=""
                  required
                />
              </div>
            </div>
          </div>
        </div>
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
          onClick={() => {setAlertSuccess(true); setTimeout(()=>setAlertSuccess(false), 2000)}}
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
        className={`alert alert-danger position-fixed bottom-0 end-0 mx-3 mx-md-5 ${
          alertFail && "opacity-100"
        }`}
        role="alert"
      >
        Vui lòng chọn số lượng!
      </div>
    </div>
  );
}
