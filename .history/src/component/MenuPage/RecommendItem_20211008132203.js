import { Link } from "react-router-dom";
export default function RecommendItem({ img, title, price, slug, id, unit }) {
  return (
    <div className="h-100 p-3">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid" alt="yummy-food" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center flex-fill text-dark">
            {title}
          </h5>
          <p className="card-text text-center text-primary fw-bold">
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
            /{unit}
          </p>
          <Link to={`/menu/${slug}/${id}`}>
            <p
              className="btn btn-outline-primary w-100 fw-bold mt-3 my-0"
              onClick={() => window.scroll(0, 0)}
            >
              Xem chi tiết
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
