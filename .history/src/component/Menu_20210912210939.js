import React, { useState, useParams, useRouteMatch } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { PRODUCTS } from "./data-products";
import { BiPlus, BiMinus } from "react-icons/bi";
import headerImg from "./img/menu-header.webp";

function MainContent({ img, title, price }) {
  return (
    <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3">
      <div className="card h-100">
        {/* <p classname="btn p-3"></p> */}

        <img src={img} className="card-img-top" alt="yummy-food" />
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
            <div className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-start">
              <BiMinus />
            </div>
            <div className="d-flex w-100 align-items-center justify-content-center border-top border-bottom border-secondary">
              <span className="p-0 fs-5">0</span>
            </div>
            <div className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-end">
              <BiPlus />
            </div>
          </div>

          <p className="btn btn-warning w-100 fw-bold mt-3">Đặt ngay</p>
        </div>
      </div>
    </div>
  );
}

export default function MenuLayout() {
  const [products] = useState(PRODUCTS);
  let match = useRouteMatch();

  return (
    <>
      <img src={headerImg} className="img-fluid" alt="header" />
      <div>
        <section className="px-3 py-5 p-md-5">
          <h2 className="text-center pt-4">TUẦN NÀY CÓ GÌ?</h2>
          <div className="container-fluid pt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-2">
              {products.map(({ id, img, title, price }) => (
                <MainContent key={id} img={img} title={title} price={price} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Topics() {
  

  return (
    <div>
      <h2>Topics</h2>

      <ul>
      {products.map(({ id, img, title, price, slug }) => (    
        <li>
          <Link to={`${match.url}/${slug}`}>
          <MainContent key={id} img={img} title={title} price={price} />
          </Link>
        </li>))}
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
