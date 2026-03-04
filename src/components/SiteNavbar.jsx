import { Link, NavLink } from "react-router-dom";

function SiteNavbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-navbar sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="bi bi-heart-pulse-fill fs-4"></i>
          <span>CarePlus Medical</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/medicines">
                Medicines
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                User Login
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink className="dropdown-item" to="/admin/login">
                    Admin Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/admin/dashboard">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-lg-2">
              <NavLink className="btn btn-light btn-sm position-relative px-3 mt-2 mt-lg-0" to="/cart">
                <i className="bi bi-cart3 me-1"></i>
                Cart
                {cartCount > 0 ? <span className="badge text-bg-success cart-badge">{cartCount}</span> : null}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SiteNavbar;
