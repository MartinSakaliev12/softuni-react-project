import { useContext } from "react";
import { UserContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router";  // Make sure it's "react-router-dom" for React Router v6

export default function GuestGuard() {
  const { accessToken } = useContext(UserContext);
  const isAuthenticated = !!accessToken;

  // If not authenticated, redirect to login
  if (isAuthenticated) {
    return <Navigate to="/catalog" />;
  }

  // If authenticated, render child routes
  return <Outlet />;
}