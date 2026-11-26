# MVP 3 — Personalización de invitaciones asistida por IA

Documento de visión, alcance y validación. Fecha: 2026-11-26.

---

## Resumen ejecutivo

El MVP 3 convierte FestanovaCo de un servicio de personalización principalmente manual en una plataforma asistida por IA. Una persona describe su evento en lenguaje natural, completa los datos indispensables y obtiene una propuesta editable de invitación: textos, estilo visual, paleta, música y módulos recomendados.

La IA no genera una aplicación ni publica código libre. Produce una configuración estructurada, validada y compatible con las plantillas existentes. El cliente revisa el resultado y un administrador lo aprueba antes de publicarlo.

La meta no es añadir un chatbot, sino reducir el tiempo entre la solicitud y el primer borrador, manteniendo control humano, identidad visual y confiabilidad.

---

## Evolución del producto

### MVP 1 — Validación con una celebración real

El primer MVP fue una invitación digital utilizada en la boda de un familiar. Permitió validar el flujo completo con un evento real:

- acceso mediante enlace único y token;
- experiencia web adaptable a dispositivos móviles;
- información de la celebración;
- confirmación de asistencia;
- control de vigencia de la invitación;
- integración con el backend y operación desde un panel administrativo.

Referencias:

- Invitación publicada: `https://festanovaco.com/invitations-wedding-model-01?token=<token>`
- Panel administrativo: [admin.festanovaco.com](https://admin.festanovaco.com/es/auth/login)

El token real no se incluye en este documento porque funciona como identificador de acceso. La invitación de producción fue comprobada el 26 de noviembre de 2026 y mostraba correctamente el estado de RSVP vencido.

### MVP 2 — Catálogo y expansión a múltiples celebraciones

El segundo MVP amplía el producto para aceptar más clientes, modelos y tipos de evento:

- bodas;
- 15 años;
- cumpleaños;
- eventos empresariales;
- graduaciones;
- baby showers.

También introduce:

- sitio comercial en Next.js;
- catálogo de modelos;
- páginas de detalle;
- contacto y cotización;
- múltiples aplicaciones de invitación;
- despliegues independientes bajo el dominio `festanovaco.com`;
- administración central en `admin.festanovaco.com`.

#### Estado comprobado en este repositorio

- Bodas es la categoría activa.
- El catálogo contiene diez propuestas de boda.
- Cuatro modelos pueden conectarse a aplicaciones Angular mediante rewrites.
- 15 años y cumpleaños tienen páginas de “Próximamente”.
- Empresarial, graduación y baby shower aparecen en el catálogo de categorías, todavía sin flujo público propio.
- El shell no contiene el código del panel administrativo, del API ni de las aplicaciones Angular.

Por tanto, el MVP 2 debe considerarse **en desarrollo** hasta que las categorías anunciadas puedan completar el flujo de selección, personalización, publicación y administración.

### MVP 3 — Creación asistida por IA

El tercer MVP añade una capa de inteligencia sobre la plataforma construida en los MVP anteriores:

1. El cliente elige la categoría del evento.
2. Describe la celebración con sus propias palabras.
3. Completa los datos obligatorios.
4. La IA propone contenido y estilo usando únicamente opciones compatibles.
5. El cliente edita o regenera secciones concretas.
6. El sistema valida la configuración.
7. Un administrador revisa y publica.
8. El cliente recibe su enlace exclusivo.

---

## Problema que resuelve

El proceso actual requiere recopilar información por chat, interpretar referencias, redactar textos, escoger una plantilla y trasladar manualmente los datos. Esto produce varios problemas:

- el primer borrador puede tardar entre 24 y 48 horas;
- los datos pueden llegar incompletos o desordenados;
- las revisiones se repiten por WhatsApp;
- la calidad depende del tiempo disponible de la persona que personaliza;
- crecer a más categorías aumenta el trabajo operativo.

El MVP 3 debe reducir ese trabajo sin eliminar la revisión humana.

---

## Propuesta principal

### Generador de invitaciones desde una descripción

Ejemplo de entrada:

> Queremos una boda campestre y elegante al atardecer. Nos gustan los tonos verde oliva y crema, la música acústica y un tono cercano. Tendremos ceremonia, recepción y código de vestimenta formal.

La plataforma transforma esta descripción, junto con los datos del formulario, en una propuesta que incluya:

- plantilla recomendada;
- título y texto de bienvenida;
- historia o presentación de los anfitriones;
- paleta de colores compatible;
- tono de comunicación;
- sugerencia musical;
- módulos recomendados;
- textos de itinerario, vestimenta, ubicación y RSVP;
- lista de información faltante;
- advertencias sobre datos que requieren confirmación.

### Decisión técnica principal

La salida de IA será un objeto estructurado, no HTML, CSS, TypeScript ni Angular generado dinámicamente.

```json
{
  "schemaVersion": "1.0",
  "eventType": "wedding",
  "templateId": "modelo-compatible",
  "tone": "elegante-cercano",
  "content": {
    "headline": "Celebremos juntos",
    "welcomeMessage": "..."
  },
  "theme": {
    "paletteId": "olive-cream"
  },
  "modules": ["countdown", "itinerary", "location", "dress-code", "rsvp"],
  "missingFields": ["rsvpDeadline"]
}
```

El contrato definitivo debe versionarse y validarse en el servidor. Cada categoría podrá extender una base común con campos propios.

### Por qué esta solución

- aprovecha las plantillas y aplicaciones que ya existen;
- evita ejecutar código inventado por un modelo;
- permite validar cada campo antes de guardar;
- facilita previsualización, edición y auditoría;
- controla costos y tiempos de respuesta;
- hace posible cambiar de proveedor de IA;
- permite medir la calidad con casos repetibles.

---

## Alcance del MVP 3

### Incluido

- flujo guiado para bodas como primera categoría;
- entrada en lenguaje natural;
- formulario con datos obligatorios;
- generación de una propuesta estructurada;
- selección de una plantilla compatible;
- generación y reescritura de textos;
- recomendación de paleta, música y módulos;
- detección de información faltante;
- previsualización antes de publicar;
- edición manual de cada campo;
- regeneración por sección;
- guardado de borradores;
- revisión y aprobación administrativa;
- registro de versión, estado y fecha de generación;
- métricas de tiempo, costo, errores y aceptación.

### No incluido inicialmente

- generación libre de código;
- publicación completamente automática;
- clonación de diseños desde una URL;
- creación de imágenes o videos por IA;
- entrenamiento de un modelo propio;
- reemplazo del panel administrativo;
- decisiones automáticas sobre pagos, cupos o RSVP;
- conversación abierta con invitados;
- generación simultánea para todas las categorías.

### Orden de expansión

1. Bodas.
2. 15 años.
3. Cumpleaños.
4. Baby shower.
5. Graduación.
6. Eventos empresariales.

Este orden puede cambiar según demanda real. No se debe incorporar una categoría hasta definir y validar su contrato de datos.

---

## Usuarios y necesidades

### Cliente

Quiere obtener rápidamente una invitación atractiva sin saber diseño, redacción o desarrollo web.

Necesita:

- instrucciones sencillas;
- una primera propuesta en pocos minutos;
- control sobre la información generada;
- claridad sobre qué falta;
- previsualización antes de compartir;
- posibilidad de solicitar ayuda humana.

### Administrador

Quiere atender más eventos sin perder calidad.

Necesita:

- ver borradores pendientes;
- comparar contenido original y generado;
- corregir campos;
- aprobar o rechazar;
- conocer costos y errores;
- publicar solo configuraciones válidas;
- consultar quién generó y modificó cada versión.

### Invitado

Quiere una experiencia rápida, clara y confiable.

La incorporación de IA no debe cambiar la forma en que consulta la invitación o responde el RSVP.

---

## Flujo funcional

### 1. Crear solicitud

El cliente selecciona el tipo de evento y una plantilla, o permite que el sistema recomiende una.

### 2. Capturar información

El formulario separa:

**Datos obligatorios**

- nombres;
- fecha y hora;
- lugar;
- fecha límite de RSVP;
- datos de contacto;
- idioma.

**Datos opcionales**

- historia;
- fotos;
- música;
- itinerario;
- código de vestimenta;
- mesa de regalos o lluvia de sobres;
- instrucciones de transporte;
- tono y referencias visuales.

La IA nunca debe inventar datos obligatorios ausentes.

### 3. Generar propuesta

El backend combina:

- datos confirmados por el cliente;
- descripción libre;
- reglas de la categoría;
- capacidades de la plantilla;
- guía de voz de FestanovaCo;
- esquema de salida.

### 4. Validar

Antes de guardar:

- validar el esquema;
- rechazar módulos incompatibles;
- comprobar límites de longitud;
- detectar campos obligatorios ausentes;
- filtrar contenido inseguro;
- separar hechos confirmados de sugerencias.

### 5. Editar y previsualizar

El cliente puede:

- editar directamente;
- aceptar o descartar sugerencias;
- regenerar solo una sección;
- cambiar tono;
- comparar la última versión con la anterior.

### 6. Aprobar y publicar

El administrador revisa la propuesta. Solo una versión aprobada puede convertirse en la configuración pública asociada al token de la invitación.

---

## Arquitectura propuesta

### Responsabilidades

**Shell Next.js**

- landing del producto de IA;
- inicio del flujo;
- formulario o acceso al configurador;
- marketing, catálogo y SEO.

**Backend/API**

- autenticación y autorización;
- almacenamiento de solicitudes y versiones;
- construcción del contexto;
- llamada al proveedor de IA;
- validación del resultado;
- límites de uso;
- auditoría y métricas.

**Panel administrativo**

- cola de revisión;
- edición;
- aprobación;
- publicación;
- seguimiento de errores y costos.

**Aplicaciones de invitación**

- renderizar una configuración aprobada;
- conservar RSVP, expiración y experiencia del invitado;
- no llamar directamente al proveedor de IA.

### Flujo técnico

```text
Cliente
  -> configurador
  -> API de generación
  -> proveedor de IA
  -> validación estructural y de negocio
  -> borrador versionado
  -> previsualización
  -> aprobación administrativa
  -> publicación
  -> invitación por token
```

### Contratos recomendados

- `EventBrief`: datos entregados por el cliente.
- `GeneratedEventDraft`: propuesta generada por IA.
- `PublishedInvitationConfig`: versión aprobada y consumida por la invitación.
- `GenerationAttempt`: proveedor, modelo, duración, costo estimado y resultado.
- `ReviewDecision`: aprobación, rechazo, observaciones y responsable.

No se debe reutilizar directamente el tipo editorial `WeddingTemplate` como configuración pública. Ese tipo describe el catálogo comercial; el contenido de una celebración requiere su propio contrato.

---

## Reglas de IA y seguridad

- Nunca inventar nombres, fechas, direcciones, teléfonos, cuentas bancarias ni enlaces.
- Marcar la información faltante en vez de completarla.
- Tratar los textos y archivos del cliente como datos, no como instrucciones del sistema.
- Validar toda salida del modelo en el servidor.
- Mantener una lista permitida de plantillas, paletas y módulos.
- No guardar secretos ni tokens de acceso en prompts o registros.
- Minimizar datos personales enviados al proveedor.
- Definir tiempo de retención y eliminación de prompts.
- Registrar proveedor, modelo y versión del prompt.
- Limitar generaciones por usuario y por evento.
- Aplicar moderación a entradas y salidas.
- Permitir revisión y corrección humana.
- No publicar automáticamente durante el MVP.

Los tokens de invitación no deben formar parte del contexto de generación. La configuración generada y el acceso público deben mantenerse como responsabilidades separadas.

---

## Evaluación de calidad

Antes de liberar el MVP se debe crear un conjunto de casos de prueba con distintos estilos y niveles de información.

### Dimensiones

- **Validez:** porcentaje de respuestas que cumplen el esquema.
- **Fidelidad:** ausencia de datos inventados o modificados.
- **Completitud:** detección correcta de información faltante.
- **Compatibilidad:** módulos y estilos válidos para la plantilla.
- **Calidad editorial:** claridad, tono y ortografía.
- **Utilidad:** proporción de contenido aceptado sin cambios.
- **Rendimiento:** tiempo hasta la primera propuesta.
- **Costo:** costo promedio por borrador aprobado.

### Metas iniciales

- 100 % de configuraciones guardadas cumplen el esquema.
- 0 datos críticos inventados en el conjunto de evaluación.
- Al menos 80 % de campos generados aceptados sin cambios mayores.
- Primera propuesta en menos de 60 segundos.
- Reducción de al menos 60 % en el tiempo operativo hasta el primer borrador.
- Menos de 5 % de generaciones con error técnico.

Las metas deben revisarse después de los primeros diez eventos reales.

---

## Historias de usuario prioritarias

1. Como cliente, quiero describir mi evento para recibir una propuesta sin redactar todo desde cero.
2. Como cliente, quiero saber qué información falta para completar la invitación.
3. Como cliente, quiero editar cualquier sugerencia antes de publicarla.
4. Como cliente, quiero regenerar solo un texto para no perder el resto del trabajo.
5. Como administrador, quiero revisar una configuración válida antes de publicarla.
6. Como administrador, quiero ver los datos confirmados y distinguirlos del contenido sugerido.
7. Como administrador, quiero conocer el costo y resultado de cada intento.
8. Como invitado, quiero que la invitación siga funcionando aunque el servicio de IA esté caído.

---

## Criterios de aceptación

El MVP 3 se considera funcional cuando:

- un cliente puede crear un borrador de boda;
- el sistema impide generar sin los datos mínimos definidos;
- la respuesta de IA se valida con un esquema versionado;
- los hechos no confirmados se muestran como pendientes;
- el cliente puede editar y regenerar una sección;
- existe una previsualización fiel;
- el borrador conserva historial de versiones;
- un administrador puede aprobar o rechazar;
- solo una versión aprobada puede publicarse;
- la invitación publicada conserva RSVP y expiración;
- una caída del proveedor de IA no afecta invitaciones ya publicadas;
- existen métricas de latencia, costo, validación y aceptación.

---

## Plan de ejecución

### Fase 0 — Contrato y evaluación

- definir `EventBrief`;
- definir `GeneratedEventDraft`;
- definir `PublishedInvitationConfig`;
- documentar campos obligatorios de boda;
- crear entre 20 y 30 casos de evaluación;
- fijar límites de costo y latencia.

### Fase 1 — Generación interna

- endpoint protegido;
- prompt versionado;
- salida estructurada;
- validación;
- registro de intentos;
- interfaz interna para probar casos.

Resultado: el equipo puede generar y evaluar borradores, todavía sin acceso de clientes.

### Fase 2 — Configurador y previsualización

- formulario guiado;
- descripción libre;
- carga de borrador;
- edición por campo;
- regeneración por sección;
- previsualización.

Resultado: un cliente piloto puede producir una propuesta.

### Fase 3 — Revisión y publicación

- cola en el panel administrativo;
- comparación de versiones;
- aprobación y rechazo;
- publicación de configuración;
- asociación con enlace y token.

Resultado: flujo de extremo a extremo con control humano.

### Fase 4 — Piloto real

- usar el flujo con entre 5 y 10 celebraciones;
- medir tiempos y correcciones;
- entrevistar clientes;
- revisar costos;
- corregir prompts, esquema y experiencia.

### Fase 5 — Segunda categoría

Agregar la categoría con mayor demanda comprobada, reutilizando la base común y creando únicamente sus reglas y campos específicos.

---

## Riesgos y mitigaciones

### La IA inventa datos

Mitigación: campos críticos fuera de la generación, esquema estricto, marcadores de información faltante y revisión humana.

### El resultado se siente genérico

Mitigación: recopilar referencias, tono e historia; permitir edición por sección; evaluar variedad y aceptación.

### Aumentan los costos

Mitigación: modelos adecuados por tarea, límites de longitud, caché de borradores, regeneración parcial y cuotas.

### El sistema queda atado a un proveedor

Mitigación: encapsular la integración detrás de un servicio propio y conservar contratos independientes del proveedor.

### Se intenta soportar todas las categorías a la vez

Mitigación: validar primero bodas y agregar categorías según demanda.

### Se confunde generación con publicación

Mitigación: estados separados (`draft`, `in_review`, `approved`, `published`) y permisos explícitos.

### Se exponen datos personales

Mitigación: minimización, cifrado, retención definida, registros sin tokens y revisión de términos del proveedor.

---

## Ideas complementarias, de mayor a menor encaje

### 1. Generador de invitación desde una descripción — seleccionado para MVP 3

Es la opción con mayor encaje porque automatiza el flujo comercial actual y aprovecha las plantillas, el panel, el API y las invitaciones existentes. Demuestra IA aplicada a un producto real, salida estructurada, validación y operación humana.

### 2. Asistente de información para invitados

Un asistente responde preguntas sobre horario, ubicación, vestimenta, transporte y reglas del evento usando únicamente la configuración aprobada.

Condiciones para una fase futura:

- respuestas con fuente;
- prohibición de inventar;
- respuesta segura cuando no exista información;
- aislamiento estricto entre eventos;
- escalamiento al anfitrión.

No se prioriza ahora porque añade una nueva experiencia para invitados antes de optimizar el proceso principal de creación.

### 3. Redactor de mensajes y recordatorios

Genera mensajes para invitación, confirmación, recordatorio de RSVP, cambio de ubicación y agradecimiento. Puede adaptar tono y canal sin modificar datos confirmados.

Es una mejora de bajo costo y podría incorporarse después del generador, reutilizando infraestructura y reglas editoriales.

### 4. Resumen operativo de RSVP

Resume confirmaciones, rechazos, acompañantes, restricciones alimentarias y casos pendientes para anfitriones y administradores.

Debe operar sobre datos estructurados y mostrar siempre los registros originales. Es útil, pero depende de acceso al dominio de RSVP, que no vive en este repositorio.

---

## Por qué este MVP diferencia el proyecto

El valor técnico no está en mostrar una llamada a un modelo de lenguaje. Está en resolver un proceso real de extremo a extremo:

- producto usado en una celebración real;
- arquitectura con Next.js y aplicaciones Angular bajo un mismo dominio;
- panel administrativo y backend existentes;
- IA con salida estructurada;
- validaciones y guardrails;
- revisión humana;
- evaluación medible;
- control de costos;
- continuidad del servicio sin dependencia de IA en tiempo de consulta.

Esta combinación permite presentar FestanovaCo como un caso de producto, arquitectura e ingeniería de IA, no como un clon ni como un chatbot genérico.

---

## Indicadores de negocio

- tiempo promedio hasta el primer borrador;
- tiempo humano por invitación;
- porcentaje de propuestas aprobadas;
- cantidad de regeneraciones;
- conversión desde catálogo a solicitud;
- conversión desde borrador a publicación;
- costo de IA por invitación publicada;
- satisfacción del cliente;
- número de eventos atendidos por mes;
- distribución de demanda por categoría.

---

## Preguntas por resolver antes de implementar

- ¿El configurador vivirá en el shell o en el panel administrativo?
- ¿El cliente tendrá cuenta o accederá mediante un enlace temporal?
- ¿Qué repositorio es dueño de los contratos compartidos?
- ¿Dónde se almacenan borradores, archivos y versiones?
- ¿Cómo consume cada SPA la configuración publicada?
- ¿Qué campos administra hoy el backend para bodas?
- ¿Qué acciones permite actualmente el panel?
- ¿Qué proveedor y región cumplen los requisitos de privacidad y costo?
- ¿Qué categoría debe seguir a bodas según demanda real?
- ¿Cuál es el límite económico por generación y por invitación publicada?

Estas decisiones requieren revisar los repositorios del API, el panel administrativo y las aplicaciones Angular. No deben inferirse únicamente desde el shell de marketing.
