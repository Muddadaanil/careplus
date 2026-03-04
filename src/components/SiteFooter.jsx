import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-4">
            <h5>CarePlus Medical</h5>
            <p className="mb-1">24/7 Healthcare, Trusted Medicines, Better Living.</p>
            <p className="mb-0 small">123 Wellness Avenue, New York, NY 10001</p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/medicines">Medicines</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/admin/login">Admin Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Contact</h6>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>+1 202-555-0148
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>support@careplus.com
            </p>
            <p className="mb-0">
              <i className="bi bi-clock-fill me-2"></i>Open Daily: 8:00 AM - 10:00 PM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
