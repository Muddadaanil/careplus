import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h1 className="display-5">404</h1>
        <p className="text-muted">The page you requested does not exist.</p>
        <Link className="btn btn-primary" to="/">
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
