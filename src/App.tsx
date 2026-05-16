import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./features/auth/login-page"
import RegisterPage from "./features/auth/register-page"
import ProtectedRoute from "./components/protected-route"
import Me from "./features/users/me/me"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Me />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App