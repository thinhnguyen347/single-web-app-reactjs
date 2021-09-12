import contactImg from "./img/contact.webp"

export default function Contact() {
  return (
    <div className="container">
      <div className="row row-cols-lg-2">
        <div className="col-12 col-md-12 col-lg-4 col-xl-6 px-lg-5 pt-4">
          <h3 className="title text-center">PREFER TO ARRANGE YOUR&nbsp;TOUR.</h3>
          <h3 className="title text-center">CONTACT US&nbsp;NOW!</h3>

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
                <div className="form-group col-sm-2 flex-column d-flex pt-2">
                  <label
                    className="form-control-label font-condense"
                    for="guest-title"
                  >
                    Title
                  </label>
                  <select
                    name="guest-title"
                    id="guest-title"
                    className="ps-2 font-condense"
                  >
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                  </select>
                </div>

                <div className="form-group col-sm-10 flex-column d-flex pt-2">
                  <label className="form-control-label font-condense">
                    Your name<span className="text-info"> *</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="ps-2 font-condense"
                    name="fname"
                    placeholder="Enter your name"
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
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex pt-2 pt-md-0">
                  <label className="form-control-label font-condense">
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="ps-2 font-condense"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="row justify-content-between text-left pt-2">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label font-condense">
                    Additional notes or requests{" "}
                    <span className="fst-italic">(optional)</span>{" "}
                  </label>
                  <textarea id="comment" name="comment">
                    {" "}
                  </textarea>
                </div>
              </div>
              
                <p className="btn btn-warning rounded-pill text-center my-4 mx-auto d-block">SEND</p>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
