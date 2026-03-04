import { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminSidebarLayout from "./components/AdminSidebarLayout";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import { medicinesData } from "./data/medicines";
import { ordersData } from "./data/orders";
import { usersData } from "./data/users";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ManageMedicinesPage from "./pages/ManageMedicinesPage";
import ManageOrdersPage from "./pages/ManageOrdersPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import MedicineDetailsPage from "./pages/MedicineDetailsPage";
import MedicineListPage from "./pages/MedicineListPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";

function App() {
  const [medicines, setMedicines] = useState(medicinesData);
  const [users, setUsers] = useState(usersData);
  const [orders, setOrders] = useState(ordersData);
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [latestOrder, setLatestOrder] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const dashboardStats = useMemo(
    () => ({
      totalMedicines: medicines.length,
      totalUsers: users.length,
      totalOrders: orders.length,
    }),
    [medicines.length, orders.length, users.length],
  );

  const addToCart = (medicine) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === medicine.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevItems, { ...medicine, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const registerUser = (userPayload) => {
    const newUser = {
      id: users.length + 1,
      ...userPayload,
      createdAt: "2026-03-04",
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    return newUser;
  };

  const loginUser = ({ email, password }) => {
    const foundUser = users.find((user) => user.email === email && user.password === password);
    if (!foundUser) {
      return false;
    }
    setCurrentUser(foundUser);
    return true;
  };

  const loginAdmin = ({ email, password }) => {
    const isValid = email === "admin@careplus.com" && password === "Admin@123";
    setIsAdminAuthenticated(isValid);
    return isValid;
  };

  const placeOrder = () => {
    if (!cartItems.length) {
      return null;
    }

    const orderTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderCode = String(orders.length + 1).padStart(3, "0");
    const generatedOrder = {
      id: `ORD-${orderCode}`,
      customer: currentUser
        ? {
            name: currentUser.name,
            email: currentUser.email,
            phone: currentUser.phone,
          }
        : {
            name: "Guest User",
            email: "guest@example.com",
            phone: "+1 000-000-0000",
          },
      date: "2026-03-04",
      status: "Confirmed",
      items: cartItems,
      total: Number(orderTotal.toFixed(2)),
    };

    setOrders((prevOrders) => [...prevOrders, generatedOrder]);
    setLatestOrder(generatedOrder);
    setCartItems([]);
    return generatedOrder;
  };

  return (
    <div className="app-shell">
      <SiteNavbar cartCount={cartItems.length} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage medicines={medicines.slice(0, 4)} onAddToCart={addToCart} />} />
          <Route path="/register" element={<UserRegisterPage onRegister={registerUser} />} />
          <Route path="/login" element={<UserLoginPage onLogin={loginUser} />} />
          <Route
            path="/medicines"
            element={<MedicineListPage medicines={medicines} onAddToCart={addToCart} />}
          />
          <Route
            path="/medicines/:id"
            element={<MedicineDetailsPage medicines={medicines} onAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={updateCartQuantity}
                onRemoveItem={removeFromCart}
                onPlaceOrder={placeOrder}
              />
            }
          />
          <Route
            path="/order-summary"
            element={<OrderSummaryPage latestOrder={latestOrder} currentUser={currentUser} />}
          />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/admin/login" element={<AdminLoginPage onLogin={loginAdmin} />} />
          <Route
            path="/admin/dashboard"
            element={
              isAdminAuthenticated ? (
                <AdminSidebarLayout>
                  <AdminDashboardPage stats={dashboardStats} />
                </AdminSidebarLayout>
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />
          <Route
            path="/admin/medicines"
            element={
              isAdminAuthenticated ? (
                <AdminSidebarLayout>
                  <ManageMedicinesPage medicines={medicines} setMedicines={setMedicines} />
                </AdminSidebarLayout>
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />
          <Route
            path="/admin/users"
            element={
              isAdminAuthenticated ? (
                <AdminSidebarLayout>
                  <ManageUsersPage users={users} />
                </AdminSidebarLayout>
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />
          <Route
            path="/admin/orders"
            element={
              isAdminAuthenticated ? (
                <AdminSidebarLayout>
                  <ManageOrdersPage orders={orders} />
                </AdminSidebarLayout>
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
