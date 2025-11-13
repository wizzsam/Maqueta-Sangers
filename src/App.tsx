import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* futuras rutas */}
        {/* <Route path="/servicios" element={<Servicios />} /> */}
        {/* <Route path="/productos" element={<Productos />} /> */}
        {/* <Route path="/capacitaciones" element={<Capacitaciones />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;