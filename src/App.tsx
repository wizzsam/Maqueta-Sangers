import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import ServiceProductsPage from "./pages/ServiceProductsPage";
import Contact from "./pages/Contact";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/components/productos/ProductDetail";
import BotonWsp from "./components/common/FloatingWhatsApp";
import ChatBot from "./components/common/FloatingChatAssistant";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contact />} />
        <Route
          path="/servicios/:serviceId/productos"
          element={<ServiceProductsPage />}
        />
        {/* futuras rutas */}
        <Route path="/productos" element={<Productos />} /> 
         <Route path="/productos/:id" element={<ProductDetail />} />
        {/* <Route path="/capacitaciones" element={<Capacitaciones />} /> */}
      </Routes>
      <BotonWsp />
      <ChatBot />
    </MainLayout>
  );
}

export default App;