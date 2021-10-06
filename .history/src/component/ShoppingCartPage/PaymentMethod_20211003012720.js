export default function PaymentMethod(){
    return(
        <div class="section">
														<div className="section-header">
															<h2 className="section-title">Thông tin giao hàng</h2>
														</div>
														<div className="section-content section-customer-information no-mb">
															
																<input name="utf8" type="hidden" value="✓"/>
																<div className="inventory_location_data">
																	
																		<input name="customer_shipping_country" type="hidden" value="241"/>
																		<input name="customer_shipping_province" type="hidden" value="41"/>
																		<input name="customer_shipping_district" type="hidden" value=""/>
																		<input name="customer_shipping_ward" type="hidden" value=""/>
																	
																</div>
															
															
																<p className="section-content-text">
																	Bạn đã có tài khoản?
																	<a href="/account/login?urlredirect=%2Fcheckouts%2F76b8c808ae7a4f9ead1d87352f42871c%3Fstep%3D1">Đăng nhập</a>
																</p>
															
															
															<div className="fieldset">
																
																
																	<div className="field   ">
																		<div className="field-input-wrapper">
																			<label className="field-label" for="billing_address_full_name">Họ và tên</label>
																			<input placeholder="Họ và tên" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_full_name" name="billing_address[full_name]" value=""/>
																		</div>																		
																	</div>
																
																
																	
																		<div class="field  field-two-thirds  field-show-floating-label">
																			<div class="field-input-wrapper">
																				<label class="field-label" for="checkout_user_email">Email</label>
																				<input placeholder="Email" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="email" id="checkout_user_email" name="checkout_user[email]" value="ss@gmail.com">
																			</div>
																			
																		</div>
																	
																
																
																	<div class="field field-required field-third  field-show-floating-label">
																		<div class="field-input-wrapper">
																			<label class="field-label" for="billing_address_phone">Số điện thoại</label>
																			<input placeholder="Số điện thoại" autocapitalize="off" spellcheck="false" class="field-input" size="30" maxlength="15" type="tel" id="billing_address_phone" name="billing_address[phone]" value="1235741177">
																		</div>
																		
																	</div>
																
																
															</div>
														</div>
														<div class="section-content">
															<div class="fieldset">
																
																		<form id="form_update_shipping_method" class="field default" accept-charset="UTF-8" method="post">
																			<input name="utf8" type="hidden" value="✓">
																			<div class="content-box mt0">
																						   
																				<div id="form_update_location_customer_shipping" class="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary " for="customer_pick_at_location_false">
																					<input name="utf8" type="hidden" value="✓">
																					<div class="order-checkout__loading--box">
																					<div class="order-checkout__loading--circle"></div>  
																				</div>
																				
																						<div class="field   ">
																							<div class="field-input-wrapper">
																								<label class="field-label" for="billing_address_address1">Địa chỉ</label>
																								<input placeholder="Địa chỉ" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_address1" name="billing_address[address1]" value="">
																							</div>
																							
																						</div>
																				


																					<input name="selected_customer_shipping_country" type="hidden" value="">
																					<input name="selected_customer_shipping_province" type="hidden" value="">
																					<input name="selected_customer_shipping_district" type="hidden" value="">
																					<input name="selected_customer_shipping_ward" type="hidden" value="">
																					
																					<div class="field field-show-floating-label  field-half ">
																						<div class="field-input-wrapper field-input-wrapper-select">
																							<label class="field-label" for="customer_shipping_province"> Tỉnh / thành  </label>
																							<select class="field-input" id="customer_shipping_province" name="customer_shipping_province">
																								<option data-code="null" value="null">
																								
																								Chọn tỉnh / thành </option>
																								
																									
																										
																											<option data-code="HC" value="50">Hồ Chí Minh</option>
																										
																									
																										
																											<option data-code="HI" value="1">Hà Nội</option>
																										
																									
																										
																											<option data-code="DA" value="32">Đà Nẵng</option>
																										
																									
																										
																											<option data-code="AG" value="57">An Giang</option>
																										
																									
																										
																											<option data-code="BV" value="49">Bà Rịa - Vũng Tàu</option>
																										
																									
																										
																											<option data-code="BI" value="47">Bình Dương</option>
																										
																									
																										
																											<option data-code="BP" value="45">Bình Phước</option>
																										
																									
																										
																											<option data-code="BU" value="39">Bình Thuận</option>
																										
																									
																										
																											<option data-code="BD" value="35">Bình Định</option>
																										
																									
																										
																											<option data-code="BL" value="62">Bạc Liêu</option>
																										
																									
																										
																											<option data-code="BG" value="15">Bắc Giang</option>
																										
																									
																										
																											<option data-code="BK" value="4">Bắc Kạn</option>
																										
																									
																										
																											<option data-code="BN" value="18">Bắc Ninh</option>
																										
																									
																										
																											<option data-code="BT" value="53">Bến Tre</option>
																										
																									
																										
																											<option data-code="CB" value="3">Cao Bằng</option>
																										
																									
																										
																											<option data-code="CM" value="63">Cà Mau</option>
																										
																									
																										
																											<option data-code="CN" value="59">Cần Thơ</option>
																										
																									
																										
																											<option data-code="GL" value="41" selected="">Gia Lai</option>
																										
																									
																										
																											<option data-code="HG" value="2">Hà Giang</option>
																										
																									
																										
																											<option data-code="HM" value="23">Hà Nam</option>
																										
																									
																										
																											<option data-code="HT" value="28">Hà Tĩnh</option>
																										
																									
																										
																											<option data-code="HO" value="11">Hòa Bình</option>
																										
																									
																										
																											<option data-code="HY" value="21">Hưng Yên</option>
																										
																									
																										
																											<option data-code="HD" value="19">Hải Dương</option>
																										
																									
																										
																											<option data-code="HP" value="20">Hải Phòng</option>
																										
																									
																										
																											<option data-code="HU" value="60">Hậu Giang</option>
																										
																									
																										
																											<option data-code="KH" value="37">Khánh Hòa</option>
																										
																									
																										
																											<option data-code="KG" value="58">Kiên Giang</option>
																										
																									
																										
																											<option data-code="KT" value="40">Kon Tum</option>
																										
																									
																										
																											<option data-code="LI" value="8">Lai Châu</option>
																										
																									
																										
																											<option data-code="LA" value="51">Long An</option>
																										
																									
																										
																											<option data-code="LO" value="6">Lào Cai</option>
																										
																									
																										
																											<option data-code="LD" value="44">Lâm Đồng</option>
																										
																									
																										
																											<option data-code="LS" value="13">Lạng Sơn</option>
																										
																									
																										
																											<option data-code="ND" value="24">Nam Định</option>
																										
																									
																										
																											<option data-code="NA" value="27">Nghệ An</option>
																										
																									
																										
																											<option data-code="NB" value="25">Ninh Bình</option>
																										
																									
																										
																											<option data-code="NT" value="38">Ninh Thuận</option>
																										
																									
																										
																											<option data-code="PT" value="16">Phú Thọ</option>
																										
																									
																										
																											<option data-code="PY" value="36">Phú Yên</option>
																										
																									
																										
																											<option data-code="QB" value="29">Quảng Bình</option>
																										
																									
																										
																											<option data-code="QM" value="33">Quảng Nam</option>
																										
																									
																										
																											<option data-code="QG" value="34">Quảng Ngãi</option>
																										
																									
																										
																											<option data-code="QN" value="14">Quảng Ninh</option>
																										
																									
																										
																											<option data-code="QT" value="30">Quảng Trị</option>
																										
																									
																										
																											<option data-code="ST" value="61">Sóc Trăng</option>
																										
																									
																										
																											<option data-code="SL" value="9">Sơn La</option>
																										
																									
																										
																											<option data-code="TH" value="26">Thanh Hóa</option>
																										
																									
																										
																											<option data-code="TB" value="22">Thái Bình</option>
																										
																									
																										
																											<option data-code="TY" value="12">Thái Nguyên</option>
																										
																									
																										
																											<option data-code="TT" value="31">Thừa Thiên Huế</option>
																										
																									
																										
																											<option data-code="TG" value="52">Tiền Giang</option>
																										
																									
																										
																											<option data-code="TV" value="54">Trà Vinh</option>
																										
																									
																										
																											<option data-code="TQ" value="5">Tuyên Quang</option>
																										
																									
																										
																											<option data-code="TN" value="46">Tây Ninh</option>
																										
																									
																										
																											<option data-code="VL" value="55">Vĩnh Long</option>
																										
																									
																										
																											<option data-code="VT" value="17">Vĩnh Phúc</option>
																										
																									
																										
																											<option data-code="YB" value="10">Yên Bái</option>
																										
																									
																										
																											<option data-code="DB" value="7">Điện Biên</option>
																										
																									
																										
																											<option data-code="DC" value="42">Đắk Lắk</option>
																										
																									
																										
																											<option data-code="DO" value="43">Đắk Nông</option>
																										
																									
																										
																											<option data-code="DN" value="48">Đồng Nai</option>
																										
																									
																										
																											<option data-code="DT" value="56">Đồng Tháp</option>
																										
																									 
																								  
																							</select>
																						</div>
																						
																						
																					</div>
																					
																						
																							<div class="field field-show-floating-label  field-half ">
																								<div class="field-input-wrapper field-input-wrapper-select">
																									<label class="field-label" for="customer_shipping_district">Quận / huyện</label>
																									<select class="field-input" id="customer_shipping_district" name="customer_shipping_district">
																										<option data-code="null" value="null" selected="">Chọn quận / huyện</option>
																										
																											
																												<option data-code="GL444" value="444">Huyện Ayun Pa</option>
																											
																												<option data-code="GL442" value="442">Huyện Chư Prông</option>
																											
																												<option data-code="GL437" value="437">Huyện Chư Păh</option>
																											
																												<option data-code="GL746" value="746">Huyện Chư Pưh</option>
																											
																												<option data-code="GL443" value="443">Huyện Chư Sê</option>
																											
																												<option data-code="GL438" value="438">Huyện Ia Grai</option>
																											
																												<option data-code="GL748" value="748">Huyện Ia Pa</option>
																											
																												<option data-code="GL435" value="435">Huyện KBang</option>
																											
																												<option data-code="GL445" value="445">Huyện Krông Pa</option>
																											
																												<option data-code="GL440" value="440">Huyện Kông Chro</option>
																											
																												<option data-code="GL436" value="436">Huyện Mang Yang</option>
																											
																												<option data-code="GL747" value="747">Huyện Phú Thiện</option>
																											
																												<option data-code="GL809" value="809">Huyện Đắk Pơ</option>
																											
																												<option data-code="GL745" value="745">Huyện Đắk Đoa</option>
																											
																												<option data-code="GL441" value="441">Huyện Đức Cơ</option>
																											
																												<option data-code="GL434" value="434">Thành phố Pleiku</option>
																											
																												<option data-code="GL439" value="439">Thị xã An Khê</option>
																											
																										
																									</select>
																								</div>
																								
																							</div>
																							
																						
																					
																					<div id="div_location_country_not_vietnam" class="section-customer-information " style="display: none;">
																						<div className="field field-two-thirds">
																							<div className="field-input-wrapper">
																								<label className="field-label" for="billing_address_city">Thành phố</label>
																								<input placeholder="Thành phố" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_city" name="billing_address[city]" value=""/>
																							</div>
																						</div>
																						<div class="field field-third">
																							<div class="field-input-wrapper">
																								<label class="field-label" for="billing_address_zip">Mã bưu chính</label>
																								<input placeholder="Mã bưu chính" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="billing_address_zip" name="billing_address[zip]" value=""/>
																							</div>
																						</div>
																					</div>
																				</div>
																					
																			</div>
																		</form>
																
															</div>
															
														</div>
														<div id="change_pick_location_or_shipping">
															
															
														</div>
													</div>
    )
}