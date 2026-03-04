import { NavLink } from "react-router-dom";

function AdminSidebarLayout({ children }) {
  return (
    <section className="py-4 py-lg-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <aside className="card border-0 shadow-sm admin-sidebar">
              <div className="card-body p-3 p-lg-4">
                <h5 className="mb-3">Admin Panel</h5>
                <nav className="nav flex-column gap-2">
                  <NavLink to="/admin/dashboard" className="admin-nav-link">
                    <i className="bi bi-speedometer2 me-2"></i>Dashboard
                  </NavLink>
                  <NavLink to="/admin/medicines" className="admin-nav-link">
                    <i className="bi bi-capsule-pill me-2"></i>Manage Medicines
                  </NavLink>
                  <NavLink to="/admin/users" className="admin-nav-link">
                    <i className="bi bi-people-fill me-2"></i>Manage Users
                  </NavLink>
                  <NavLink to="/admin/orders" className="admin-nav-link">
                    <i className="bi bi-receipt-cutoff me-2"></i>Manage Orders
                  </NavLink>
                </nav>
              </div>
            </aside>
          </div>
          <div className="col-lg-9">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default AdminSidebarLayout;
