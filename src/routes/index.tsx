import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="order" element={<OrderPage />} />
    </Routes>
  );
};
