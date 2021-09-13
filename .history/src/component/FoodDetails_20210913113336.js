import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "./data-products";

export default function FoodDetails() {
  let { slug } = useParams();
  let index = PRODUCTS.findIndex((item) => item.slug === slug);

  console.log(index);

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col col-md-6 p-2">Image</div>
        <div className="col col-md-6 p-2">
          <h3 className="fw-bold py-3 text-center">Tên món</h3>

          <h5 className="fw-bold">Nguyên liệu:</h5>
          <p>
            Enim consequat reprehenderit id nostrud excepteur consectetur enim
            esse anim nulla deserunt irure. Cillum exercitation velit aute
            labore proident ipsum sunt adipisicing deserunt fugiat nostrud.
            Occaecat incididunt nostrud velit veniam deserunt deserunt ut culpa
            aliquip cillum id. Ullamco esse cillum ullamco adipisicing nulla
            laboris proident. Cillum pariatur non consequat elit labore aute
            aute laboris sit consectetur exercitation id&nbsp:mollit.
          </p>
          <h5 className="fw-bold">Nhà cung cấp:</h5>
          <ul>
            <li>Ea dolore in deserunt elit deserunt.</li>
            <li>Ea dolore in deserunt elit deserunt.</li>
            <li>Ea dolore in deserunt elit deserunt.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
