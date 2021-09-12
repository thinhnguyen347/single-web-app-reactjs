
export default function Contact(){

    return(    
    <div class="container">
      <div class="row row-cols-lg-2">
        <div class="col-12 col-md-12 col-lg-4 col-xl-6 px-lg-5 pt-4">

          <h3 class="title text-center">PREFER TO ARRANGE YOUR&nbsp;TOUR.</h3>
          <h3 class="title text-center">CONTACT US&nbsp;NOW!</h3>

          <img class="img-fluid d-block pt-4" src="./img/bg/contact.webp" alt="contact" />
        </div>


        <div class="col-12 col-md-12 col-lg-8 col-xl-6 px-lg-5 pt-4">
          <div class="bg px-4 pt-3">
            <form class="form-card">
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-2 flex-column d-flex pt-2">
                  <label class="form-control-label font-condense" for="guest-title">Title</label>
                  <select name="guest-title" id="guest-title" class="ps-2 font-condense">
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                  </select>
                </div>

                <div class="form-group col-sm-10 flex-column d-flex pt-2">
                  <label class="form-control-label font-condense">Your name<span class="text-info"> *</span></label>
                  <input type="text" id="fname" class="ps-2 font-condense" name="fname" placeholder="Enter your name">
                </div>
              </div>

              <div class="row justify-content-between text-left pt-2 ">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label font-condense">Email<span class="text-info"> *</span></label>
                  <input type="text" id="guest-email" class="ps-2 font-condense" name="guest-email"
                    placeholder="Enter your email">
                </div>
                <div class="form-group col-sm-6 flex-column d-flex pt-2 pt-md-0">
                  <label class="form-control-label font-condense">Phone number</label>
                  <input type="text" id="phone" class="ps-2 font-condense" name="phone"
                    placeholder="Enter your phone number">
                </div>
              </div>

              <div class="row justify-content-between text-left pt-2 ">

                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label font-condense">Country</label>
                  <input type="text" id="country" class="ps-2 font-condense" name="country"
                    placeholder="Enter your country">
                </div>

                <div class="form-group col-sm-6 flex-column d-flex pt-2 pt-md-0">
                  <label class="form-control-label font-condense">Starting date
                  <div class="calendar position-relative">
                    <input type="text" id="startDate" class="ps-2 font-condense w-100" name="startDate">
                    <i class="far fa-calendar-alt position-absolute"></i>
                  </div></label>
                </div>

              </div>
              <div class="row justify-content-between text-left pt-2">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-control-label font-condense">Additional notes or requests <span
                      class="fst-italic">(optional)</span> </label>
                  <textarea id="comment" name="comment"> </textarea>
                </div>
              </div>
              <div class="row justify-content-center">
                <a class="btn rounded-pill text-center my-4 book-now">SEND</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
