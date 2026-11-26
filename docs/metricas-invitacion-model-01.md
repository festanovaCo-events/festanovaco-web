# Métricas de la invitación model-01 — inventario de datos disponibles

Periodo de interés: **1 de julio de 2026 a 7 de septiembre de 2026** (inicio de uso con invitados reales hasta principios de septiembre).
Fecha de elaboración: 2026-11-26.
Alcance: qué datos pueden obtenerse, de dónde, con qué fiabilidad y qué no puede reconstruirse.

Este documento no contiene tokens, nombres ni contactos de invitados.

---

## 1. Hallazgo crítico: la invitación no consultaba el backend

En `wedding-model-01`, el archivo `src/app/shared/constants/api-mock-flags.ts` tiene activados los tres endpoints en modo mock:

```ts
export const API_MOCK_FLAGS = {
  invitation: {
    getInfo: true,
    accept: true,
    decline: true,
  },
} as const;
```

Cuando una flag es `true`, `InvitationService` (`src/app/shared/services/invitation.service.ts`) devuelve datos de `InvitationMockApiService` y **no realiza ninguna petición HTTP** al API real.

### Historial de las flags (commits verificados)

| Fecha | Commit | Valor de `getInfo` / `accept` / `decline` |
|---|---|---|
| 2026-06-20 | `3c94e9c` | `false` / `false` / `false` |
| 2026-06-27 | `bab0ab0` | `false` / `false` / `false` |
| 2026-07-04 | `1d08b16` | **`true` / `true` / `true`** |
| 2026-07-04 → 2026-09-06 | 27 commits en total | **`true` / `true` / `true`** en todos |
| 2026-10-21 | `33e01a9` | Último cambio al archivo de flags |

Desde el 4 de julio de 2026, todas las versiones revisadas del repositorio usan mocks.

### Consecuencias

1. **El mock guarda el estado solo en memoria del navegador** (`private readonly store = new Map(...)` en `invitation-mock-api.service.ts`). Un refresco o cerrar la pestaña borra la respuesta. No existe persistencia en servidor.
2. **Todos los tokens devuelven el mismo invitado mock** (`Jorge Mestre`, estado `PENDING`, `total_seats: 2`, en `src/app/shared/mocks/invitation.mock.ts`). La invitación pública que consulté el 26 de noviembre de 2026 mostraba el mensaje “Hola, Jorge” y estado “No confirmado”, lo que coincide con esos datos de mock, no con invitados reales.
3. **Las confirmaciones y rechazos de invitados reales no llegaron al backend** si el despliegue de producción se construyó desde este código. Esto debe confirmarse en Vercel, revisando el commit desplegado y las variables de entorno.
4. **El panel `admin-festanovaco` solo puede mostrar RSVP que existan en el backend.** Si las respuestas no se enviaron, no aparecerán ahí.

> Antes de presentar cualquier cifra de RSVP como resultado del MVP 1, hay que confirmar si el despliegue de producción usó estas flags o una versión distinta.

---

## 2. Fuentes de datos y disponibilidad

| # | Fuente | ¿Existe? | Qué aporta | Estado para este periodo | Acción |
|---|---|---|---|---|---|
| 1 | **Vercel Web Analytics** | No integrado en el código revisado | Visitas, páginas, referencias, país, dispositivo | Solo tendría datos si se instaló la analítica en julio–septiembre | Revisar en el panel del proyecto si hay datos. No hay dependencia `@vercel/analytics` en el repositorio. |
| 2 | **Vercel Speed Insights** | No integrado | LCP, INP, CLS, TTFB por ruta (usuarios reales) | Mismo caso que la analítica | Revisar en el panel. No hay `@vercel/speed-insights` en el repositorio. |
| 3 | **Vercel Logs / Observability** | Depende del plan | Código de respuesta y duración de solicitudes en el servidor | Retención limitada; julio probablemente ya no esté disponible | Revisar periodos disponibles en el panel y exportar si existen. |
| 4 | **Vercel Deployments** | Sí (panel) | Fecha, commit y estado de cada despliegue | Disponible si el historial no fue eliminado | Relacionar incidencias con despliegues. |
| 5 | **Historial Git de `wedding-model-01`** | Sí | Cronología de cambios, cambios de flags y configuración | Completo para el periodo (ver sección 4) | Usar como fuente de hitos; no mide tráfico. |
| 6 | **Historial Git de `festanovaco-web`** | Sí | Inicio del shell y rewrites | El primer commit es del 28 de agosto de 2026 | Indica que las rutas `festanovaco.com/invitations-…` no existían antes de esa fecha. |
| 7 | **API / base de datos de invitaciones** | No está en los repositorios revisados | Aperturas, RSVP, acompañantes, fechas de respuesta | Sin datos si las flags estaban en mock | Pedir exportación al responsable del backend. |
| 8 | **Panel `admin-festanovaco`** | Sí, pero solo consulta | Estado, cupos y `responded_at` por invitación | Limitado a lo que exista en el backend | Exportar CSV por evento, si el backend tiene datos. |
| 9 | **Telemetría OpenTelemetry del panel** | Sí en el panel | Trazas de creación de evento (`/v1/traces`) | No cubre la invitación pública | Solo útil para diagnosticar el panel. |
| 10 | **Monitor externo de disponibilidad** | No encontrado | Uptime y tiempos de respuesta desde fuera | No hay evidencia de configuración | Revisar si existió una cuenta en UptimeRobot, Better Stack u otra herramienta. |
| 11 | **Almacenamiento local del navegador** | Sí, solo en cada dispositivo | Clave `confirmation_guide_shown` para la guía RSVP | No se puede consultar de forma centralizada | No es una fuente de análisis. |
| 12 | **Registro de errores en cliente** | No encontrado | Errores JavaScript | Sin evidencia | No hay Sentry ni equivalente. |

---

## 3. Métricas que podrían documentarse

Leyenda de estado: **Disponible**, **Parcial** (depende de una condición), **No disponible** (sin fuente que lo registre).

| Métrica | Definición | Fuente | Estado |
|---|---|---|---|
| Visitas a la invitación | Sesiones con carga de la página | Vercel Web Analytics | Parcial |
| Páginas vistas | Número de vistas de la ruta raíz y `/expired` | Vercel Web Analytics | Parcial |
| Referencias | Origen del tráfico (WhatsApp, navegador, directo) | Vercel Web Analytics | Parcial |
| Dispositivo y país | Tipo de dispositivo y país aproximado | Vercel Web Analytics | Parcial |
| Velocidad de carga por ruta | LCP, INP, CLS y TTFB de usuarios reales | Speed Insights | Parcial |
| Tiempo de respuesta del servidor | Duración de solicitudes HTTP | Logs / Observability | Parcial |
| Disponibilidad | Porcentaje de tiempo accesible | Monitor externo | No disponible |
| Caídas | Incidentes con fecha y duración | Monitor externo o reporte manual | No disponible |
| Despliegues en el periodo | Cambios publicados y fechas | Vercel Deployments y Git | Disponible |
| Invitaciones abiertas con token real | Número de tokens distintos consultados | Backend | No disponible desde el frontend |
| Bienvenida con o sin música | Elección del invitado | Ninguna | No disponible |
| Guía RSVP mostrada | Primera visita a la pantalla de confirmación | `localStorage` local | No disponible centralmente |
| Aceptaciones | Respuestas `ACCEPTED` | Backend / panel | No disponible si se usó mock |
| Rechazos | Respuestas `DECLINED` | Backend / panel | No disponible si se usó mock |
| Acompañantes registrados | Nombres enviados en `accept` | Backend | No disponible si se usó mock |
| Fecha de respuesta | `responded_at` | Backend / panel | No disponible si se usó mock |
| Visitas a `/expired` | Invitaciones vencidas consultadas | Vercel Web Analytics | Parcial |
| Errores de red o JavaScript | Fallos durante la carga o el RSVP | Logs o registro de cliente | No disponible |
| Tiempo hasta responder | Diferencia entre apertura y respuesta | Backend con eventos de apertura | No disponible |
| Comparación móvil / escritorio | Distribución de dispositivos | Vercel Web Analytics | Parcial |

---

## 4. Cronología del repositorio `wedding-model-01`

Fuente: historial Git. Las fechas corresponden a commits, no necesariamente a despliegues.

| Fecha | Commit | Hito |
|---|---|---|
| 2026-06-20 | `3c94e9c` | Flags cambian de `FEATURE_FLAGS` a `API_MOCK_FLAGS`, todas en `false` |
| 2026-06-27 | `bab0ab0` | Documentación del README |
| 2026-07-04 | `1d08b16` | Flags activadas en `true`; servicio mock y actualización de la confirmación |
| 2026-07-04 | `4293aab` | Enlaces de Instagram y hashtag |
| 2026-07-16 | `cf4399b` | Página de invitación expirada |
| 2026-07-23 | `3d46c10` | Gestión y estilos del tema |
| 2026-08-19 | `bcbc912` | Estados de invitación para páginas expiradas |
| 2026-08-28 | `8b9ab19` | Rutas y rutas de activos de invitación |
| 2026-08-28 | `3f13334` | Rewrites de URL para la invitación |
| 2026-08-30 | `973aed7` | Documentación de arquitectura de la plataforma |
| 2026-09-01 | `97a772e` | Selección de modelo y estilos |
| 2026-09-02 | `85beac9` | Integración del modelo 01 con estilos y rutas |
| 2026-09-02 | `539da48` | Manejo de RSVP y estado de la invitación |
| 2026-09-02 | `9908788` | Corrección del cálculo de cupos en pruebas |
| 2026-09-06 | `fea2198` | Actualización de README y configuración de Vercel |
| 2026-09-06 | `95cfc81` | Eliminación de redirecciones antiguas de Vercel |
| 2026-09-12 | — | Fecha de la boda (`weddingDate` en `wedding-info.ts`) |
| 2026-11-20 | — | Fecha límite de confirmación (`deadline` en `wedding-info.ts`) |

Historial del shell `festanovaco-web`: primer commit `b2dfbfd` el 2026-08-28.

---

## 5. Qué no puede reconstruirse

- **Comportamiento de invitados** (clics, tiempo en pantalla, scroll, música): no existe instrumentación de eventos.
- **Respuestas de RSVP**: si las flags estaban en mock, no hay registro en servidor.
- **Tiempos de respuesta reales**: solo se pueden medir con Speed Insights o logs, si estuvieron activos.
- **Caídas**: no hay monitor documentado ni registro de incidentes.
- **Tráfico anterior al 28 de agosto de 2026** en `festanovaco.com`: el shell no existía y las rutas con rewrite no estaban configuradas.

---

## 6. Plan de extracción recomendado

### En Vercel

1. Abrir el proyecto de `wedding-model-01` y revisar **Analytics**, **Speed Insights**, **Logs** y **Deployments** entre el 1 de julio y el 7 de septiembre de 2026.
2. Abrir también el proyecto de `festanovaco-web` y revisar el mismo periodo.
3. Exportar las tablas o capturas disponibles, y anotar si la retención ya no cubre julio.
4. Confirmar qué commit está desplegado en producción.

### En el backend

1. Confirmar si existe el API de `/v1/invitation/*` en producción.
2. Pedir una exportación, sin datos personales, con:
   - tokens hasheados o identificadores internos;
   - estado (`PENDING`, `ACCEPTED`, `DECLINED`);
   - `responded_at`;
   - número de acompañantes;
   - fechas de creación y última actualización.
3. Confirmar si el backend registra consultas por token (`GET /v1/invitation/info/:token`) y desde cuándo.

### Monitoreo

1. Buscar si existió una cuenta en UptimeRobot, Better Stack, Pingdom u otra herramienta.
2. Si no existe historial, registrar en el documento que la disponibilidad no puede verificarse.

---

## 7. Plantilla de resultados

Completar únicamente con datos obtenidos.

### 7.1 Tráfico (Vercel Web Analytics)

| Semana | Visitas | Páginas vistas | Referencias principales | Dispositivo móvil % |
|---|---|---|---|---|
| Pendiente | — | — | — | — |

### 7.2 Velocidad (Speed Insights o logs)

| Ruta | LCP p75 | INP p75 | CLS p75 | TTFB p75 | Muestras |
|---|---|---|---|---|---|
| `/` | Pendiente | Pendiente | Pendiente | Pendiente | — |
| `/expired` | Pendiente | Pendiente | Pendiente | Pendiente | — |

### 7.3 Respuestas (backend)

| Estado | Invitaciones | Acompañantes | Primera respuesta | Última respuesta |
|---|---|---|---|---|
| `ACCEPTED` | Pendiente | Pendiente | Pendiente | Pendiente |
| `DECLINED` | Pendiente | Pendiente | Pendiente | Pendiente |
| `PENDING` | Pendiente | — | — | — |

### 7.4 Disponibilidad

| Fecha | Incidente | Duración | Causa | Fuente |
|---|---|---|---|---|
| Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

---

## 8. Riesgos de interpretación

1. **Mock frente a producción:** cualquier cifra de RSVP debe validarse contra el backend antes de presentarla como resultado real.
2. **Datos incompletos de Vercel:** la ausencia de datos puede deberse a falta de instalación, retención o proyecto distinto, no necesariamente a falta de tráfico.
3. **Dos proyectos:** el tráfico puede estar repartido entre `festanovaco-web` y `wedding-model-01`.
4. **Fechas de commit:** no sustituyen fechas de despliegue.
5. **Privacidad:** el documento final debe usar conteos y fechas agregadas, sin nombres, teléfonos ni tokens.

---

## 9. Fuentes revisadas

- `wedding-model-01/src/app/shared/constants/api-mock-flags.ts`
- `wedding-model-01/src/app/shared/services/invitation.service.ts`
- `wedding-model-01/src/app/shared/mocks/invitation-mock-api.service.ts`
- `wedding-model-01/src/app/shared/mocks/invitation.mock.ts`
- `wedding-model-01/src/app/shared/constants/api-routes.ts`
- `wedding-model-01/src/app/shared/constants/wedding-info.ts`
- `wedding-model-01/scripts/generate-environment.js`
- `wedding-model-01/vercel.json`
- `wedding-model-01/.vercel/project.json`
- `festanovaco-web/.vercel/project.json`
- Historial Git de `wedding-model-01`, `festanovaco-web` y `admin-festanovaco`
