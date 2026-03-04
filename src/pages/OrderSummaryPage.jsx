import { Link } from "react-router-dom";
import { formatINR } from "../utils/currency";

function OrderSummaryPage({ latestOrder, currentUser }) {
  if (!latestOrder) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="alert alert-warning mb-0">
            No recent order found. Please add medicines to cart and place an order.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <div className="d-flex align-items-center gap-2 mb-3 text-success">
              <i className="bi bi-check-circle-fill fs-4"></i>
              <h3 className="mb-0">Order Confirmed</h3>
            </div>
            <p className="text-muted">Thank you. Your order has been placed successfully.</p>
            <hr />
            <div className="row g-4">
              <div className="col-lg-6">
                <h5>Customer Details</h5>
                <p className="mb-1">
                  <strong>Name:</strong> {currentUser?.name ?? latestOrder.customer.name}
                </p>
                <p className="mb-1">
                  <strong>Email:</strong> {currentUser?.email ?? latestOrder.customer.email}
                </p>
                <p className="mb-0">
                  <strong>Phone:</strong> {currentUser?.phone ?? latestOrder.customer.phone}
                </p>
              </div>
              <div className="col-lg-6">
                <h5>Order Info</h5>
                <p className="mb-1">
                  <strong>Order ID:</strong> {latestOrder.id}
                </p>
                <p className="mb-1">
                  <strong>Date:</strong> {latestOrder.date}
                </p>
                <p className="mb-0">
                  <strong>Status:</strong> {latestOrder.status}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h5>Ordered Medicines</h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Medicine</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {latestOrder.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{formatINR(item.price)}</td>
                        <td>{item.quantity}</td>
                        <td>{formatINR(item.quantity * item.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={3}>Total</th>
                      <th>{formatINR(latestOrder.total)}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="d-flex gap-2 mt-3">
              <Link className="btn btn-primary" to="/medicines">
                Continue Shopping
              </Link>
              <Link className="btn btn-outline-primary" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSummaryPage;
