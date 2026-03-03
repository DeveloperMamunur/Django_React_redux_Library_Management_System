import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./components/layout/BaseLayout"
import Home from "./pages/Home"
import Login from "./features/auth/login"
import Register from "./features/auth/register"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
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
