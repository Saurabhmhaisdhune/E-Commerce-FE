import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Authentication";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
