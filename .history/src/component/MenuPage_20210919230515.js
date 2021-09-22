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
  addToList,
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
            onClick={(e) => addToList(id, e)}
          >
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
  const [isSearching, setIsSearching] = useState(false);
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [addedList, setAddedList] = useState([]);

  let list = [...products];
  let addedItems = [];

  useEffect(() => {
    if (!isSearching)
      fetch(
        `https://yummy-db.herokuapp.com/products?_page=${currentPage}&_limit=4`
      )
        .then((res) => res.json())
        .then((result) => {
          setProducts(result);
          setIsLoading(false);
        });
  }, [currentPage, isSearching]);

  useEffect(() => {
    fetch(`https://yummy-db.herokuapp.com/products?title_like=${keyword}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setIsLoading(false);
      });
  }, [keyword]);

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
      setInput(search_key);
    }
  }

  function search() {
    if (input !== "") {
      setIsSearching(true);
      setCurrentPage(1);
      setKeyword(input);
    }
  }

  function sort(e) {
    let status = e.target.value;

    if (status === "1") {
      list.sort((p, b) => {
        return p.price - b.price;
      });
      setProducts(list);
    }

    if (status === "2") {
      list.sort((p, b) => {
        return p.price - b.price;
      });
      list.reverse();
      setProducts(list);
    }
  }

  function addToList(id) {
    let index1 = addedItems.findIndex((item) => item.id === id);
    let index2 = list.findIndex((item) => item.id === id);

    if (list[index2].amount > 0) {
      if (index1 >= 0) addedItems[index1].amount += list[index2].amount;
      if (index1 < 0) addedItems.push(list[index2]);
    }

    console.log(addedItems);
    setAddedList(addedItems);
  }

  return (
    <>
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
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-lg-2 gy-2 justify-content-between">
              <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 px-lg-4 text-decoration-none text-dark">
                <div className="d-flex position-relative">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Tìm kiếm"
                    aria-label="Search"
                    onChange={getSearchValue}
                  />
                  <button
                    className="btn btn-outline-success px-5 px-lg-3"
                    onClick={search}
                  >
                    Tìm
                  </button>

                  {isSearching && (
                    <span
                      className="btn text-secondary position-absolute top-100 start-0 text-decoration-underline"
                      onClick={() => {
                        setIsSearching(false);
                        setCurrentPage(1);
                      }}
                    >
                      Reset
                    </span>
                  )}
                </div>
              </div>
              <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 px-lg-4 text-decoration-none text-dark flex-row">
                <label className="m-0 text-end d-block" htmlFor="sort">
                  <span className="pe-2">Sắp xếp:</span>
                  <select
                    id="sort"
                    defaultValue="0"
                    className="py-2 px-3 rounded"
                    onChange={sort}
                  >
                    <option value="0">Mặc định</option>
                    <option value="1">Tăng dần</option>
                    <option value="2">Giảm dần</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="container-fluid pt-2">
            {list.length > 0 ? (
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
                    addToList={addToList}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center h4 fw-bold py-4">
                Không có kết quả phù hợp!
              </p>
            )}
          </div>
          {!isSearching && (
            <div className="container pt-4 pt-lg-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-center">
                  <li className="page-item">
                    <button
                      className="btn page-link text-dark"
                      aria-label="Previous"
                      disabled={currentPage === 1}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <p
                      className={`btn page-link text-dark ${
                        currentPage === 1 && "bg-secondary text-white"
                      }`}
                      onClick={() => setCurrentPage(1)}
                    >
                      1
                    </p>
                  </li>
                  <li className="page-item">
                    <p
                      className={`btn page-link text-dark ${
                        currentPage === 2 && "bg-secondary text-white"
                      }`}
                      onClick={() => setCurrentPage(2)}
                    >
                      2
                    </p>
                  </li>
                  <li className="page-item">
                    <p
                      className={`btn page-link text-dark ${
                        currentPage === 3 && "bg-secondary text-white"
                      }`}
                      onClick={() => setCurrentPage(3)}
                    >
                      3
                    </p>
                  </li>
                  <li className="page-item">
                    <button
                      className="btn page-link text-dark"
                      aria-label="Next"
                      disabled={currentPage === 3}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </section>
      )}

      <img src={headerImg} className="img-fluid" alt="header" />

      <div
        className="alert alert-primary position-fixed bottom-0 left-100"
        role="alert"
      >
        Vui lòng chọn số lượng!
      </div>

      <Switch>
        <Route path="/menu/:slug/:id">
          <FoodDetails />
        </Route>
      </Switch>
    </>
  );
}
