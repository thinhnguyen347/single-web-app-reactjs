import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import MenuPage from "./MenuPage";

export default function FoodDetails() {
  const [item, setItem] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
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
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col col-md-6 p-5">
              {fetchComplete && (
                <img
                  src={item.img}
                  className="w-100 img-fluid rounded"
                  alt={slug}
                />
              )}
            </div>
            <div className="col col-md-6 p-4">
              <h3 className="fw-bold py-3 text-center">
                {fetchComplete && item.title}
              </h3>
              <h5 className="fw-bold py-2">Nguyên liệu:</h5>
              <p>
                Non sunt labore fugiat nostrud elit non proident est amet
                ullamco nisi magna elit non. Proident elit laborum minim ullamco
                nostrud Lorem culpa officia enim cillum excepteur dolor. Irure
                do ea minim excepteur cillum voluptate ullamco consectetur ad
                occaecat culpa ullamco cupidatat nulla. Minim veniam duis esse
                culpa non nisi et veniam officia ipsum sit cupidatat consequat.
                Adipisicing aute amet ut labore in sit magna sint aliqua eiusmod
                pariatur incididunt. Eiusmod nostrud duis voluptate cupidatat
                labore culpa aute incididunt non.
              </p>
              <h5 className="fw-bold py-2">Nhà cung cấp:</h5>
              <ul>
                <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
                <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
                <li>Ea dolore in deserunt elit&nbsp;deserunt.</li>
              </ul>
              <Link to="/menu">
                <button className="btn btn-primary my-5 d-block mx-auto">
                  Quay lại đặt hàng
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Switch>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
      </Switch>
    </>
  );
}
