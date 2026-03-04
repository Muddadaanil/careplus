import { useState } from "react";
import { formatINR } from "../utils/currency";

const emptyForm = {
  name: "",
  category: "Pain Relief",
  price: "",
  stock: "",
  description: "",
  image: "",
};

function ManageMedicinesPage({ medicines, setMedicines }) {
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingId) {
      setMedicines((prev) =>
        prev.map((medicine) =>
          medicine.id === editingId
            ? {
                ...medicine,
                ...formData,
                price: Number(formData.price),
                stock: Number(formData.stock),
              }
            : medicine,
        ),
      );
    } else {
      setMedicines((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...formData,
          price: Number(formData.price),
          stock: Number(formData.stock),
          image:
            formData.image ||
            "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&w=900&q=80",
        },
      ]);
    }
    setFormData(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (medicine) => {
    setEditingId(medicine.id);
    setFormData({
      name: medicine.name,
      category: medicine.category,
      price: medicine.price,
      stock: medicine.stock,
      description: medicine.description,
      image: medicine.image,
    });
  };

  const handleDelete = (id) => {
    setMedicines((prev) => prev.filter((medicine) => medicine.id !== id));
  };

  return (
    <section>
      <div>
        <h2 className="mb-4">Manage Medicines</h2>
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Medicine" : "Add Medicine"}</h5>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Medicine Name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  required
                />
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(event) => setFormData((prev) => ({ ...prev, category: event.target.value }))}
                >
                  <option>Pain Relief</option>
                  <option>Vitamins</option>
                  <option>First Aid</option>
                  <option>Cold & Flu</option>
                </select>
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="Price (INR)"
                  value={formData.price}
                  onChange={(event) => setFormData((prev) => ({ ...prev, price: event.target.value }))}
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={(event) => setFormData((prev) => ({ ...prev, stock: event.target.value }))}
                  required
                />
              </div>
              <div className="col-md-9">
                <input
                  className="form-control"
                  placeholder="Image URL (optional)"
                  value={formData.image}
                  onChange={(event) => setFormData((prev) => ({ ...prev, image: event.target.value }))}
                />
              </div>
              <div className="col-12">
                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Description"
                  value={formData.description}
                  onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
                  required
                ></textarea>
              </div>
              <div className="col-12 d-flex gap-2">
                <button className="btn btn-primary" type="submit">
                  {editingId ? "Update Medicine" : "Add Medicine"}
                </button>
                {editingId ? (
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setFormData(emptyForm);
                    }}
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{medicine.id}</td>
                  <td>{medicine.name}</td>
                  <td>{medicine.category}</td>
                  <td>{formatINR(medicine.price)}</td>
                  <td>{medicine.stock}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(medicine)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(medicine.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ManageMedicinesPage;
