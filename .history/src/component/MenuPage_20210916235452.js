import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import FoodDetails from "./FoodDetails";
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
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  let list = [...products];

  useEffect(() => {
    fetch("https://yummy-db.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://yummy-db.herokuapp.com/products?title_like=${input}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSearchResult(result);
      });
  }, [input]);

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

  function getSearchValue(e) {
    let search_key = e.target.value;
    if (search_key !== "") {
      setTimeout(() => setInput(search_key), 500);
    } else {
      //setShowAlertModal(true);
      //setShowResultModal(false);
    }
  }

  return (
    <>
      <img src={headerImg} className="img-fluid" alt="header" />
      {isLoading ? (
        <div className="loadingio-spinner-rolling-ejs4tg3ktq7">
          <div className="ldio-i7neyuiwdre d-flex justify-content-center">
            <div></div>
          </div>
        </div>
      ) : (
        <section className="px-3 py-5 p-md-5">
          <h2 className="text-center pt-4">TUẦN NÀY CÓ GÌ?</h2>
          <div className="container-fluid pt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2 justify-content-between">
              <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3 text-decoration-none text-dark">
                <div className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Tìm kiếm"
                    aria-label="Search"
                    onChange={getSearchValue}
                  />
                  <button
                    className="btn btn-outline-success"
                    onClick={getSearchValue}
                  >
                    Tìm
                  </button>
                </div>
              </div>
              <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 p-lg-3 text-decoration-none text-dark flex-row">
                <p className="m-0 text-end"><span className="pe-2">Sắp xếp:</span>       
                <select className="p-2">
                  <option selected value="0">Mặc định</option>
                  <option value="1">Tăng dần</option>
                  <option value="2">Giảm dần</option>
                </select></p>
              </div>
            </div>
          </div>
          
          <div className="container-fluid pt-2">
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
      )}

      <Switch>
        <Route path="/menu/:slug/:id">
          <FoodDetails />
        </Route>
      </Switch>
    </>
  );
}
