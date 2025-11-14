import { useState } from "react";
import { X, Bot, Send, ChevronDown } from "lucide-react";
import LogoWsp from "../../assets/logo-wsp.webp";

const WA_PHONE = "51924327569"; // tu número en formato internacional sin '+'

const PREDEFINED_QUESTIONS = [
  "¿Qué producto recomiendan para control de ratas en almacenes?",
  "¿Tienen productos seguros para mascotas y niños?",
  "¿Pueden enviarme la ficha técnica de este producto?",
  "¿Hacen servicio de aplicación además de la venta de productos?",
];

export default function FloatingChatAssistant() {
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (q: string) => {
    const encoded = encodeURIComponent(
      `Hola, tengo esta consulta:\n${q}`
    );
    const url = `https://wa.me/${WA_PHONE}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Widget flotante */}
      <div className="fixed bottom-28 right-6 z-[9999] flex flex-col items-end">
        {/* Caja del chat */}
        {open && (
          <div className="mb-3 w-80 max-w-[90vw] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/40 flex items-center justify-center overflow-hidden">
                  <img
                    src={LogoWsp}
                    alt="Asistente Sangers"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    Asistente Sangers
                  </span>
                  <span className="text-[0.7rem] text-blue-300 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                    En línea
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mensaje de bienvenida */}
            <div className="px-4 pt-3 pb-2 text-xs text-slate-500">
              <p>
                Hola 👋 Soy tu asistente virtual. Elige una pregunta rápida y te
                llevaré a WhatsApp con el mensaje listo para enviarlo.
              </p>
            </div>

            {/* Preguntas sugeridas */}
            <div className="px-3 pb-3 space-y-2 max-h-64 overflow-y-auto">
              {PREDEFINED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuestionClick(q)}
                  className="w-full text-left text-xs bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 flex items-start gap-2 transition"
                >
                  <ChevronDown className="w-3 h-3 mt-0.5 rotate-[-90deg] text-orange-500" />
                  <span className="text-slate-700">{q}</span>
                </button>
              ))}
            </div>

            {/* CTA general */}
            <div className="border-t border-slate-100 px-3 py-3 bg-slate-50/70">
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
                      "Hola, quiero información sobre productos de saneamiento."
                    )}`,
                    "_blank"
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2.5 shadow-md transition"
              >
                <img
                  src={LogoWsp}
                  alt="WhatsApp"
                  className="w-4 h-4 object-contain"
                />
                <span>Hablar ahora por WhatsApp</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Botón flotante principal */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            w-14 h-14 rounded-full 
            bg-blue-500 hover:bg-blue-600 
            text-white flex items-center justify-center 
            shadow-xl transition-all active:scale-95
          "
        >
          <Bot className="w-7 h-7" />
        </button>
      </div>

      {/* animación simple */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
}
