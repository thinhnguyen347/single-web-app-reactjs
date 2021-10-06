const combo = [
  {
    id: 30,
    title: "Combo 1",
    price: 25000,
    amount: 1,
    img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp",
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
            <div className="container px-0 border rounded overflow-hidden"> 
            <img src={img} className="img-fluid" alt="combo"/>
            <p className="btn btn-warning my-3 d-block mx-3">Thêm vào giỏ</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
