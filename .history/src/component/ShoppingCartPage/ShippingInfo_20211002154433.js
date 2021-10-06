export default ShippingInfo(moveToPaymentMethod){
    return(
        <>
        <nav aria-label="breadcrumb" className="ms-4 ms-lg-5 py-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-dark text-decoration-none">
                Trang chủ
              </Link>
            </li>
            <li className="breadcrumb-item ">
              <Link to="/menu" className="text-dark text-decoration-none">
                Thực đơn
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Giỏ hàng
            </li>
          </ol>
        </nav>
        <section className="px-3 py-5 mb-5 p-md-3">
          <h2 className="text-center">GIỎ HÀNG</h2>
          {message ? (
            <p className="h6 text-center">
              Hiện có
              <span className="text-danger fw-bold mx-2">{list.length}</span>
              sản phẩm trong giỏ hàng
            </p>
          ) : (
            <p></p>
          )}
          <p className="h6 pb-3 text-center">* * *</p>
          <div className="container pt-5">
            <div className="row g-4">
              <div className="col-12 col-md-8 py-0 ps-md-0">
                {content}
                {list.map(({ id, title, img, price, amount }) => (
                  <MainContent
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    img={img}
                    amount={amount}
                    decrease={decrease}
                    increase={increase}
                    deleteItem={deleteItem}
                    dispatch={dispatch}
                  />
                ))}
                <button
                  className={`btn btn-light text-decoration-underline mt-3 text-end ${
                    hideDeleteAllBtn ? "d-none" : ""
                  } ${addedList.length <= 0 ? "d-none" : ""}`}
                  onClick={deleteAll}
                >
                  Xoá hết
                </button>
                <Link to="/menu">
                  <button
                    className={`btn d-block mx-auto btn btn-primary mt-3 text-end ${
                      hideDeleteAllBtn ? "" : "d-none"
                    }`}
                  >
                    Quay lại mua hàng
                  </button>
                </Link>
              </div>
              <div className="col-12 col-md-4 pe-0">
                <div className="p-4 border rounded">
                  <p className="h4 fw-bold text-center pb-3 border-bottom">
                    Thông tin đơn&nbsp;hàng
                  </p>
                  <div className="mt-5 mb-3 d-flex flex-row flex-wrap justify-content-between align-items-center">
                    <p className="text-start text-secondary mb-0">VAT (10%):</p>
                    <p className="h5 text-end mb-0">
                      {vat.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                  <div className="d-flex flex-row flex-wrap justify-content-between justify-content-md-center justify-content-lg-between align-items-center">
                    <p className="text-start text-secondary mb-0">Tổng tiền:</p>
                    <p className="h3 text-end text-danger ms-2 mb-0">
                      {final_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p className="text-secondary mt-4">
                      *** Phí vận chuyển, mã giảm giá sẽ được tính ở bước
                      kế&nbsp;tiếp
                    </p>
                    <button
                      disabled={hideDeleteAllBtn}
                      className="payment btn btn-warning w-100 fw-bold text-uppercase"
                      onClick={moveToShippingInfo}
                    >
                      Thanh toán
                    </button>
                    <Link to="/menu" className="d-block mx-auto">
                      <button className="btn my-0 pt-3 text-center text-secondary ">
                        <span>
                          <BsArrowReturnRight />
                        </span>&nbsp;
                        Tiếp tục mua hàng
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>)
}