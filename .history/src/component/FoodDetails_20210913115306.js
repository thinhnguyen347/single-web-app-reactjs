import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import 
import { PRODUCTS } from "./data-products";

export default function FoodDetails() {
  let { slug } = useParams();
  let index = PRODUCTS.findIndex((item) => item.slug === slug);

  console.log(index);

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col col-md-6 p-4">
          <img
            src={PRODUCTS[index].img}
            className="w-100 img-fluid rounded"
            alt={slug}
          />
        </div>
        <div className="col col-md-6 p-4">
          <h3 className="fw-bold py-3 text-center"> {PRODUCTS[index].title}</h3>

          <h5 className="fw-bold py-2">Nguyên liệu:</h5>
          <ul>
            <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
            <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
            <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
          </ul>
          <h5 className="fw-bold py-2">Nhà cung cấp:</h5>
          <ul>
            <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
            <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
            <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
          </ul>
          <Link to="/menu">
            <button className="btn btn-primary my-4 d-block mx-auto">
              Đặt hàng
            </button>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/menu">
          <MenuPage />
      </Switch>

    </div>
  );
}
