import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { useGlobalContext } from "./contexts/Global";
import PrivateRoutes from "./router/PrivateRoutes";
import AdminRoutes from "./router/AdminRoutes";

function App() {
  const { isAdmin } = useGlobalContext();

  return (
    <BrowserRouter>
      <Routes>
      {/* Conversar con compañero si se puede poner como rutas privadas/punlicas/admin esto */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route
            path="*"
            element={
            <PrivateRoutes element={<UserRoutes />} />}
          /> */}
          <Route
            path="/admin/*"
            element={isAdmin ? <AdminRoutes /> : <Navigate to='/'/>}
          />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
      <HandlerSesionSwitcher/>
    </BrowserRouter>
  );
}

export default App;


const HandlerSesionSwitcher = () => {
  const { isLoggedIn, isAdmin, login, logout } = useGlobalContext();
  const navigate = useNavigate()

  return (
  <div className="bg-green-600 opacity-1 text-[#000] fixed bottom-0 right-0 z-50 rounded-lg p-2 flex">
    {isLoggedIn ? (
      <div className="flex gap-2">
        {isAdmin ? <p>admin</p> : <p>normal</p>}
        <button onClick={logout}>logout</button>
      </div>
    ) : (
      <div className="flex gap-2">
        <p>no logueado</p>
        <button
          onClick={() => login({ username: 'user123', isAdmin: false })}
        >
          user
        </button>
        <button
          onClick={() => {
            login({ username: 'user123', isAdmin: true })
            navigate('/admin')
          }
          }
        >
          admin
        </button>
      </div>
    )}
  </div>
  )}