import { useState } from "react";
import { formatINR } from "../utils/currency";

function ManageOrdersPage({ orders }) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <section>
      <div>
        <h2 className="mb-4">Manage Orders</h2>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer.name}</td>
                      <td>{order.date}</td>
                      <td>
                        <span className="badge text-bg-secondary">{order.status}</span>
                      </td>
                      <td>{formatINR(order.total)}</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary" onClick={() => setSelectedOrder(order)}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5>Order Details</h5>
                {selectedOrder ? (
                  <>
                    <p className="mb-1">
                      <strong>ID:</strong> {selectedOrder.id}
                    </p>
                    <p className="mb-1">
                      <strong>Customer:</strong> {selectedOrder.customer.name}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {selectedOrder.customer.email}
                    </p>
                    <p className="mb-3">
                      <strong>Phone:</strong> {selectedOrder.customer.phone}
                    </p>
                    <ul className="list-group mb-3">
                      {selectedOrder.items.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                          <span>
                            {item.name} x {item.quantity}
                          </span>
                          <span>{formatINR(item.quantity * item.price)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-0">
                      <strong>Total:</strong> {formatINR(selectedOrder.total)}
                    </p>
                  </>
                ) : (
                  <p className="text-muted mb-0">Select an order to view details.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageOrdersPage;
