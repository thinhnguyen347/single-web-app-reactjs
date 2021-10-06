import { useState } from "react";
import { useDispatch } from "react-redux";
import { shippingFeeToHome, getOrderOnSite } from "../../app/shippingFeeSlice";

export default function GuestInfo({ returnToCart, goToPaymentInfo }) {
  const dispatch = useDispatch();
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [alertFail, setAlertFail] = useState(false);

  function infoValidation() {
    if (
      /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone) &&
      guestName !== "" &&
      address !== ""
    ) {
      goToPaymentInfo();
    } else {
      setAlertFail(true);
      setTimeout(() => setAlertFail(false), 2000);
    }
  }

  return (
    <div className="section position-relative">
      <div className="mb-4 mb-md-4">
        <p className="h4">Thông tin khách hàng</p>
      </div>
      <div className="section-content section-customer-information">
        <div className="fieldset">
          <div className="field">
            <div className="field-input-wrapper">
              <label
                className="field-label d-block p-2"
                htmlFor="billing_address_full_name"
              >
                <span className="text-danger">*</span> Họ và tên:
              </label>
              <input
                placeholder="Họ và tên"
                spellCheck="false"
                className="field-input p-2 w-100 rounded"
                type="text"
                id="billing_address_full_name"
                name="billing_address[full_name]"
                onChange={(e) =>
                  setTimeout(() => setGuestName(e.target.value), 300)
                }
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
                spellCheck="false"
                className="field-input p-2 w-100 rounded"
                type="email"
                id="checkout_user_email"
                name="checkout_user[email]"
              />
            </div>

            <div className="col-12 col-md-6 flex-fill">
              <div className="field-input-wrapper d-flex flex-column">
                <label
                  className="field-label p-2"
                  htmlFor="billing_address_phone"
                >
                  <span className="text-danger">*</span> Số điện thoại:
                </label>
                <input
                  placeholder="Số điện thoại"
                  className=" p-2 rounded flex-fill"
                  maxLength="15"
                  type="tel"
                  id="billing_address_phone"
                  name="billing_address[phone]"
                  required
                  onChange={(e) =>
                    setTimeout(() => setPhone(e.target.value), 300)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="fieldset">
          <div className="field default">
            <div className="content-box mt0">
              <div
                id="form_update_location_customer_shipping"
                className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                htmlFor="customer_pick_at_location_false"
              >
                <div className="order-checkout__loading--box">
                  <div className="order-checkout__loading--circle"></div>
                </div>

                <div className="field">
                  <div className="field-input-wrapper">
                    <label
                      className="field-label w-100 p-2"
                      htmlFor="billing_address_address1"
                    >
                      <span className="text-danger">*</span> Địa chỉ:
                    </label>
                    <input
                      placeholder="Số nhà, tên phố, phường ..."
                      spellCheck="false"
                      className="field-input w-100 p-2 rounded"
                      size="30"
                      type="text"
                      id="billing_address_address1"
                      name="billing_address[address1]"
                      onChange={(e) =>
                        setTimeout(() => setAddress(e.target.value), 300)
                      }
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <span className="fw-bold d-block p-2">
                    Lựa chọn phương thức nhận hàng:
                  </span>
                  <label className="py-3 d-block" htmlFor="homeDelivery">
                    <input
                      id="homeDelivery"
                      type="radio"
                      name="deliveryOption"
                      className="me-3"
                      onClick={(e) => {
                        if (e.target.checked) dispatch(shippingFeeToHome());
                      }}
                    />
                    Giao hàng tận nhà (tối đa 6km)
                  </label>
                  <label className="pb-3 d-block" htmlFor="onSite">
                    <input
                      id="onSite"
                      type="radio"
                      name="deliveryOption"
                      className="me-3"
                      onClick={(e) => {
                        if (e.target.checked) dispatch(getOrderOnSite());
                      }}
                    />
                    Nhận tại cửa hàng
                  </label>
                </div>

                <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                  <button
                    className="btn btn-light mt-4 me-0 text-secondary"
                    onClick={() => {
                      returnToCart();
                      dispatch(shippingFeeToHome());
                    }}
                  >
                    Quay lại giỏ hàng
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 me-0 d-block"
                    onClick={infoValidation}
                  >
                    Tới phương thức thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`alert alert-danger text-center position-fixed bottom-0 start-50 translate-middle ${
          alertFail && "opacity-100"
        }`}
        role="alert"
      >
        Quý khách vui lòng nhập hoặc kiểm tra lại thông tin cá&nbsp;nhân &!
      </div>
    </div>
  );
}
