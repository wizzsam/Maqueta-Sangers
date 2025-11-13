import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
        {/* futuras rutas */}
        {/* <Route path="/servicios" element={<Servicios />} /> */}
        {/* <Route path="/productos" element={<Productos />} /> */}
        {/* <Route path="/capacitaciones" element={<Capacitaciones />} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;