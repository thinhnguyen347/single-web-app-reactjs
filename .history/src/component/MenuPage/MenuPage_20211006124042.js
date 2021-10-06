import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import FoodDetails from "./FoodDetails";
import MenuMainContent from "./MenuMainContent";
import headerImg from "./menu-header.webp";

export default function MenuPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [input, setInput] = useState("");
  const [alertFail, setAlertFail] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [originList, setOriginList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPageBtn, setEndPageBtn] = useState(0);
  const url = "https://yummy-db.herokuapp.com";

  let timer = useRef(),
    addedItems = useRef([]),
    searchResult = useRef();

  let list = [...products];
  const cloneList = products.map((item) => ({ ...item }));

  useEffect(() => {
    if (!isSearching)
      fetch(`${url}/products?_page=${currentPage}&_limit=4`)
        .then((res) => res.json())
        .then((result) => {
          setProducts(result);
          setOriginList(JSON.parse(JSON.stringify(result)));
          setIsLoading(false);
        });
  }, [currentPage, isSearching]);

  useEffect(() => {
    if (isSearching)
      fetch(`${url}/products?title_like=${keyword}`)
        .then((res) => res.json())
        .then((result) => {
          let pages = Math.ceil(result.length / 4);
          searchResult.current = [...result];
          if (searchResult.current.length >= 4) {
            setProducts(searchResult.current.slice(0, 4));
          } else {
            setProducts(searchResult.current);
          }
          setEndPageBtn(pages);
          setIsLoading(false);
        });
  }, [keyword, currentPage, isSearching]);

  function increase(id) {
    let index = list.findIndex((item) => item.id === id);
    list[index].amount = list[index].amount + 1;
    setProducts(list);
  }

  function decrease(id) {
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

    if (status === "0") {
      setProducts([...originList]);
    }
    setOriginList(cloneList);
  }

  function addToList(id) {
    clearTimeout(timer.current);

    let index = list.findIndex((item) => item.id === id);
    let cart_current = JSON.parse(localStorage.getItem("cart"));
    let indexInCart = cart_current.findIndex((item) => item.id === id);
    let indexInAddedList = addedItems.current.findIndex(
      (item) => item.id === id
    );

    console.log("115cart_current", cart_current, indexInCart); // localStorage.setItem("cart","[]")
    if (cart_current.length > 0 && indexInCart < 0 && indexInAddedList < 0) {
      //addedItems.current.push(cart_current[indexInCart]);
      console.log('line120', cart_current[indexInCart])
    }

    if (list[index].amount === 0) {
      setAlertFail(true);
      timer.current = setTimeout(() => setAlertFail(false), 2000);
      return;
    }

    console.log("129addedItems", addedItems.current);

    if (indexInAddedList < 0) {
      addedItems.current.push(list[index]);
      setAlertSuccess(true);
      timer.current = setTimeout(() => setAlertSuccess(false), 2000);
      console.log("case 1");
    }

    // if (addedItems.current.length > 0 && indexInAddedList < 0) {
    //   addedItems.current.push(list[index]);
    //   setAlertSuccess(true);
    //   timer.current = setTimeout(() => setAlertSuccess(false), 2000);
    //   console.log("case 2");
    // }

    if (addedItems.current.length > 0 && indexInAddedList >= 0) {
      addedItems.current[indexInAddedList].amount += list[index].amount;
      setAlertSuccess(true);
      timer.current = setTimeout(() => setAlertSuccess(false), 2000);
      console.log(
        "case 3",
        addedItems.current[indexInAddedList].amount,
        list[index].amount
      );
    }

    localStorage.setItem("cart", JSON.stringify(addedItems.current));
    let temp = [...list]
    console.log(temp)
    //setProducts(temp);
  }

  return (
    <>
      <img src={headerImg} className="img-fluid" alt="header" />
      <section className="px-3 py-5 p-md-5">
        <h2 className="text-center pt-4">TUẦN NÀY CÓ GÌ?</h2>
        <div className="container-fluid pt-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-lg-2 gy-2 justify-content-between">
            <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 ps-lg-4 text-decoration-none text-dark align-self-center">
              <div className="d-flex position-relative">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tìm kiếm"
                  aria-label="Search"
                  onChange={getSearchValue}
                  value={input}
                />
                <button
                  className="btn btn-outline-success px-5 px-lg-3"
                  onClick={search}
                >
                  Tìm
                </button>

                {isSearching && (
                  <span
                    className="btn text-secondary position-absolute top-100 start-0 pt-md-0 text-decoration-underline"
                    onClick={() => {
                      setInput("");
                      setIsLoading(true);
                      setIsSearching(false);
                      setCurrentPage(1);
                      setProducts(list);
                    }}
                  >
                    Reset
                  </span>
                )}
              </div>
            </div>
            <div className="col col-md-6 col-lg-3 col-lg-2 p-1 p-md-2 px-lg-4 ps-lg-0 text-decoration-none text-dark flex-row align-self-center">
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

        {isLoading ? (
          <div className="loadingio-spinner-rolling-ejs4tg3ktq7 mt-0">
            <div className="ldio-i7neyuiwdre d-flex justify-content-center align-self-center">
              <div></div>
            </div>
          </div>
        ) : (
          <div className="container-fluid pt-2">
            {list.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-2">
                {list.map(({ slug, id, img, title, price, amount, unit }) => (
                  <MenuMainContent
                    key={id}
                    id={id}
                    slug={slug}
                    img={img}
                    title={title}
                    price={price}
                    amount={amount}
                    unit={unit}
                    increase={increase}
                    decrease={decrease}
                    addToList={addToList}
                    dispatch={dispatch}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center h4 fw-bold py-4">
                Không có kết quả phù hợp!
              </p>
            )}
          </div>
        )}

        {!isSearching && (
          <div className="container pt-4 pt-lg-3">
            <nav aria-label="Page navigation example">
              <ul className="pagination d-flex justify-content-center">
                <li className="page-item">
                  <button
                    className="btn page-link text-dark"
                    aria-label="Previous"
                    disabled={currentPage === 1}
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage((currentPage) => currentPage - 1);
                        setIsLoading(true);
                      }
                    }}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`btn page-link text-dark ${
                      currentPage === 1 && "bg-secondary text-white"
                    }`}
                    onClick={() => {
                      setCurrentPage(1);
                      setIsLoading(true);
                    }}
                    disabled={currentPage === 1}
                  >
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`btn page-link text-dark ${
                      currentPage === 2 && "bg-secondary text-white"
                    } `}
                    onClick={() => {
                      setCurrentPage(2);
                      setIsLoading(true);
                    }}
                    disabled={currentPage === 2}
                  >
                    2
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`btn page-link text-dark ${
                      currentPage === 3 && "bg-secondary text-white"
                    } `}
                    onClick={() => {
                      setCurrentPage(3);
                      setIsLoading(true);
                    }}
                    disabled={currentPage === 3}
                  >
                    3
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="btn page-link text-dark"
                    aria-label="Next"
                    disabled={currentPage === 3}
                    onClick={() => {
                      if (0 < currentPage < 3) {
                        setCurrentPage((currentPage) => currentPage + 1);
                        setIsLoading(true);
                      }
                    }}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {isSearching && (
          <div className="container pt-4 pt-lg-3">
            <nav aria-label="Page navigation example">
              <ul className="pagination d-flex justify-content-center">
                <li className="page-item">
                  <button
                    className="btn page-link text-dark"
                    aria-label="Previous"
                    disabled={currentPage === 1}
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage((currentPage) => currentPage - 1);
                        setIsLoading(true);
                      }
                    }}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`btn page-link text-dark ${
                      currentPage === 1 && "bg-secondary text-white"
                    }`}
                    onClick={() => {
                      setCurrentPage(1);
                      if (searchResult.current.length >= 4) {
                        setProducts(searchResult.current.slice(0, 4));
                      } else {
                        setProducts(searchResult.current);
                      }
                    }}
                    disabled={currentPage === 1}
                  >
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`btn page-link text-dark ${
                      currentPage === 2 && "bg-secondary text-white"
                    } ${endPageBtn < 2 && "d-none"}`}
                    onClick={() => {
                      setCurrentPage(2);
                      if (searchResult.current.length >= 8) {
                        setProducts(searchResult.current.slice(4, 4));
                      } else {
                        setProducts(searchResult.current.slice(4));
                      }
                    }}
                    disabled={currentPage === 2}
                  >
                    2
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`btn page-link text-dark ${
                      currentPage === 3 && "bg-secondary text-white"
                    } ${endPageBtn < 3 && "d-none"}`}
                    onClick={() => {
                      setCurrentPage(3);
                      setProducts(searchResult.current.slice(8));
                    }}
                    disabled={currentPage === 3}
                  >
                    3
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="btn page-link text-dark"
                    aria-label="Next"
                    disabled={
                      currentPage === 3 || currentPage - endPageBtn === 0
                    }
                    onClick={() => {
                      if (0 < currentPage < 3) {
                        setCurrentPage((currentPage) => currentPage + 1);
                        setIsLoading(true);
                      }
                    }}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </section>

      <div
        className={`alert alert-danger position-fixed bottom-0 end-0 mx-3 mx-md-5 ${
          alertFail && "opacity-100"
        }`}
        role="alert"
      >
        Vui lòng chọn số lượng!
      </div>

      <div
        className={`alert alert-primary position-fixed bottom-0 end-0 mx-3 mx-md-5 ${
          alertSuccess && "opacity-100"
        }`}
        role="alert"
      >
        Thêm vào giỏ thành công!
      </div>

      <Switch>
        <Route path="/menu/:slug/:id">
          <FoodDetails />
        </Route>
      </Switch>
    </>
  );
}
