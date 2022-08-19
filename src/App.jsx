import { Routes, Route } from "react-router-dom";
import NoAuth from "./components/auth/NoAuth";
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
      <Route
        path="/login"
        element={
          <NoAuth>
            <Login />
          </NoAuth>
        }
      />
      <Route
        path="/recover-password"
        element={
          <NoAuth>
            <RecoverPassword />
          </NoAuth>
        }
      />
      <Route
        path="/register"
        element={
          <NoAuth>
            <Register />
          </NoAuth>
        }
      />
    </Routes>
  );
}

export default App;
