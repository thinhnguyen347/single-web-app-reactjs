import { Link } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
export default function MainContent({
    slug,
    id,
    img,
    title,
    price,
    amount,
    increase,
    decrease,
    addToList, dispatch
  }) {
    return (
      <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-4 text-decoration-none text-dark">
        <div className="card h-100">
          <Link to={`/menu/${slug}/${id}`}>
            <div className="container-fluid position-relative m-0 p-0 detail">
              <img src={img} className="card-img-top" alt="yummy-food" />
              <p className="position-absolute btn top-50 start-50 translate-middle px-3 rounded-pill text-light bg-dark border-light opacity-0">
                Xem chi tiết
              </p>
            </div>
          </Link>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center flex-fill">{title}</h5>
            <p className="card-text text-center text-primary fw-bold">
              {price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
              /suất
            </p>
  
            <div className="spinbox d-flex flex-row mx-auto">
              <div
                className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-start"
                onClick={(e) => decrease(id, e)}
              >
                <BiMinus />
              </div>
              <div className="d-flex w-100 align-items-center justify-content-center border-top border-bottom border-secondary">
                <span className="p-0 fs-5">{amount}</span>
              </div>
              <div
                className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-end"
                onClick={(e) => increase(id, e)}
              >
                <BiPlus />
              </div>
            </div>
  
            <p
              className="btn btn-warning w-100 fw-bold mt-3 my-0"
              onClick={(e) => {addToList(id, e); dispatch();}}
            >
              Thêm vào giỏ hàng
            </p>
          </div>
        </div>
      </div>
    );
  }