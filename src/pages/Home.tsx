import React from "react";

const Home: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Maqueta Sangers
      </h2>
      <p className="text-gray-600">
        Esta es una maqueta simple para mostrar al cliente cómo quedaría el sitio desplegado.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-1">Servicio 1</h3>
          <p className="text-sm text-gray-500">Descripción breve del servicio.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-1">Servicio 2</h3>
          <p className="text-sm text-gray-500">Descripción breve del servicio.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold text-lg mb-1">Servicio 3</h3>
          <p className="text-sm text-gray-500">Descripción breve del servicio.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
