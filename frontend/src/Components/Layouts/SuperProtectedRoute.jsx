import React from "react";
import { Navigate } from "react-router-dom";

export default function SuperProtectedRoute({ children }) {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
