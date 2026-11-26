# MVP 4 — Analítica, tracking y observabilidad

Documento de visión, alcance y requisitos. Fecha: 2026-11-26.

---

## Resumen ejecutivo

El MVP 4 incorpora medición de producto y observabilidad de extremo a extremo en FestanovaCo.

Su objetivo es responder con datos confiables:

- ¿Cuántas personas recibieron y abrieron una invitación?
- ¿En qué parte del flujo abandonaron?
- ¿Cuántas aceptaron o rechazaron?
- ¿Qué dispositivos y navegadores utilizan?
- ¿Cuánto tarda en cargar cada modelo?
- ¿Qué errores encontraron?
- ¿Falló el frontend, el API o un servicio externo?
- ¿Cuánto duró una interrupción?
- ¿Qué despliegue introdujo una regresión?
- ¿Qué modelos y categorías convierten mejor?

El MVP no consiste en instalar una sola herramienta. Define un sistema de medición compuesto por:

1. analítica de producto;
2. rendimiento web;
3. errores de frontend y backend;
4. logs estructurados;
5. trazas distribuidas;
6. métricas técnicas;
7. monitoreo de disponibilidad;
8. dashboards y alertas;
9. privacidad, consentimiento y retención;
10. validación automática de la instrumentación.

---

## Punto de partida

El análisis de `wedding-model-01` dejó varias limitaciones:

- no existía analítica de navegación;
- no había eventos personalizados;
- no se registraba la elección de música;
- no podía reconstruirse el embudo de RSVP;
- no había monitoreo documentado de disponibilidad;
- no se encontró registro centralizado de errores del navegador;
- las llamadas de invitación estaban configuradas en modo mock;
- el estado mock vivía únicamente en memoria del navegador;
- los datos históricos de julio a septiembre no pueden reconstruirse con certeza.

El inventario detallado está en [Métricas de model-01](./metricas-invitacion-model-01.md).

La lección principal es:

> La observabilidad debe diseñarse antes de publicar, no después de que termine el evento.

---

## Objetivos

### Objetivo principal

Poder seguir el recorrido completo de una invitación y diagnosticar cualquier problema sin exponer datos personales.

### Objetivos específicos

- Medir el embudo desde el enlace hasta el RSVP.
- Conocer rendimiento por modelo, ruta y dispositivo.
- Detectar errores automáticamente.
- Correlacionar frontend, shell, API y backend.
- Medir disponibilidad desde fuera de Vercel.
- Relacionar errores y degradaciones con despliegues.
- Crear alertas accionables.
- Conservar evidencia para informes de cada evento.
- Evitar que mocks se publiquen en producción.
- Proteger tokens e información de invitados.

---

## Preguntas que el sistema debe responder

### Producto

- ¿Cuántas invitaciones fueron creadas?
- ¿Cuántos enlaces se entregaron?
- ¿Cuántas invitaciones únicas fueron abiertas?
- ¿Cuántas personas llegaron al RSVP?
- ¿Cuántas aceptaron, rechazaron o siguen pendientes?
- ¿Cuántos acompañantes fueron registrados?
- ¿Cuánto tiempo transcurrió entre primera apertura y respuesta?
- ¿Qué secciones reciben mayor interacción?
- ¿Qué modelo presenta mayor conversión?
- ¿Qué categoría genera más solicitudes?

### Experiencia

- ¿Cuántas personas continúan con o sin música?
- ¿Cuántas abren mapas, calendario, galería o información de regalos?
- ¿En qué paso abandonan el modal de RSVP?
- ¿Qué errores de validación son frecuentes?
- ¿La pantalla expirada se muestra correctamente?
- ¿Qué porcentaje usa móvil?

### Rendimiento

- ¿Cuánto tarda en aparecer el contenido principal?
- ¿La página responde rápidamente al primer clic?
- ¿La interfaz cambia de posición durante la carga?
- ¿Qué modelo consume más recursos?
- ¿Qué imágenes o audios ralentizan la experiencia?
- ¿El API responde dentro del objetivo?

### Operación

- ¿La plataforma está disponible?
- ¿Existe un aumento de errores?
- ¿Qué endpoint está fallando?
- ¿Qué despliegue introdujo el problema?
- ¿Qué evento o modelo está afectado?
- ¿Quién recibió la alerta?
- ¿Cuánto tiempo tardó la recuperación?

---

## Principios

### 1. No registrar información personal

No enviar a herramientas de analítica:

- nombres;
- teléfonos;
- correos;
- direcciones;
- nombres de acompañantes;
- textos privados;
- cuentas bancarias;
- fotografías;
- token de invitación.

### 2. Usar identificadores seudónimos

Los eventos pueden incluir:

- `event_id`;
- `invitation_id_hash`;
- `model_id`;
- `category`;
- `session_id`;
- `release`;
- `environment`.

El hash debe generarse en servidor con una clave privada. No debe ser un hash simple y reversible por diccionario.

### 3. Separar hechos de métricas

- La base de datos es la fuente de verdad de RSVP.
- La analítica mide comportamiento agregado.
- Los logs explican sucesos técnicos.
- Las trazas conectan servicios.
- El monitor externo comprueba disponibilidad.

### 4. Medir sin romper el producto

Una caída de analítica nunca debe impedir:

- abrir una invitación;
- consultar datos;
- aceptar o rechazar;
- utilizar mapas o calendario.

### 5. Instrumentación versionada

Cada evento debe tener:

- nombre estable;
- versión;
- descripción;
- propiedades permitidas;
- responsable;
- fecha de incorporación.

---

## Arquitectura propuesta

### Capas

**Sitio comercial Next.js**

- analítica de navegación y conversión;
- Web Vitals;
- errores de cliente y servidor;
- trazas de requests;
- relación catálogo → demo → contacto.

**Invitaciones Angular**

- apertura;
- experiencia de bienvenida;
- interacción por secciones;
- flujo de RSVP;
- Web Vitals;
- errores del navegador;
- versión y modelo.

**Panel administrativo**

- acciones operativas;
- errores;
- latencia;
- trazas;
- auditoría de publicación y cambios.

**Backend/API**

- logs estructurados;
- métricas RED;
- trazas distribuidas;
- auditoría;
- fuente de verdad de eventos, invitaciones y RSVP.

**Monitor externo**

- disponibilidad;
- latencia desde fuera de la infraestructura;
- certificado TLS;
- rutas públicas y endpoint de salud.

### Flujo de correlación

```text
Navegador
  -> genera session_id
  -> envía request con traceparent/request_id
  -> shell o invitación
  -> API
  -> base de datos / almacenamiento
  -> logs, métricas y trazas comparten trace_id
```

Una investigación debe poder comenzar con un error del navegador y llegar al request del API correspondiente.

---

## Componentes recomendados

Las herramientas son reemplazables. El contrato de eventos y la estrategia de observabilidad no deben depender de un proveedor.

### Analítica de producto

Opción recomendada: **PostHog**.

Alternativas:

- Amplitude;
- Mixpanel;
- Plausible para analítica básica;
- Vercel Web Analytics para tráfico agregado.

PostHog encaja porque permite:

- eventos personalizados;
- embudos;
- retención;
- dashboards;
- feature flags;
- grabaciones de sesión con privacidad configurada.

Las grabaciones deben permanecer desactivadas inicialmente o aplicar enmascarado total de textos y campos.

### Rendimiento

- Vercel Speed Insights para el shell;
- medición de Web Vitals en Angular;
- Resource Timing para recursos pesados;
- métricas del API.

### Errores

Opción recomendada: **Sentry** en:

- `festanovaco-web`;
- `wedding-model-*`;
- `admin-festanovaco`;
- backend.

Debe incluir:

- source maps privados;
- release asociada al commit;
- entorno;
- breadcrumbs sin información sensible;
- alertas por regresión;
- muestreo controlado.

### Logs, métricas y trazas

Estándar recomendado: **OpenTelemetry**.

Destino posible:

- Grafana Cloud;
- Datadog;
- Honeycomb;
- New Relic;
- proveedor compatible con OTLP.

El panel ya contiene una integración inicial de OpenTelemetry; debe alinearse con el resto de la plataforma.

### Disponibilidad

Opción recomendada:

- Better Stack;
- UptimeRobot;
- Grafana Synthetic Monitoring.

Debe ejecutarse fuera de Vercel.

---

## Taxonomía de eventos

### Convención de nombres

Formato:

```text
dominio_entidad_accion
```

Ejemplos:

- `invitation_page_viewed`;
- `rsvp_modal_opened`;
- `rsvp_response_submitted`;
- `catalog_template_viewed`.

Usar pasado para acciones completadas.

### Propiedades comunes

Todos los eventos deben incluir cuando aplique:

| Propiedad | Descripción |
|---|---|
| `event_version` | Versión del contrato |
| `occurred_at` | Fecha ISO 8601 |
| `environment` | `production`, `preview` o `development` |
| `release` | SHA o versión desplegada |
| `session_id` | Sesión seudónima |
| `event_id` | Evento de celebración, sin datos personales |
| `invitation_id_hash` | Invitación seudónima |
| `model_id` | `wedding-model-01`, etc. |
| `category` | `wedding`, `birthday`, etc. |
| `locale` | Idioma |
| `device_type` | móvil, tableta o escritorio |

### Eventos del sitio comercial

| Evento | Momento | Propiedades adicionales |
|---|---|---|
| `marketing_page_viewed` | Carga de una página | `path` |
| `category_selected` | Selección de categoría | `category`, `availability` |
| `catalog_viewed` | Catálogo visible | `category` |
| `catalog_page_changed` | Cambio de página | `page_number` |
| `catalog_template_viewed` | Apertura de ficha | `template_id` |
| `demo_opened` | Apertura de demo | `template_id`, `model_id` |
| `quote_requested` | Contacto iniciado | `channel`, `template_id` |
| `faq_opened` | Expansión de pregunta | `faq_id` |
| `theme_changed` | Cambio claro/oscuro | `theme` |

### Eventos de invitación

| Evento | Momento | Propiedades adicionales |
|---|---|---|
| `invitation_page_viewed` | Primera carga válida | `invitation_status` |
| `invitation_load_succeeded` | Datos disponibles | `duration_ms` |
| `invitation_load_failed` | Fallo al consultar | `error_code`, `http_status` |
| `welcome_modal_viewed` | Bienvenida visible | — |
| `welcome_music_selected` | Elección inicial | `music_enabled` |
| `section_viewed` | Sección visible por primera vez | `section_id` |
| `gallery_opened` | Apertura de galería | — |
| `gallery_image_viewed` | Imagen ampliada | `image_index` |
| `map_opened` | Apertura de ubicación | `location_type`, `provider` |
| `calendar_opened` | Apertura de agenda | `event_part` |
| `gift_information_opened` | Consulta de regalos | `gift_type` |
| `rsvp_guide_viewed` | Guía visible | — |
| `rsvp_modal_opened` | Inicio de confirmación | `invitation_status` |
| `rsvp_step_viewed` | Paso visible | `step` |
| `rsvp_validation_failed` | Error de validación | `field`, `reason` |
| `rsvp_submission_started` | Solicitud enviada | `response_type`, `guest_count` |
| `rsvp_submission_succeeded` | Backend confirma | `response_type`, `guest_count`, `duration_ms` |
| `rsvp_submission_failed` | Backend rechaza/falla | `error_code`, `http_status` |
| `expired_page_viewed` | Página vencida | `previous_status` |
| `invitation_preview_opened` | Modo preview | `source` |

### Eventos administrativos

| Evento | Momento | Propiedades adicionales |
|---|---|---|
| `admin_login_succeeded` | Login válido | — |
| `admin_login_failed` | Login inválido | `reason` |
| `event_created` | Evento persistido | `category` |
| `event_config_saved` | Configuración guardada | `step` |
| `event_assets_uploaded` | Recursos cargados | `asset_type`, `count` |
| `guest_file_uploaded` | Excel procesado | `row_count`, `success_count`, `error_count` |
| `invitation_link_copied` | Copia de enlace | — |
| `guest_csv_exported` | Exportación | `row_count` |
| `event_published` | Publicación | `model_id` |
| `event_deleted` | Eliminación | `category` |

No registrar nombres de archivo originales si contienen información personal.

---

## Embudos

### Embudo comercial

```text
marketing_page_viewed
  -> category_selected
  -> catalog_template_viewed
  -> demo_opened
  -> quote_requested
  -> event_created
  -> event_published
```

### Embudo del invitado

```text
invitation_page_viewed
  -> invitation_load_succeeded
  -> welcome_music_selected
  -> rsvp_modal_opened
  -> rsvp_submission_started
  -> rsvp_submission_succeeded
```

### Segmentos

- modelo;
- categoría;
- evento;
- móvil/escritorio;
- navegador;
- país;
- campaña;
- versión;
- periodo antes/después de recordatorio;
- primera visita/recurrente.

Los reportes deben usar agregados y umbrales mínimos para evitar identificar personas.

---

## Métricas técnicas

### Web Vitals

Objetivos iniciales en percentil 75:

| Métrica | Objetivo |
|---|---|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| TTFB | ≤ 800 ms |

Separar por:

- ruta;
- modelo;
- dispositivo;
- país;
- conexión;
- release.

### API: método RED

Por endpoint medir:

- **Rate:** solicitudes por minuto;
- **Errors:** porcentaje de errores;
- **Duration:** p50, p75, p95 y p99.

Endpoints críticos:

```text
GET  /v1/invitation/info/:token
POST /v1/invitation/accept/:token
GET  /v1/invitation/decline/:token
POST /v1/event/create
POST /v1/event-config/:type/:id
POST /v1/invitation/:eventId/upload
```

Las métricas no deben incluir el token como etiqueta, porque generaría alta cardinalidad y filtraría secretos.

### Recursos

- tamaño total de JavaScript;
- tamaño de imágenes;
- audio transferido;
- tiempo de carga de imagen principal;
- fallos de CDN;
- tasa de caché;
- requests por página.

---

## Logs estructurados

Formato JSON recomendado:

```json
{
  "timestamp": "2026-11-26T14:00:00.000Z",
  "level": "info",
  "service": "invitation-api",
  "environment": "production",
  "release": "git-sha",
  "message": "RSVP accepted",
  "request_id": "req_...",
  "trace_id": "...",
  "event_id": "evt_...",
  "invitation_id_hash": "...",
  "route": "/v1/invitation/accept/:token",
  "status_code": 200,
  "duration_ms": 184
}
```

### Niveles

- `debug`: diagnóstico temporal, desactivado normalmente en producción;
- `info`: operación completada;
- `warn`: condición recuperable;
- `error`: operación fallida;
- `fatal`: servicio no operativo.

### Prohibido en logs

- tokens;
- cabecera `Authorization`;
- cookies;
- contraseñas;
- nombres;
- correos;
- teléfonos;
- cuerpos completos de RSVP;
- URLs con query sensible.

Las URLs deben normalizarse:

```text
/v1/invitation/info/:token
```

---

## Trazas distribuidas

### Servicios

- shell Next.js;
- invitación Angular;
- panel Next.js;
- API;
- base de datos;
- almacenamiento de archivos;
- proveedor de correo o mensajería;
- proveedor de IA en MVP 3.

### Spans importantes

- carga de invitación;
- consulta por token;
- aceptación/rechazo;
- creación de evento;
- configuración;
- carga de recursos;
- importación Excel;
- publicación;
- generación por IA.

### Muestreo

- 100 % de errores;
- porcentaje configurable de solicitudes exitosas;
- mayor muestreo en endpoints críticos;
- reducción automática en picos.

---

## Disponibilidad

### Monitores

| Monitor | Frecuencia | Resultado esperado |
|---|---|---|
| `https://festanovaco.com/` | 1 min | HTTP 200 |
| `/wedding` | 1 min | HTTP 200 + texto esperado |
| `/invitations-wedding-model-01?preview=1` | 1–5 min | HTTP 200 + contenido esperado |
| `https://admin.festanovaco.com/es/auth/login` | 1 min | HTTP 200 |
| `/health` del API | 1 min | HTTP 200 + dependencias básicas |
| endpoint sintético de invitación | 5 min | consulta con token de monitoreo |

No utilizar tokens reales de invitados. Crear una invitación sintética exclusiva para monitoreo.

### Objetivos iniciales

- disponibilidad mensual: 99.9 %;
- API p95: menos de 500 ms;
- carga de invitación p75: menos de 2.5 s;
- detección de caída: menos de 2 minutos;
- notificación: menos de 5 minutos.

---

## Alertas

### Críticas

- sitio o API sin respuesta durante dos comprobaciones;
- tasa de errores 5xx superior al 5 % durante 5 minutos;
- RSVP con errores superior al 2 % durante 10 minutos;
- fallo de base de datos;
- fallo de carga de invitaciones para múltiples eventos;
- mocks habilitados en producción.

### Advertencias

- API p95 superior a 800 ms;
- LCP p75 superior a 3 s;
- aumento de errores JavaScript;
- archivos o imágenes con fallos;
- caída de conversión de RSVP;
- certificado próximo a vencer.

### Información incluida

Cada alerta debe indicar:

- servicio;
- entorno;
- release;
- periodo;
- métrica;
- dashboard;
- trazas o logs relacionados;
- responsable;
- procedimiento de respuesta.

---

## Dashboards

### 1. Producto

- invitaciones creadas;
- invitaciones abiertas;
- tasa de apertura;
- aceptación, rechazo y pendientes;
- acompañantes;
- tiempo hasta respuesta;
- conversión por modelo;
- conversión por dispositivo.

### 2. Experiencia

- elección de música;
- secciones visitadas;
- mapas y calendario;
- galería;
- embudo de RSVP;
- errores de validación;
- abandono por paso.

### 3. Rendimiento

- LCP, INP, CLS y TTFB;
- tamaño de recursos;
- latencia del API;
- rutas lentas;
- comparación por release.

### 4. Operación

- disponibilidad;
- errores 4xx y 5xx;
- solicitudes por minuto;
- endpoints lentos;
- errores por servicio;
- estado de despliegues.

### 5. MVP 3 / IA

- generaciones;
- validez de salida;
- latencia;
- costo;
- regeneraciones;
- aprobación;
- errores por proveedor.

---

## Privacidad y consentimiento

### Clasificación

**Necesario**

- seguridad;
- prevención de fraude;
- errores críticos;
- disponibilidad.

**Analítica**

- comportamiento;
- embudos;
- rendimiento real;
- grabaciones de sesión.

Se debe definir si la jurisdicción y el uso requieren consentimiento previo para analítica no esencial.

### Reglas

- política de privacidad actualizada;
- consentimiento cuando corresponda;
- opción de retirar consentimiento;
- anonimización o seudonimización;
- retención definida por tipo de dato;
- acceso restringido por rol;
- auditoría de exportaciones;
- procedimiento de eliminación;
- contratos con proveedores.

### Retención inicial propuesta

| Dato | Retención |
|---|---|
| Analítica agregada | 13 meses |
| Eventos detallados | 90 días |
| Logs de aplicación | 30 días |
| Trazas | 14–30 días |
| Errores | 90 días |
| Incidentes | Permanente mientras sean relevantes |
| Auditoría administrativa | Según obligación operativa/legal |

La política definitiva debe validarse legalmente.

---

## Controles de producción

### Evitar mocks

El build de producción debe fallar si:

- una flag crítica de API está en modo mock;
- la URL del API es `api.example.com`;
- falta la configuración de errores;
- falta la release;
- se intenta desplegar con entorno de desarrollo.

### Validación de eventos

- esquema tipado;
- propiedades permitidas;
- pruebas unitarias;
- prueba en preview;
- inspector de eventos;
- contrato documentado.

### Separación de entornos

No mezclar:

- development;
- preview;
- production.

Los dashboards de negocio deben incluir solo producción.

---

## Plan de ejecución

### Fase 0 — Contratos y privacidad

- definir objetivos;
- aprobar taxonomía;
- clasificar datos;
- definir consentimiento;
- crear identificadores seudónimos;
- establecer retención;
- asignar responsables.

### Fase 1 — Confiabilidad básica

- eliminar mocks de producción;
- añadir endpoint `/health`;
- activar monitoreo externo;
- integrar reporte de errores;
- asociar releases a commits;
- crear alertas críticas.

### Fase 2 — Rendimiento

- instrumentar Web Vitals;
- medir latencia del API;
- medir recursos;
- establecer presupuestos;
- crear dashboard de rendimiento.

### Fase 3 — Embudo de invitación

- implementar eventos comunes;
- instrumentar bienvenida;
- instrumentar secciones;
- instrumentar RSVP;
- validar que analítica y base de datos coincidan.

### Fase 4 — Observabilidad distribuida

- logs JSON;
- `request_id`;
- OpenTelemetry;
- propagación de contexto;
- trazas del API y base de datos;
- dashboard operativo.

### Fase 5 — Analítica comercial y administrativa

- instrumentar catálogo;
- demo y contacto;
- creación y publicación;
- importación de invitados;
- dashboard de conversión.

### Fase 6 — Pruebas y operación

- tests sintéticos;
- simulación de fallos;
- runbooks;
- rotación de responsables;
- revisión mensual de alertas;
- informe por evento.

---

## Historias de usuario

1. Como responsable del producto, quiero conocer la conversión de apertura a RSVP.
2. Como administrador, quiero saber si una invitación está fallando antes de recibir una queja.
3. Como desarrollador, quiero relacionar un error con su request y despliegue.
4. Como diseñador, quiero comparar rendimiento entre modelos.
5. Como anfitrión, quiero recibir un resumen agregado de respuestas.
6. Como responsable de privacidad, quiero impedir el envío de tokens y nombres.
7. Como equipo, quiero saber si los mocks están activos antes de desplegar.

---

## Criterios de aceptación

El MVP 4 se considera funcional cuando:

- producción no puede compilar con mocks;
- existe monitoreo externo del shell, invitación, admin y API;
- errores del frontend y backend llegan a un sistema central;
- cada release está asociada a un commit;
- las rutas críticas tienen métricas RED;
- Web Vitals se miden por modelo y dispositivo;
- el embudo RSVP está instrumentado;
- la respuesta de RSVP de analítica coincide con el backend;
- logs y eventos no contienen tokens ni datos personales;
- existe correlación mediante `trace_id` o `request_id`;
- dashboards de producto y operación están disponibles;
- alertas críticas tienen responsable y procedimiento;
- entornos preview y producción están separados;
- existe una invitación sintética para pruebas;
- se puede generar un informe agregado de un evento.

---

## Informe por evento

Después de cada celebración se debe generar un documento con:

### Alcance

- categoría;
- modelo;
- periodo;
- release;
- fuentes utilizadas.

### Uso

- invitaciones creadas;
- aperturas únicas;
- tasa de apertura;
- aceptación;
- rechazo;
- pendientes;
- acompañantes;
- tiempo de respuesta.

### Experiencia

- dispositivo;
- música;
- secciones;
- mapas;
- calendario;
- embudo RSVP.

### Rendimiento

- Web Vitals;
- latencia del API;
- tamaño de recursos;
- errores.

### Disponibilidad

- uptime;
- incidentes;
- duración;
- causa;
- resolución.

### Aprendizajes

- puntos de abandono;
- errores frecuentes;
- mejoras priorizadas;
- comparación con eventos anteriores.

---

## Riesgos y mitigaciones

### Exceso de eventos

**Riesgo:** datos ruidosos y costos altos.

**Mitigación:** comenzar con el embudo crítico y ampliar únicamente cuando exista una pregunta concreta.

### Fuga de información

**Riesgo:** tokens o datos personales en eventos y logs.

**Mitigación:** lista permitida de propiedades, sanitización, pruebas y revisión.

### Métricas contradictorias

**Riesgo:** analítica y backend muestran cifras diferentes.

**Mitigación:** declarar fuentes de verdad, deduplicar eventos y reconciliar diariamente.

### Alertas excesivas

**Riesgo:** el equipo ignora notificaciones.

**Mitigación:** alertar solo por impacto accionable y revisar falsos positivos.

### Dependencia del proveedor

**Riesgo:** contratos ligados a una herramienta.

**Mitigación:** taxonomía propia y OpenTelemetry.

### Impacto en rendimiento

**Riesgo:** los SDK de analítica empeoran la invitación.

**Mitigación:** carga diferida, presupuestos de JavaScript y muestreo.

---

## Métricas de éxito del MVP 4

- 100 % de releases identificables;
- 100 % de endpoints críticos instrumentados;
- 100 % de errores críticos con contexto;
- 0 tokens o datos personales detectados en telemetría;
- detección de caída en menos de 2 minutos;
- tiempo medio de diagnóstico menor a 30 minutos;
- diferencia menor al 2 % entre RSVP del backend y analítica;
- cobertura del embudo superior al 95 %;
- disponibilidad mensual igual o superior a 99.9 %;
- informe generado para cada evento real.

---

## Relación con los MVP anteriores

### MVP 1

Validó la invitación real, pero dejó poca evidencia histórica de uso.

### MVP 2

Añade múltiples modelos y categorías. El MVP 4 permite compararlos con datos.

### MVP 3

Añade IA. El MVP 4 medirá calidad, costo, latencia y aceptación de las propuestas.

### MVP 4

Convierte el comportamiento y la salud técnica de la plataforma en información observable y accionable.

---

## Fuera de alcance inicial

- data warehouse propio;
- machine learning predictivo;
- atribución publicitaria avanzada;
- perfiles comerciales individuales;
- identificación entre dispositivos;
- reproducción de sesiones sin enmascaramiento;
- monitoreo de infraestructura no utilizada por FestanovaCo;
- automatización de decisiones sensibles.

---

## Próximas decisiones

- Elegir proveedor de analítica de producto.
- Elegir proveedor de errores.
- Elegir backend OTLP.
- Elegir monitor externo.
- Definir responsable de privacidad.
- Confirmar retención.
- Definir presupuesto mensual.
- Identificar repositorio del backend.
- Crear token sintético de monitoreo.
- Definir canal de alertas.
- Acordar SLO y runbooks.
