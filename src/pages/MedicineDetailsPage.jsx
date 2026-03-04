import { Link, useParams } from "react-router-dom";
import { formatINR } from "../utils/currency";

function MedicineDetailsPage({ medicines, onAddToCart }) {
  const { id } = useParams();
  const medicine = medicines.find((item) => item.id === Number(id));

  if (!medicine) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="alert alert-danger">Medicine not found.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <img src={medicine.image} alt={medicine.name} className="img-fluid rounded-4 shadow-sm w-100" />
          </div>
          <div className="col-lg-6">
            <span className="badge text-bg-info mb-2">{medicine.category}</span>
            <h2>{medicine.name}</h2>
            <p className="text-muted">{medicine.description}</p>
            <h4 className="text-primary mb-3">{formatINR(medicine.price)}</h4>
            <p className="mb-4">
              <strong>Available Stock:</strong> {medicine.stock}
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-success" onClick={() => onAddToCart(medicine)}>
                <i className="bi bi-cart-plus me-2"></i>Add to Cart
              </button>
              <Link to="/medicines" className="btn btn-outline-primary">
                Back to List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicineDetailsPage;
