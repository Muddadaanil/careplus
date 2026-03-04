import { Link } from "react-router-dom";
import { formatINR } from "../utils/currency";

function MedicineCard({ medicine, onAddToCart }) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="card h-100 medicine-card border-0 shadow-sm">
        <img src={medicine.image} className="card-img-top medicine-image" alt={medicine.name} />
        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-info mb-2 align-self-start">{medicine.category}</span>
          <h6 className="card-title">{medicine.name}</h6>
          <p className="card-text text-muted small flex-grow-1">{medicine.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <strong>{formatINR(medicine.price)}</strong>
            <div className="d-flex gap-2">
              <Link to={`/medicines/${medicine.id}`} className="btn btn-outline-primary btn-sm">
                Details
              </Link>
              <button className="btn btn-success btn-sm" onClick={() => onAddToCart(medicine)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineCard;
