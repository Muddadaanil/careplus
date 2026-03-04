import { Link } from "react-router-dom";
import MedicineCard from "../components/MedicineCard";
import { servicesData } from "../data/services";

function HomePage({ medicines, onAddToCart }) {
  return (
    <>
      <section className="hero-section text-white">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold">Modern Healthcare for Every Family</h1>
              <p className="lead mb-4">
                CarePlus Medical offers trusted pharmacy products, preventive care guidance, and a patient-first
                experience through a clean digital platform.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-light btn-lg" to="/medicines">
                  Browse Medicines
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/contact">
                  Contact Hospital
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-panel p-4 rounded-4">
                <h5 className="mb-3">Why Choose CarePlus?</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i>Certified medicines and quality assurance
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i>Easy online ordering experience
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill me-2"></i>Responsive support and quick delivery planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Services</h2>
            <p className="text-muted mb-0">Complete healthcare services for your daily medical needs.</p>
          </div>
          <div className="row g-4">
            {servicesData.map((service) => (
              <div key={service.id} className="col-md-4">
                <div className="card border-0 shadow-sm h-100 service-card">
                  <div className="card-body p-4">
                    <i className={`bi ${service.icon} service-icon`}></i>
                    <h5 className="mt-3">{service.title}</h5>
                    <p className="mb-0 text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Featured Medicines</h2>
            <Link className="btn btn-outline-primary" to="/medicines">
              View All
            </Link>
          </div>
          <div className="row g-4">
            {medicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 about-section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <h2>About Our Hospital</h2>
              <p className="mb-2">
                CarePlus Hospital and Medical Store has served communities with reliable treatment, trusted medicines,
                and patient-centered care for over a decade.
              </p>
              <p className="mb-0">
                We combine compassionate staff support and technology-enabled access to improve the healthcare journey
                for individuals and families.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="contact-box p-4 rounded-4">
                <h5>Contact Information</h5>
                <p className="mb-1">
                  <i className="bi bi-geo-alt-fill me-2"></i>123 Wellness Avenue, New York, NY 10001
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone-fill me-2"></i>+1 202-555-0148
                </p>
                <p className="mb-0">
                  <i className="bi bi-envelope-fill me-2"></i>support@careplus.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
