import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./components/layout/BaseLayout"
import Home from "./pages/Home"
import Login from "./features/auth/login"
import Register from "./features/auth/register"
import NotFound from "./pages/NotFound"
import DashboardLayout from "./components/layout/DashboardLayout"
import Dashboard from "./pages/backend/Dashboard"
import ProtectedRoute from "./features/auth/ProtectedRoute"
import { useDispatch } from "react-redux"
import { useGetProtectedUserQuery } from "./services/userApi"
import { useEffect } from "react"
import { logout } from "./features/auth/authSlice"
import BranchView from "./pages/backend/branch/BranchView"
import AuthorView from "./pages/backend/author/AuthorView"
import PublisherView from "./pages/backend/publisher/PublisherView"
import CategoryView from "./pages/backend/category/CategoryView"
import ItemView from "./pages/backend/items/ItemView"

function App() {
  const dispatch = useDispatch();

  const { error } = useGetProtectedUserQuery(undefined, {
    skip: !localStorage.getItem("auth"),
  });

  useEffect(() => {
    if (error && error.status === 401) {
      dispatch(logout());
    }
  }, [error, dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />} >
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/branch" element={<BranchView />} />
              <Route path="/author" element={<AuthorView />} />
              <Route path="/publisher" element={<PublisherView />} />
              <Route path="/category" element={<CategoryView />} />
              <Route path="/item" element={<ItemView />} />
            </Route>
          </Route>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
