import { useState } from "react";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-md-5">
                <h3>Contact Us</h3>
                <p className="text-muted">Send your query and our support team will get back soon.</p>
                {submitted ? <div className="alert alert-success">Message submitted successfully.</div> : null}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input id="name" type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input id="email" type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea id="message" className="form-control" rows="5" required></textarea>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-md-5">
                <h4>Hospital Information</h4>
                <p className="mb-3 text-muted">Visit our hospital or reach us through phone/email support.</p>
                <p className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>123 Wellness Avenue, New York, NY 10001
                </p>
                <p className="mb-2">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>+1 202-555-0148
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>support@careplus.com
                </p>
                <p className="mb-0">
                  <i className="bi bi-clock-fill me-2 text-primary"></i>Mon-Sun: 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
