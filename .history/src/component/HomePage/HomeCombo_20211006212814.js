const combo = [
  {
    id: 30,
    title: "Combo 1",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/0XjsT2X/combo-nem-nuong.webp",
  },
  {
    id: 31,
    title: "Combo 2",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp",
  },
  {
    id: 32,
    title: "Combo 3",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp",
  },
  {
    id: 33,
    title: "Combo 4",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp",
  },
];

export default function Combo() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
        {combo.map(({ id, img }) => (
          <div key={id} className="col-12 col-md-6 col-lg-3">
            <div className="container px-0 border rounded overflow-hidden position-relative">
              <img src={img} className="img-fluid" alt="combo" />
              <div className="tag py-3 bg-danger text-light position-absolute end-50 top-50"></div>
              <div className="tag-text text-light position-absolute start-0 bottom-0">
                <div className>
                  <p className="m-0">MUA</p>
                  <p className="m-0">NGAY</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
