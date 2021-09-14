import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import MenuPage from "./MenuPage";

export default function FoodDetails() {
  const [products, setProducts] = useState([]);
  const [done, setDone] = useState(false);
  let index;
  let { slug } = useParams();
  
  if(done) {index = products.findIndex((item) => item.slug === slug)};


  useEffect(() => {
    fetch("https://yummy-db.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDone(true)
      });
  }, []);

  

  return (
    <>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col col-md-6 p-4">
            <img
              src={products[index].img}
              className="w-100 img-fluid rounded"
              alt={slug}
            /> */}
            {slug}
          </div>
          <div className="col col-md-6 p-4">
            <h3 className="fw-bold py-3 text-center">
              {/* {products[index].title} */}
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
      <Switch>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
      </Switch>
    </>
  );
}
