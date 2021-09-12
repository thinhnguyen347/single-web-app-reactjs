import contactImg from "./img/contact.webp";

export default function Contact() {
  return (
    <div className="container py-5 my-5">
      <div className="row row-cols-lg-2">
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-lg-5 pt-4 ">
          <h3 className="title text-center">LIÊN HỆ VỚI CHÚNG&nbsp;TÔI!</h3>

          <p className="pt-3"> Địa chỉ: Đường 123, Gia Lâm, Hà&nbsp;Nội </p>
          <p className="pb-3"> Hotline/ Zalo: 0984.018.891 </p>

          <img
            className="img-fluid d-block"
            src={contactImg}
            alt="contact"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-xl-6 px-lg-0 pt-4 pt-md-1">
          <div className="bg px-4">
            <form className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col flex-column d-flex pt-2">
                  <label className="form-control-label font-condense" htmlFor="fname">
                    Tên khách hàng<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="p-2 font-condense"
                    name="fname"
                    placeholder="Tên khách hàng"
                    required={true}
                  />
                </div>
              </div>

              <div className="row justify-content-between text-left pt-2 ">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label font-condense" htmlFor="guest-email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="guest-email"
                    className="p-2 font-condense"
                    name="guest-email"
                    placeholder="Email khách hàng"
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex pt-2 pt-md-0">
                  <label className="form-control-label font-condense" htmlFor="phone">
                    Số điện thoại <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="p-2 font-condense"
                    name="phone"
                    placeholder="Số điện thoại"
                    required={true}
                  />
                </div>
              </div>

              <div className="row justify-content-between text-left pt-2">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label font-condense" htmlFor="comment">
                    Nội dung liên hệ <span className="text-danger"> *</span>
                  </label>
                  <textarea id="comment" name="comment" className="p-2 fst-italic" defaultValue="" required={true}></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-warning px-5 rounded-pill text-center my-4 d-block mx-auto">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
