import { useState } from "react";

const EXAMPLES = [
  {
    pregunta: "¿Cuánto sale el plan mayorista con descuento por volumen?",
    respuesta: "Según tu lista de precios, el plan mayorista arranca en $42.000 con descuento del 15% para pedidos mayores a 50 unidades.",
    fuente: "📄 lista-precios-2024.pdf",
    icono: "🏷️",
    label: "Catálogo de precios",
  },
  {
    pregunta: "¿Qué dice el contrato con el proveedor sobre plazos de entrega?",
    respuesta: "Cláusula 4.2: el proveedor tiene un plazo máximo de 5 días hábiles desde la orden. Incumplimiento activa penalidad del 2% por día.",
    fuente: "📄 contrato-proveedor-logistica.pdf",
    icono: "📋",
    label: "Contratos",
  },
  {
    pregunta: "¿Cuál es el procedimiento para dar de baja a un cliente moroso?",
    respuesta: "Manual interno, paso 3: notificación por escrito a los 15 días, suspensión del servicio a los 30 días, derivación a legal a los 60 días.",
    fuente: "📄 manual-operativo.docx",
    icono: "📚",
    label: "Manual interno",
  },
];

export default function RAGSection({ onContact }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = EXAMPLES[activeIdx];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* — Badge + título */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-900 text-xs uppercase tracking-wider font-bold px-4 py-1.5 rounded-full mb-4">
            Nueva funcionalidad
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-800 mb-4 leading-tight">
            Tu empresa ya tiene toda<br className="hidden md:block" /> la información.
            <span className="text-blue-700"> El problema es encontrarla.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            ¿Cuántas veces por semana alguien en tu empresa busca algo que ya está
            escrito en algún lado — y termina preguntándole a otra persona?
          </p>
        </div>

        {/* — Layout principal */}
        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* — Columna izquierda: pain + explicación */}
          <div className="md:col-span-2 flex flex-col gap-6">

            <div className="rounded-3xl border border-slate-100 shadow-sm p-6 bg-slate-50">
              <p className="font-display font-bold text-slate-800 text-lg mb-4">
                El problema que nadie nombra
              </p>
              <ul className="flex flex-col gap-3 text-sm text-slate-600">
                {[
                  "Tu catálogo tiene 300 productos pero nadie sabe los precios de memoria",
                  "El manual interno existe, pero nadie lo lee — y todos preguntán igual",
                  "Revisás un contrato viejo cada vez que necesitás saber algo",
                  "El empleado nuevo tarda semanas en manejarse solo",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="h-5 w-5 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/40 p-6">
              <p className="font-display font-bold text-slate-800 text-lg mb-2">
                La solución
              </p>
              <p className="text-slate-600 text-sm mb-4">
                Subís tus documentos — catálogos, contratos, manuales, planillas — y
                creamos un asistente que los entiende y responde preguntas en segundos.
                Como tener a alguien que leyó todo, siempre disponible.
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  "Funciona con PDFs, Word, Excel, texto",
                  "Responde en WhatsApp, web o chat interno",
                  "Solo responde con lo que vos pusiste — sin inventar",
                  "Cita exactamente de dónde sacó la info",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-slate-700">
                    <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs flex items-center justify-center flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* — Columna derecha: simulador */}
          <div className="md:col-span-3">
            <div className="bg-[#FAF9F5] rounded-[40px] border border-slate-200/50 shadow-inner p-5 md:p-8">

              {/* Selector de ejemplos */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {EXAMPLES.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                      i === activeIdx
                        ? "bg-blue-900 text-white border-blue-900"
                        : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    {ex.icono} {ex.label}
                  </button>
                ))}
              </div>

              {/* Chat simulado */}
              <div className="flex flex-col gap-3">

                {/* Pregunta del usuario */}
                <div className="flex justify-end">
                  <div className="bg-blue-900 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs shadow-sm">
                    {active.pregunta}
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex gap-2 items-center text-xs text-slate-400 pl-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Asistente buscando en tus documentos...
                </div>

                {/* Respuesta del asistente */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-sm flex-shrink-0">
                    🤖
                  </div>
                  <div className="bg-white border border-slate-100 text-slate-700 text-sm rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-sm">
                    <p className="mb-2">{active.respuesta}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 border-t border-slate-100 pt-2 mt-1">
                      <span>Fuente:</span>
                      <span className="font-medium text-blue-700">{active.fuente}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer del simulador */}
              <p className="text-center text-xs text-slate-400 mt-6">
                Esto es una demo. Tu asistente va a responder con <strong>tus documentos reales</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* — Casos de uso */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[
            {
              emoji: "🏪",
              sector: "Comercios y distribuidoras",
              uso: "Catálogo de productos, precios por segmento, stock mínimo, condiciones de venta.",
            },
            {
              emoji: "⚖️",
              sector: "Estudios jurídicos y contables",
              uso: "Consultas sobre contratos existentes, jurisprudencia interna, procedimientos por cliente.",
            },
            {
              emoji: "🏥",
              sector: "Clínicas y consultorios",
              uso: "Protocolos de atención, coberturas por obra social, turnos y preparación de estudios.",
            },
          ].map((caso) => (
            <div
              key={caso.sector}
              className="rounded-2xl bg-[#FAF9F5] border border-slate-200/50 p-5"
            >
              <div className="text-2xl mb-2">{caso.emoji}</div>
              <p className="font-semibold text-slate-800 text-sm mb-1">{caso.sector}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{caso.uso}</p>
            </div>
          ))}
        </div>

        {/* — CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4 text-sm">
            Se arma en 2–4 semanas con los documentos que ya tenés.
          </p>
          <button
            onClick={onContact}
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-md"
          >
            Quiero mi Asistente de Documentos
          </button>
        </div>

      </div>
    </section>
  );
}
