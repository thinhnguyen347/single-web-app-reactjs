import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart } from "../../app/cartSlice";
import MenuPage from "./MenuPage";
import RecommendCarousel from "./RecommendCarousel";

export default function FoodDetails() {
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { slug, id } = useParams();

  useEffect(() => {
    fetch(`https://yummy-db.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="loadingio-spinner-rolling-ejs4tg3ktq7">
          <div className="ldio-i7neyuiwdre d-flex justify-content-center">
            <div></div>
          </div>
        </div>
      ) : (
        <div className="container pt-5">
          <div className="row row-cols-1 row-cols-md-2 g-lg-3 g-1">
            <div className="col col-md-5 py-lg-5">
              <img
                src={item.img}
                className="w-100 img-fluid rounded"
                alt={slug}
              />
            </div>
            <div className="col col-md-7 p-4">
              <h3 className="fw-bold py-3 text-center">{item.title}</h3>
              <p className="fst-italic text-end">
                Giá mỗi suất:&nbsp;&nbsp;
                {item.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>

              <h5 className="fw-bold py-2">Nguyên liệu:</h5>
              <p>
                Non sunt labore fugiat nostrud elit non proident est amet
                ullamco nisi magna elit non. Proident elit laborum minim ullamco
                nostrud Lorem culpa officia enim cillum excepteur dolor. Irure
                do ea minim excepteur cillum voluptate ullamco consectetur ad
                occaecat culpa ullamco cupidatat nulla.
              </p>
              <h5 className="fw-bold py-2">Nhà cung cấp:</h5>
              <ul>
                <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
                <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
                <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
              </ul>
              <div className="d-flex justify-content-between justify-content-lg-around">
                <button className="btn btn-warning my-5 d-block">
                  Cho vào giỏ hàng
                </button>
                <Link to="/menu">
                  <button className="btn btn-primary my-5 d-block">
                    Về thực đơn
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <RecommendCarousel />

      <Switch>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
      </Switch>
    </>
  );
}
