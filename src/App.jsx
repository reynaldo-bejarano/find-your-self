import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
import Home from "./routes/Home";
import Login from "./routes/Login";
import RecoverPassword from "./routes/RecoverPassword";
import Register from "./routes/Register";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
