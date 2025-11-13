import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import ServiceProductsPage from "./pages/ServiceProductsPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route
          path="/servicios/:serviceId/productos"
          element={<ServiceProductsPage />}
        />
        {/* futuras rutas */}
        {/* <Route path="/productos" element={<Productos />} /> */}
        {/* <Route path="/capacitaciones" element={<Capacitaciones />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;