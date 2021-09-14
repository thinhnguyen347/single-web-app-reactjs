import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route, Link, useParams } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
//import FoodDetails from "./FoodDetails";
import headerImg from "./img/menu-header.webp";

function MainContent({
  slug,
  id,
  img,
  title,
  price,
  amount,
  increase,
  decrease,
}) {
  return (
    <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3 text-decoration-none text-dark">
      <div className="card h-100">
        <Link to={`/menu/${slug}`}>
          <img src={img} className="card-img-top" alt="yummy-food" />
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

          <p className="btn btn-warning w-100 fw-bold mt-3">
            Thêm vào giỏ hàng
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [products, setProducts] = useState([]);

  let list = [...products];

  useEffect(() => {
    fetch("https://yummy-db.herokuapp.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setProducts(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, []);

  function increase(id, e) {
    let index = list.findIndex((item) => item.id === id);
    list[index].amount = list[index].amount + 1;
    setProducts(list);
  }

  function decrease(id, e) {
    let index = list.findIndex((item) => item.id === id);
    if (list[index].amount >= 1) list[index].amount = list[index].amount - 1;
    setProducts(list);
  }

  return (
    <>
      <Switch>
        <Route exact path="/menu">
          <img src={headerImg} className="img-fluid" alt="header" />
          <section className="px-3 py-5 p-md-5">
            <h2 className="text-center pt-4">TUẦN NÀY CÓ GÌ?</h2>
            <div className="container-fluid pt-4">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-2">
                {list.map(({ slug, id, img, title, price, amount }) => (
                  <MainContent
                    key={id}
                    id={id}
                    slug={slug}
                    img={img}
                    title={title}
                    price={price}
                    amount={amount}
                    increase={increase}
                    decrease={decrease}
                  />
                ))}
              </div>
            </div>
          </section>
        </Route>
        <Route path="/menu/:slug">
          <FoodDetails />
        </Route>
      </Switch>
    </>
  );
}

function FoodDetails({}) {
  const [products, setProducts] = useState([]);
  let { slug } = useParams();
  let index = products.findIndex((item) => item.slug === slug);

  let list = [...products];

  useEffect(() => {
    fetch("https://yummy-db.herokuapp.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setProducts(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col col-md-6 p-4">
            <img
              src={list[index].img}
              className="w-100 img-fluid rounded"
              alt={slug}
            /> 
          </div>
          <div className="col col-md-6 p-4">
            <h3 className="fw-bold py-3 text-center">
              {products[index].title}
            </h3>
            <h5 className="fw-bold py-2">Nguyên liệu:</h5>
            <p>
              Non sunt labore fugiat nostrud elit non proident est amet ullamco
              nisi magna elit non. Proident elit laborum minim ullamco nostrud
              Lorem culpa officia enim cillum excepteur dolor. Irure do ea minim
              excepteur cillum voluptate ullamco consectetur ad occaecat culpa
              ullamco cupidatat nulla. Minim veniam duis esse culpa non nisi et
              veniam officia ipsum sit cupidatat consequat. Adipisicing aute
              amet ut labore in sit magna sint aliqua eiusmod pariatur
              incididunt. Eiusmod nostrud duis voluptate cupidatat labore culpa
              aute incididunt non.
            </p>
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
      </div>
    </>
  );
}
