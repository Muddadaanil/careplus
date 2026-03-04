import { useMemo, useState } from "react";
import MedicineCard from "../components/MedicineCard";
import { medicineCategories } from "../data/medicines";

function MedicineListPage({ medicines, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const matchesSearch =
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "All" || medicine.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [category, medicines, searchTerm]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <h2 className="mb-1">Medicine List</h2>
            <p className="text-muted mb-0">Search and filter medicines by category.</p>
          </div>
          <span className="badge text-bg-primary px-3 py-2">{filteredMedicines.length} items</span>
        </div>
        <div className="row g-3 mb-4">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select className="form-select" value={category} onChange={(event) => setCategory(event.target.value)}>
              {medicineCategories.map((categoryOption) => (
                <option key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row g-4">
          {filteredMedicines.length ? (
            filteredMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} onAddToCart={onAddToCart} />
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-warning mb-0">No medicines found for this search/filter.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MedicineListPage;
