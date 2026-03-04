import { useNavigate } from "react-router-dom";
import { formatINR } from "../utils/currency";

function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onPlaceOrder }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const order = onPlaceOrder();
    if (order) {
      navigate("/order-summary");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">Cart</h2>
        {cartItems.length ? (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div key={item.id} className="d-flex flex-wrap gap-3 align-items-center py-3 border-bottom">
                      <img src={item.image} alt={item.name} width="90" height="70" className="rounded-3 object-fit-cover" />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="mb-0 text-muted small">{formatINR(item.price)} each</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => onUpdateQuantity(item.id, -1)}>
                          -
                        </button>
                        <span className="fw-semibold">{item.quantity}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => onUpdateQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>
                      <div className="fw-semibold">{formatINR(item.quantity * item.price)}</div>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => onRemoveItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5>Order Total</h5>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total</span>
                    <strong>{formatINR(total)}</strong>
                  </div>
                  <button className="btn btn-success w-100" onClick={handleCheckout}>
                    Proceed to Order Summary
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-info mb-0">Your cart is empty. Add medicines to continue.</div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
