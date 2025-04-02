import { useContext } from "react";
import { UserContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router";  // Make sure it's "react-router-dom" for React Router v6

export default function AuthGuard() {
  const { accessToken } = useContext(UserContext);
  const isAuthenticated = !!accessToken;

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render child routes
  return <Outlet />;
}