import {Link } from "react-router-dom";
import footerLogo from "./footer.png";

export default function Footer() {
  return (<>
  <div className = "newsletter container-fluid">
  <div class="row">
				
				<div class="col-xs-12 col-sm-12 col-md-8">
					<div class="area_newsletter">
						<div class="title_newsletter">
							<h4>Đăng kí nhận tin</h4>
						</div>
						<div class="form_newsletter form_newsletter_customer"> 
							<form accept-charset="UTF-8" action="/account/contact" class="contact-form" method="post">
<input name="form_type" type="hidden" value="customer">
<input name="utf8" type="hidden" value="✓">

							<div class="input-group">
								<input type="hidden" id="newsletter-tags" name="contact[tags]" value="khách hàng tiềm năng, bản tin">     
								<input required="" type="email" id="newsletter-email" value="" placeholder="Nhập email của bạn" name="contact[email]" aria-label="Email Address">
								<button type="submit" class="button dark">Đăng kí</button>
							</div>
								
							
							
							
<input id="a21c139e96fc4ac5a499c4beb2ed5daf" name="g-recaptcha-response" type="hidden" value="03AGdBq256juOmEyyn_ll31cjduhSnRt0VCuJrgRyYeT_HsyM-DxwftyTwmnpl5udZc6PmoruY9hhalV9b6IsfrgA5rOWc4cDtWM9A2dvU1QJQemMzdERepqKAdD4lO4Tq87eCsb5t_sbfFJ9IR2--6rNLsWL7h2QKg-xTuFkonUjWPhTv6cTbWsWjTjyW5IBCJOm75aLK0ozxpfB06bBWziHxxTFhbRzEIOVDPLXVb0N_JE8MbTzpNZzHpJ5aH-7wtQWNKyZAm2-pO7H4YWan4Jm-oTrQMoBSulYDRd8_NZiuKrSzlupby7b0pOYyIad9LZ7_sukPD8Z8Zru3Py0epj8sjD_rUVUvZPD-oJCyuLVhtgnfikp2EVvfPC-sDv2aWul_wNb9VpZBXnBkv4cBPjZX5Q9XL3ysCgehesZ-wlWEJrvUnmKpaxuprLa645EbqWAGvzx5aiQS"><script src="https://www.google.com/recaptcha/api.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-"></script><script>grecaptcha.ready(function() {grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {action: 'submit'}).then(function(token) {document.getElementById('a21c139e96fc4ac5a499c4beb2ed5daf').value = token;});});</script></form>
						</div>
					</div>
				</div>
				

				
				<div class="col-xs-12 col-sm-12 col-md-4">
					<div class="area_phone_contact">
						<p class="number_phone">
							<i class="fa fa-phone "></i>
							<span>Hỗ trợ / Mua hàng:</span>
							<a href="tel:094.959.7887">
								094.959.7887
							</a>
						</p>
					</div>
				</div>
				
			</div>

  </div>
    <footer className="d-flex flex-wrap justify-content-between align-items-center px-2 px-md-5">
      <a
        href="tel:+84984018891"
        className="col-12 col-md-12 col-lg-5 py-2 text-decoration-none text-danger fs-3 text-center text-lg-start border-bottom border-success border-bottom-lg-0"
      >
        Hotline: 0984.018.891
      </a>
      <Link
        to="/"
        className="col-3 col-md-4 col-lg-2 d-flex align-items-center justify-content-start justify-content-md-start justify-content-lg-center mb-3 mb-md-0 me-md-auto py-3"
      >
        <img src={footerLogo} alt="logo" width="100px" />
      </Link>
      <ul className="nav ps-2 col-9 col-sm-6 justify-content-sm-end col-md-8 col-lg-5 flex-column flex-sm-row align-items-end flex-md-row  justify-content-md-end ">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-dark">
            Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link px-2 text-dark">
            Thực đơn
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link px-2 text-dark">
            Liên hệ
          </Link>
        </li>
      </ul>
      <p className="col-12 pt-3 pb-0 text-center fs-6 fw-lighter">
        © 2021 Yummy Co., Ltd.
      </p>
    </footer></>
  );
}
