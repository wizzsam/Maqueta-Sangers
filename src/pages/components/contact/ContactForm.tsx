import React, { useState, useEffect } from "react";
import type { FormEvent, ChangeEvent } from "react";

// IMPORTA TUS FONDOS
import contactBg1 from "../../../assets/sectores/clinicas.jpg";
import contactBg2 from "../../../assets/sectores/edificio.jpeg";
import contactBg3 from "../../../assets/sectores/restaurantes.jpeg";

const BACKGROUNDS = [contactBg1, contactBg2, contactBg3];

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "Otro",
  message: "",
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Cambiar imagen de fondo cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formValues);
  };

  return (
    <section className="relative px-6 py-12 bg-white overflow-hidden">
      {/* Fondo con imágenes cambiantes */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={BACKGROUNDS[currentBgIndex]}
          alt="Fondo de contacto"
          className="w-full h-full object-cover opacity-30 blur-sm scale-105"
        />
      </div>

      {/* Contenido por encima del fondo */}
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-6">
          Solicita <span className="text-red-500">una Cotización</span>
        </h2>

        <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-6 py-8 md:px-10 md:py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Juan Pérez"
                value={formValues.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
              />
            </div>

            {/* Correo + Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+51 999 999 999"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm
                             focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
                />
              </div>
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Empresa / Institución
              </label>
              <input
                type="text"
                name="company"
                placeholder="Nombre de tu empresa"
                value={formValues.company}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
              />
            </div>

            {/* Servicio de interés */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Servicio de Interés <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formValues.service}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
              >
                <option value="Otro">Otro</option>
                <option value="Fumigación">Fumigación</option>
                <option value="Desratización">Desratización</option>
                <option value="Desinfección">Desinfección</option>
                <option value="Control de insectos">Control de insectos</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Cuéntanos sobre tu necesidad"
                value={formValues.message}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-sm
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 resize-none"
              />
            </div>

            {/* Botón */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full
                           bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold
                           shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                           hover:translate-y-[1px] transition-transform duration-150"
              >
                Enviar Solicitud
                <span className="ml-2 text-base">➜</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;