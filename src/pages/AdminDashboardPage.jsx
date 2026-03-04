import { Link } from "react-router-dom";

function AdminDashboardPage({ stats }) {
  const cards = [
    {
      label: "Total Medicines",
      value: stats.totalMedicines,
      icon: "bi-capsule-pill",
      trend: "+4 this month",
    },
    { label: "Total Users", value: stats.totalUsers, icon: "bi-people-fill", trend: "+7 this week" },
    { label: "Total Orders", value: stats.totalOrders, icon: "bi-receipt-cutoff", trend: "+12 pending" },
  ];

  const recentActivities = [
    "New medicine entry reviewed by Admin.",
    "2 user accounts registered today.",
    "Order #ORD-003 marked as Confirmed.",
  ];

  return (
    <section>
      <div>
        <div className="admin-dashboard-head p-4 rounded-4 mb-4">
          <h2 className="mb-2">Admin Dashboard</h2>
          <p className="mb-0 text-muted">Track medicines, users, and orders from one control panel.</p>
        </div>

        <div className="row g-4 mb-4">
          {cards.map((card) => (
            <div className="col-md-4" key={card.label}>
              <div className="card border-0 shadow-sm h-100 admin-metric-card">
                <div className="card-body">
                  <i className={`bi ${card.icon} fs-3 text-primary`}></i>
                  <h5 className="mt-3">{card.label}</h5>
                  <h3 className="mb-1">{card.value}</h3>
                  <small className="text-success fw-semibold">{card.trend}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="mb-3">Quick Actions</h5>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/admin/medicines" className="btn btn-outline-primary">
                    Manage Medicines
                  </Link>
                  <Link to="/admin/users" className="btn btn-outline-primary">
                    Manage Users
                  </Link>
                  <Link to="/admin/orders" className="btn btn-outline-primary">
                    Manage Orders
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="mb-3">Recent Activity</h5>
                <ul className="list-group list-group-flush">
                  {recentActivities.map((item) => (
                    <li key={item} className="list-group-item px-0">
                      <i className="bi bi-dot text-primary me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboardPage;
