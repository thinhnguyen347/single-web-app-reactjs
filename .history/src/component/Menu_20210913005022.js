import React, { useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { PRODUCTS } from "./data-products";
import { BiPlus, BiMinus } from "react-icons/bi";
import headerImg from "./img/menu-header.webp";

function MainContent({ id, img, title, price, amount, increase, decrease }) {
  return (
    <div className="card h-100">
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
          <div
            className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-start"
            onClick={(e) => decrease(id, e)}
          >
            <BiMinus />
          </div>
          <div
            className="d-flex w-100 align-items-center justify-content-center border-top border-bottom border-secondary"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="p-0 fs-5">{amount}</span>
          </div>
          <div
            className="d-flex w-100 align-items-center justify-content-center border border-secondary rounded-end"
            onClick={(e) => {
              
              increase(id, e);
            }}
          >
            <BiPlus />
          </div>
        </div>

        <p className="btn btn-warning w-100 fw-bold mt-3">Đặt ngay</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [products, setProducts] = useState(PRODUCTS);

  let list = [...products];

  function increase(id, e) {
    e.stopPropagation();
    let index = list.findIndex((item) => item.id === id);
    list[index].amount = list[index].amount + 1;
    setAddedList(list);
  }

  function decrease(id, e) {
    e.stopPropagation();
    let index = list.findIndex((item) => item.id === id);
    if (list[index].amount >= 2) list[index].amount = list[index].amount - 1;
    setAddedList(list);
  }

  return (
    <>
      <img src={headerImg} className="img-fluid" alt="header" />
      <section className="px-3 py-5 p-md-5">
        <h2 className="text-center pt-4">TUẦN NÀY CÓ GÌ?</h2>
        <div className="container-fluid pt-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-2">
            {list.map(({ id, img, title, price, slug, amount }) => (
              <Link
                to={`/menu/${slug}`}
                key={id}
                className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3 text-decoration-none text-dark"
              >
                <MainContent
                  id={id}
                  img={img}
                  title={title}
                  price={price}
                  amount={amount}
                  increase={increase}
                  decrease={decrease}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Switch>
        <Route path="/menu/:slug">
          <FoodDetails />
        </Route>
      </Switch>
    </>
  );
}

function FoodDetails() {
  let { slug } = useParams();
  console.log(slug);
  return <h3>Requested topic ID: {slug}</h3>;
}
