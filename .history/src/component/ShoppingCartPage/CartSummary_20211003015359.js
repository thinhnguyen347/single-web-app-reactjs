export default function CartSummary({ title, img, price, amount }) {
  return (
    <div className="container-fluid p-0 mb-3">
      <div className="row row-cols-2 g-3">
        <div className="col-3 px-2">
          <img src={img} alt="added-product" className="img-fluid rounded" />
        </div>
        <div className="col-9 container-fluid position-relative">
          <div className="row row-cols-2">
            <div className="col-6 pe-0">
              <p className="item-name text-center text-lg-start">{title}&nbsp;x ({amount})</p>
            </div>
            <div className="col-3">
              <p className="m-0 text-center">Đơn giá</p>
              <p className=" py-1 py-lg-2 text-center">
                <span className="price">
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </p>
            </div>
            <div className="col-3">
              <p className="m-0 text-center">Thành tiền</p>
              <p className="py-1 py-lg-2 text-center fw-bold">
                <span className="price">
                  {(price * amount).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
