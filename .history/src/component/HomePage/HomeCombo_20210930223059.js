const combo = [
  { id: 30, comboName: "Combo 1", price: 25000, amount: 1 },
  { id: 30, comboName: "Combo 2", price: 25000, amount: 1 },
  { id: 30, comboName: "Combo 3", price: 25000, amount: 1 },
  { id: 30, comboName: "Combo 4", price: 25000, amount: 1 }
];

export default function Combo() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col-12 col-md-6 col-lg-3"></div>
      </div>
    </div>
  );
}
