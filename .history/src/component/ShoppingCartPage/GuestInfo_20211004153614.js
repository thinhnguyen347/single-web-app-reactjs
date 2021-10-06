import { useDispatch } from "react-redux";
import { shippingFeeToHome, getOrderOnSite } from "../../app/shippingFeeSlice";

export default function GuestInfo({ returnToCart, goToPaymentInfo }) {
  const dispatch = useDispatch();

  return (
    <div className="section">
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
                Họ và tên:
              </label>
              <input
                placeholder="Họ và tên"
                spellCheck="false"
                className="field-input p-2 w-100 rounded"
                type="text"
                id="billing_address_full_name"
                name="billing_address[full_name]"
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
                  Số điện thoại:
                </label>
                <input
                  placeholder="Số điện thoại"
                  autocapitalize="off"
                  spellcheck="false"
                  className=" p-2 rounded flex-fill"
                  maxLength="15"
                  type="tel"
                  id="billing_address_phone"
                  name="billing_address[phone]"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="fieldset">
          <form
            id="form_update_shipping_method"
            className="field default"
            method="post"
          >
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
                      Địa chỉ:
                    </label>
                    <input
                      placeholder="Số nhà, tên phố, phường ..."
                      autocapitalize="off"
                      spellcheck="false"
                      className="field-input w-100 p-2 rounded"
                      size="30"
                      type="text"
                      id="billing_address_address1"
                      name="billing_address[address1]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <span className="fw-bold d-block p-2">
                    Lựa chọn phương thức nhận hàng
                  </span>
                  <label className="py-3 d-block">
                    <input
                      id="homeDelivery"
                      type="radio"
                      name="deliveryOption"
                      className="me-3"
                      checked
                      onChange={() => {
                        dispatch(shippingFeeToHome());
                      }}
                    />
                    Giao hàng tận nhà
                  </label>
                  <label className="pb-3 d-block">
                    <input
                      id="onSite"
                      type="radio"
                      name="deliveryOption"
                      className="me-3"
                      onChange={() => {
                        dispatch(getOrderOnSite());
                      }}
                    />
                    Nhận tại cửa hàng
                  </label>
                </div>

                <div className="container-fluid mx-0 px-0 d-flex justify-content-between">
                  <button
                    className="btn btn-light mt-4 me-0 text-secondary"
                    onClick={() => returnToCart()}
                  >
                    Quay lại giỏ hàng
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 me-0 d-block"
                    onClick={(e) => goToPaymentInfo(e)}
                  >
                    Tới phương thức thanh toán
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="change_pick_location_or_shipping"></div>
    </div>
  );
}
