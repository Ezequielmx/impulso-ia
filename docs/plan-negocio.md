# Impulso IA — Plan de Negocio Inicial

> **Versión:** 0.1 — Mayo 2026  
> **Equipo fundador:** 3 personas  
> **Propuesta:** Soluciones de IA accesibles para pequeñas y medianas empresas

---

## 1. Qué somos

Impulso IA es una consultora técnica que implementa soluciones de inteligencia artificial en pymes que no tienen equipo de tecnología propio. Hacemos lo que las grandes empresas ya tienen, pero adaptado, asequible y con soporte real.

No vendemos "IA genérica". Entregamos herramientas que resuelven un problema concreto del cliente en semanas, no meses.

---

## 2. Propuesta de valor

| Lo que siente la pyme | Lo que nosotros resolvemos |
|---|---|
| "Escuché de IA pero no sé por dónde empezar" | Diagnóstico gratuito + hoja de ruta clara |
| "No tengo presupuesto para un equipo tech" | Soluciones de precio fijo, sin sorpresas |
| "Probé herramientas y no funcionaron" | Implementación a medida + acompañamiento |
| "No confío en que esto dure" | Soporte continuo mensual opcional |

---

## 3. Servicios

### 3.1 Starter — Agente de Atención al Cliente
**Qué es:** Chatbot entrenado con información del negocio (precios, horarios, FAQs, catálogo).  
**Canal:** WhatsApp, web, Instagram DM.  
**Para quién:** Comercios, clínicas, estudios, gimnasios.  
**Precio sugerido:** USD 800–1.500 setup + USD 150/mes mantenimiento.  
**Tiempo de entrega:** 2–3 semanas.

### 3.2 Automatización de Procesos
**Qué es:** Flujos automáticos que eliminan tareas manuales repetitivas (cotizaciones, recordatorios, seguimiento de clientes, reportes).  
**Herramientas:** n8n, Make, Zapier + Claude/GPT API.  
**Para quién:** Inmobiliarias, agencias, empresas de logística.  
**Precio sugerido:** USD 1.000–2.500 setup + USD 200/mes.  
**Tiempo de entrega:** 3–4 semanas.

### 3.3 IA sobre Documentos (RAG)
**Qué es:** El cliente sube sus documentos (manuales, contratos, catálogos) y obtiene un asistente que los responde con precisión.  
**Para quién:** Estudios jurídicos, contables, empresas con mucha documentación interna.  
**Precio sugerido:** USD 2.000–4.000 setup + USD 300/mes.  
**Tiempo de entrega:** 4–6 semanas.

### 3.4 Consultoría IA Express
**Qué es:** 3 horas de análisis + informe con qué automatizar primero y cuánto ahorraría.  
**Para quién:** Empresas que quieren saber por dónde empezar antes de invertir.  
**Precio sugerido:** USD 300 (se descuenta si luego contratan un proyecto).  
**Objetivo:** Generador de leads calificados para los servicios anteriores.

---

## 4. Mercado objetivo inicial

**Foco geográfico:** Argentina (luego LATAM)  
**Tamaño de empresa:** 5–50 empleados, facturación media-alta  
**Sectores prioritarios (mayor dolor + capacidad de pago):**
1. Clínicas / consultorios médicos
2. Inmobiliarias
3. Estudio contables y jurídicos
4. E-commerce / tiendas online
5. Agencias de marketing / publicidad

---

## 5. Estrategia de primeros clientes (90 días)

### Fase 1 — Mes 1: Validar con gente conocida

- **Identificar 3 conocidos** que tengan o gestionen una pyme. Ofrecerles el servicio Starter a precio de costo o gratis a cambio de feedback real y testimonio escrito.
- **Objetivo:** 1 caso de éxito documentado (resultado, tiempo, ahorro).
- **Acción concreta:** Cada integrante del equipo hace una lista de 10 personas que conoce con negocio propio.

### Fase 2 — Mes 2: Primeros clientes pagos con red cercana

- Armar un deck de una página (problema → solución → resultado del caso real → precio → próximo paso).
- Presentar a 20 contactos de segundo grado (amigos de amigos con negocio, grupos de emprendedores, WhatsApp de cámaras locales).
- **Meta:** 2–3 contratos firmados.
- Precio especial "clientes fundadores": 30% descuento a cambio de testimonio y referido.

### Fase 3 — Mes 3: Primeros leads fríos

- LinkedIn: cada fundador publica 2x/semana sobre IA para pymes (casos reales, errores comunes, antes/después).
- Crear perfil de empresa en LinkedIn con contenido educativo.
- Probar 1 campaña pequeña de anuncios en Meta (USD 200–300) segmentada a dueños de negocio en Argentina.
- Objetivos de mes 3: 5+ leads nuevos, 2+ clientes nuevos.

---

## 6. Modelo de negocio

```
Ingresos = Setup (único) + Retención mensual (MRR)
```

**Meta a 6 meses:**
- 8 clientes activos
- Promedio MRR por cliente: USD 200
- MRR total: ~USD 1.600/mes
- Ingresos por nuevos setups: USD 5.000–8.000 acumulado

**Meta a 12 meses:**
- 20 clientes activos
- MRR: ~USD 4.000/mes
- Ingresos anuales totales: ~USD 60.000–80.000

---

## 7. Stack tecnológico

| Componente | Herramienta |
|---|---|
| LLM / Agentes | Claude API (Anthropic), Gemini API (Google) |
| Automatización | n8n (self-hosted), Make |
| Base de datos vectorial | Supabase pgvector, Pinecone |
| Frontend rápido | Next.js / Vercel |
| Chatbot WhatsApp | Twilio / Evolution API |
| Gestión de clientes (CRM) | Notion o HubSpot free |

---

## 8. División de roles iniciales

| Rol | Responsabilidad |
|---|---|
| Ventas & Cuentas | Contacto con clientes, demos, contratos, seguimiento |
| Técnico líder | Arquitectura de soluciones, implementación core |
| Técnico / Ops | Deployment, integraciones, soporte post-entrega |

*(Ajustar según perfil de cada integrante del equipo)*

---

## 9. Lo que hay que tener listo antes del primer cliente

- [ ] Nombre legal / monotributo o facturación definida
- [ ] Cuenta de empresa en LinkedIn
- [ ] Landing page básica (Webia / impulso-ia en construcción — priorizar)
- [ ] Portafolio con el primer caso real
- [ ] Contrato tipo (1 página: alcance, precio, forma de pago, propiedad del código)
- [ ] Cuentas API: Anthropic Claude, Google Gemini, Twilio
- [ ] Demo funcional del chatbot (para mostrar en reuniones)

---

## 10. Métricas a revisar cada 2 semanas

| Métrica | Meta mes 1 | Meta mes 3 |
|---|---|---|
| Reuniones de demo | 5 | 15 |
| Propuestas enviadas | 2 | 8 |
| Clientes cerrados | 1 | 5 |
| MRR | USD 0 | USD 800 |
| Caso de éxito publicado | 1 | 3 |

---

## Próximos pasos inmediatos

1. **Esta semana:** Cada uno hace su lista de 10 pymes conocidas.
2. **Esta semana:** Definir quién hace qué (roles iniciales).
3. **Próxima semana:** Construir el primer demo funcional (chatbot de ejemplo).
4. **Próxima semana:** Elegir el primer "cliente piloto" y acordar los términos.
5. **Mes 1:** Completar el primer caso y documentar el resultado.

---

*Documento vivo — actualizar a medida que validamos supuestos con clientes reales.*
