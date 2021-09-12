import React, { useState } from "react";
import { PRODUCTS } from "./component/data-products";

export default function MenuLayout() {
  const [products] = useState(PRODUCTS);

  

  return (
    <div>
      <section className="px-3 py-5 p-md-5">
        <h2 className="text-center pt-4">TUẦN NÀY CÓ GÌ?</h2>
        <div className="container-fluid pt-4">
          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-2"
          >
            <MainContent props={products} />
          </div>
        </div>
      </section>
    </div>
  );
}
