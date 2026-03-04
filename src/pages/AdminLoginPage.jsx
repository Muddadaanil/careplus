import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setCredentials((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = onLogin(credentials);
    if (!success) {
      setError("Invalid admin credentials. Use admin@careplus.com / Admin@123");
      return;
    }
    navigate("/admin/dashboard");
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-3">Admin Login</h3>
                <p className="text-muted">Access the admin dashboard and management screens.</p>
                {error ? <div className="alert alert-danger">{error}</div> : null}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="adminEmail">
                      Email
                    </label>
                    <input
                      id="adminEmail"
                      type="email"
                      className="form-control"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="adminPassword">
                      Password
                    </label>
                    <input
                      id="adminPassword"
                      type="password"
                      className="form-control"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className="btn btn-primary w-100" type="submit">
                    Login as Admin
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLoginPage;
