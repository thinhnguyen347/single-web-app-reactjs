export default function PaymentInfo() {
  return (
    <div className="section">
      <div className="mb-4 mb-md-5">
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
                autocapitalize="off"
                spellcheck="false"
                className="field-input p-2 d-block w-100"
                size="30"
                type="text"
                id="billing_address_full_name"
                name="billing_address[full_name]"
                value=""
              />
            </div>
          </div>

          <div className="field  field-two-thirds  field-show-floating-label">
            <div className="field-input-wrapper">
              <label className="field-label d-block p-2" htmlFor="checkout_user_email">
                Email
              </label>
              <input
                placeholder="Email"
                autocapitalize="off"
                spellcheck="false"
                className="field-input p-2"
                size="30"
                type="email"
                id="checkout_user_email"
                name="checkout_user[email]"
                value=""
              />
            </div>
          </div>

          <div className="field field-required field-third  field-show-floating-label">
            <div className="field-input-wrapper">
              <label className="field-label" htmlFor="billing_address_phone">
                Số điện thoại
              </label>
              <input
                placeholder="Số điện thoại"
                autocapitalize="off"
                spellcheck="false"
                className="field-input"
                size="30"
                maxlength="15"
                type="tel"
                id="billing_address_phone"
                name="billing_address[phone]"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="fieldset">
          <form
            id="form_update_shipping_method"
            className="field default"
            accept-charset="UTF-8"
            method="post"
          >
            <input name="utf8" type="hidden" value="✓" />
            <div className="content-box mt0">
              <div
                id="form_update_location_customer_shipping"
                className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                htmlFor="customer_pick_at_location_false"
              >
                <input name="utf8" type="hidden" value="✓" />
                <div className="order-checkout__loading--box">
                  <div className="order-checkout__loading--circle"></div>
                </div>

                <div className="field   ">
                  <div className="field-input-wrapper">
                    <label
                      className="field-label"
                      htmlFor="billing_address_address1"
                    >
                      Địa chỉ
                    </label>
                    <input
                      placeholder="Địa chỉ"
                      autocapitalize="off"
                      spellcheck="false"
                      className="field-input"
                      size="30"
                      type="text"
                      id="billing_address_address1"
                      name="billing_address[address1]"
                      value=""
                    />
                  </div>
                </div>

                <input
                  name="selected_customer_shipping_country"
                  type="hidden"
                  value=""
                />
                <input
                  name="selected_customer_shipping_province"
                  type="hidden"
                  value=""
                />
                <input
                  name="selected_customer_shipping_district"
                  type="hidden"
                  value=""
                />
                <input
                  name="selected_customer_shipping_ward"
                  type="hidden"
                  value=""
                />

                <div className="field field-show-floating-label  field-half ">
                  <div className="field-input-wrapper field-input-wrapper-select">
                    <label
                      className="field-label"
                      htmlFor="customer_shipping_province"
                    >
                      Tỉnh / thành
                    </label>
                    <select
                      className="field-input"
                      id="customer_shipping_province"
                      name="customer_shipping_province"
                    >
                      <option data-code="null" value="null">
                        Chọn tỉnh / thành{" "}
                      </option>

                      <option data-code="HC" value="50">
                        Hồ Chí Minh
                      </option>

                      <option data-code="HI" value="1">
                        Hà Nội
                      </option>

                      <option data-code="DA" value="32">
                        Đà Nẵng
                      </option>

                      <option data-code="AG" value="57">
                        An Giang
                      </option>

                      <option data-code="BV" value="49">
                        Bà Rịa - Vũng Tàu
                      </option>

                      <option data-code="BI" value="47">
                        Bình Dương
                      </option>

                      <option data-code="BP" value="45">
                        Bình Phước
                      </option>

                      <option data-code="BU" value="39">
                        Bình Thuận
                      </option>

                      <option data-code="BD" value="35">
                        Bình Định
                      </option>

                      <option data-code="BL" value="62">
                        Bạc Liêu
                      </option>

                      <option data-code="BG" value="15">
                        Bắc Giang
                      </option>

                      <option data-code="BK" value="4">
                        Bắc Kạn
                      </option>

                      <option data-code="BN" value="18">
                        Bắc Ninh
                      </option>

                      <option data-code="BT" value="53">
                        Bến Tre
                      </option>

                      <option data-code="CB" value="3">
                        Cao Bằng
                      </option>

                      <option data-code="CM" value="63">
                        Cà Mau
                      </option>

                      <option data-code="CN" value="59">
                        Cần Thơ
                      </option>

                      <option data-code="GL" value="41" selected="">
                        Gia Lai
                      </option>

                      <option data-code="HG" value="2">
                        Hà Giang
                      </option>

                      <option data-code="HM" value="23">
                        Hà Nam
                      </option>

                      <option data-code="HT" value="28">
                        Hà Tĩnh
                      </option>

                      <option data-code="HO" value="11">
                        Hòa Bình
                      </option>

                      <option data-code="HY" value="21">
                        Hưng Yên
                      </option>

                      <option data-code="HD" value="19">
                        Hải Dương
                      </option>

                      <option data-code="HP" value="20">
                        Hải Phòng
                      </option>

                      <option data-code="HU" value="60">
                        Hậu Giang
                      </option>

                      <option data-code="KH" value="37">
                        Khánh Hòa
                      </option>

                      <option data-code="KG" value="58">
                        Kiên Giang
                      </option>

                      <option data-code="KT" value="40">
                        Kon Tum
                      </option>

                      <option data-code="LI" value="8">
                        Lai Châu
                      </option>

                      <option data-code="LA" value="51">
                        Long An
                      </option>

                      <option data-code="LO" value="6">
                        Lào Cai
                      </option>

                      <option data-code="LD" value="44">
                        Lâm Đồng
                      </option>

                      <option data-code="LS" value="13">
                        Lạng Sơn
                      </option>

                      <option data-code="ND" value="24">
                        Nam Định
                      </option>

                      <option data-code="NA" value="27">
                        Nghệ An
                      </option>

                      <option data-code="NB" value="25">
                        Ninh Bình
                      </option>

                      <option data-code="NT" value="38">
                        Ninh Thuận
                      </option>

                      <option data-code="PT" value="16">
                        Phú Thọ
                      </option>

                      <option data-code="PY" value="36">
                        Phú Yên
                      </option>

                      <option data-code="QB" value="29">
                        Quảng Bình
                      </option>

                      <option data-code="QM" value="33">
                        Quảng Nam
                      </option>

                      <option data-code="QG" value="34">
                        Quảng Ngãi
                      </option>

                      <option data-code="QN" value="14">
                        Quảng Ninh
                      </option>

                      <option data-code="QT" value="30">
                        Quảng Trị
                      </option>

                      <option data-code="ST" value="61">
                        Sóc Trăng
                      </option>

                      <option data-code="SL" value="9">
                        Sơn La
                      </option>

                      <option data-code="TH" value="26">
                        Thanh Hóa
                      </option>

                      <option data-code="TB" value="22">
                        Thái Bình
                      </option>

                      <option data-code="TY" value="12">
                        Thái Nguyên
                      </option>

                      <option data-code="TT" value="31">
                        Thừa Thiên Huế
                      </option>

                      <option data-code="TG" value="52">
                        Tiền Giang
                      </option>

                      <option data-code="TV" value="54">
                        Trà Vinh
                      </option>

                      <option data-code="TQ" value="5">
                        Tuyên Quang
                      </option>

                      <option data-code="TN" value="46">
                        Tây Ninh
                      </option>

                      <option data-code="VL" value="55">
                        Vĩnh Long
                      </option>

                      <option data-code="VT" value="17">
                        Vĩnh Phúc
                      </option>

                      <option data-code="YB" value="10">
                        Yên Bái
                      </option>

                      <option data-code="DB" value="7">
                        Điện Biên
                      </option>

                      <option data-code="DC" value="42">
                        Đắk Lắk
                      </option>

                      <option data-code="DO" value="43">
                        Đắk Nông
                      </option>

                      <option data-code="DN" value="48">
                        Đồng Nai
                      </option>

                      <option data-code="DT" value="56">
                        Đồng Tháp
                      </option>
                    </select>
                  </div>
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
