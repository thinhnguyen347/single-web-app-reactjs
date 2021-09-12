import contactImg from "./img/contact.webp";

export default function Contact() {
  return (
    <div className="container py-5 my-5">
      <div className="row row-cols-lg-2">
        <div className="col-12 col-md-12 col-lg-4 col-xl-6 px-lg-5 pt-4">
          <h3 className="title text-center">LIÊN HỆ VỚI CHÚNG TÔI!</h3>

          <img
            className="img-fluid d-block pt-4"
            src={contactImg}
            alt="contact"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-8 col-xl-6 px-lg-5 pt-4">
          <div className="bg px-4 pt-3">
            <form className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col flex-column d-flex pt-2">
                  <label className="form-control-label font-condense">
                    Tên<span className="text-info"> *</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="ps-2 font-condense"
                    name="fname"
                    placeholder="Tên khách hàng"
                  />
                </div>
              </div>

              <div className="row justify-content-between text-left pt-2 ">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label font-condense">
                    Email<span className="text-info"> *</span>
                  </label>
                  <input
                    type="text"
                    id="guest-email"
                    className="ps-2 font-condense"
                    name="guest-email"
                    placeholder="Email khách hàng"
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex pt-2 pt-md-0">
                  <label className="form-control-label font-condense">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="ps-2 font-condense"
                    name="phone"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              <div className="row justify-content-between text-left pt-2">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label font-condense">
                    Lưu ý hoặc yêu cầu đặc biệt &nbsp;
                    <span className="fst-italic">(không bắt buộc)</span>
                  </label>
                  <textarea id="comment" name="comment" className=" ps-2 fst-italic" defaultValue="Lưu ý hoặc yêu cầu đặc biệt"></textarea>
                </div>
              </div>

              <p className="btn btn-warning rounded-pill text-center my-4 d-block">
                SEND
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
