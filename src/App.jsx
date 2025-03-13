import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./components/security/ProtectedRoute";
import PublicRoute from "./components/security/PublicRoute";
import Profile from "./pages/Profile";

const renderRoute = (path, Component, isPrivate = true) => {
  const RouteWrapper = isPrivate ? ProtectedRoute : PublicRoute;
  return (
    <Route
      path={path}
      element={
        <RouteWrapper>
          <Component />
        </RouteWrapper>
      }
    />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {renderRoute("/", Home)}
        {renderRoute("/profile", Profile)}
        {renderRoute("/auth/login", Login, false)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
