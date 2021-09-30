const combo = [
  { id: 30, comboName: "Combo 1", price: 25000, amount: 1, img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp" },
  { id: 31, comboName: "Combo 2", price: 25000, amount: 1, img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp" },
  { id: 32, comboName: "Combo 3", price: 25000, amount: 1, img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp"  },
  { id: 33, comboName: "Combo 4", price: 25000, amount: 1, img: "https://i.ibb.co/5skXHYS/tra-dao-cam-sa.webp"  }
];

export default function Combo() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {combo.map(({id, img})=> <div key={id} className="col-12 col-md-6 col-lg-3">
            <img src={img} className/>
        </div>)}
      </div>
    </div>
  );
}
