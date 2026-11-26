# MVP 2 — Plataforma de invitaciones y catálogo multimodelo

Documento de visión, alcance y estado. Fecha: 2026-11-26.

---

## Resumen ejecutivo

El MVP 2 transforma la solución creada para una boda específica en una plataforma capaz de atender más clientes, ofrecer varios diseños y crecer hacia distintos tipos de celebración.

La evolución principal consiste en separar:

- el sitio comercial y el catálogo;
- las aplicaciones de invitación;
- el panel administrativo;
- el API y los datos;
- el proceso de creación de nuevos modelos.

El visitante navega por `festanovaco.com`, elige una categoría y un diseño, y abre la invitación en el mismo dominio. Internamente, el sitio comercial está construido con Next.js y cada modelo de invitación puede desplegarse como una aplicación Angular independiente.

El MVP 2 está **en desarrollo**. Bodas es la única categoría activa de extremo a extremo en el shell; las demás categorías representan el alcance objetivo y no deben presentarse todavía como terminadas.

---

## Punto de partida

El [MVP 1](./mvp-1.md) validó:

- una boda real;
- panel administrativo;
- carga de invitados;
- enlaces con token;
- RSVP;
- cupos y acompañantes;
- expiración;
- invitación web desplegada.

La limitación principal era que la solución estaba ligada a una boda y a un diseño concreto. Crear una nueva invitación implicaba duplicar y modificar código sin un proceso uniforme, y no existía un sitio comercial para mostrar alternativas.

---

## Problema que resuelve

Para convertir el MVP 1 en un producto comercial se necesita:

- mostrar diferentes estilos antes de cotizar;
- publicar varios modelos simultáneamente;
- evitar que un modelo afecte a los demás;
- conservar una sola marca y dominio;
- reutilizar RSVP, expiración y servicios comunes;
- crear nuevos modelos de forma repetible;
- preparar la plataforma para otros tipos de evento;
- permitir que equipos React y Angular trabajen sin reescribir todo.

---

## Objetivos

### Objetivo principal

Construir una plataforma comercial y técnica que permita ofrecer varias invitaciones digitales bajo la marca FestanovaCo.

### Objetivos específicos

- Crear el sitio principal de la marca.
- Publicar un catálogo de invitaciones.
- Mostrar información detallada de cada modelo.
- Conectar cada modelo con una demostración real.
- Mantener las invitaciones bajo `festanovaco.com`.
- Desplegar y actualizar modelos de forma independiente.
- Reutilizar la lógica común de invitaciones.
- Definir un proceso para crear nuevos modelos.
- Preparar categorías adicionales.
- Conservar la integración con el panel administrativo y el API.

---

## Alcance de categorías

### Categorías objetivo

1. Bodas.
2. 15 años.
3. Cumpleaños.
4. Eventos empresariales.
5. Graduaciones.
6. Baby showers.

### Estado comprobado

| Categoría | Estado en el shell |
|---|---|
| Bodas | Activa, con landing, catálogo y detalles |
| 15 años | Página “Próximamente” |
| Cumpleaños | Página “Próximamente” |
| Empresarial | Tarjeta “Próximamente”, sin landing propia |
| Graduación | Tarjeta “Próximamente”, sin landing propia |
| Baby shower | Tarjeta “Próximamente”, sin landing propia |

El alcance comercial del MVP 2 incluye las seis categorías, pero el alcance implementado actualmente se concentra en bodas.

---

## Experiencia del cliente

### Descubrimiento

El visitante entra a la página principal y puede:

- conocer la propuesta de FestanovaCo;
- explorar tipos de celebración;
- entender el proceso;
- consultar preguntas frecuentes;
- contactar por WhatsApp o correo.

### Catálogo de bodas

La landing de bodas incluye:

- presentación de la categoría;
- beneficios y módulos incluidos;
- catálogo paginado;
- acceso a fichas de modelos;
- contacto y cotización.

### Detalle del modelo

Cada ficha puede mostrar:

- nombre y número;
- estilo;
- descripción;
- historia conceptual;
- paleta de colores;
- música sugerida;
- capacidad de fotografías;
- módulos incluidos;
- opciones de personalización;
- acceso a demostración;
- mensaje de cotización.

### Proceso comercial

El proceso comunicado al cliente es:

1. elegir evento y estilo;
2. compartir fecha, fotografías, música, itinerario, vestimenta y ubicación;
3. recibir un enlace exclusivo con RSVP.

En esta fase, la personalización continúa siendo principalmente asistida por una persona mediante WhatsApp, correo y panel administrativo.

---

## Catálogo de bodas

El repositorio contiene diez propuestas editoriales:

1. Cartagena Romance;
2. Botanical Serenade;
3. Minimalist Couture;
4. Carta Terracota;
5. modelo editorial 05;
6. modelo editorial 06;
7. modelo editorial 07;
8. modelo editorial 08;
9. modelo editorial 09;
10. Timeless Ivory.

Los nombres exactos y sus metadatos viven en `src/features/wedding/data/wedding-templates-data.ts`.

### Disponibilidad real

- Los modelos 01 a 04 pueden conectarse a demos Angular.
- La disponibilidad depende de los orígenes configurados en `WEDDING_APP_URL`.
- Los modelos 05 a 10 se encuentran marcados como “Próximamente”.
- Tener una ficha en el catálogo no implica que exista una aplicación desplegada.

### Categorías editoriales de diseño

- clásica;
- moderna;
- botánica;
- destino.

Estas categorías describen estilos de plantillas de boda y no deben confundirse con tipos de evento.

---

## Modelos de invitación

### Modelo 01

Origen del MVP 1:

- boda de Jorge y Yina;
- portada, cuenta regresiva y eventos;
- galería;
- instrucciones;
- regalos;
- Instagram;
- RSVP;
- vencimiento;
- temas navy y forest.

### Modelo 02

Añade una composición visual diferente y secciones como:

- hero;
- presentación;
- eventos;
- cronología;
- pases;
- regalos;
- RSVP;
- indicación para adultos;
- pie de página propio.

### Modelo 03

Modelo derivado de la base compartida con:

- hero propio;
- eventos;
- regalos;
- RSVP;
- cierre;
- reproductor musical.

### Modelo 04

Modelo con identidad visual propia:

- hero;
- cuenta regresiva;
- eventos;
- regalos;
- RSVP;
- cierre.

### Modelos 05 a 10

Existen como propuestas en el catálogo comercial, pero no se encontraron repositorios Angular correspondientes en el conjunto revisado.

---

## Arquitectura de plataforma

### Shell comercial

Repositorio: `festanovaco-web`.

Tecnologías:

- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS 4;
- Motion;
- App Router.

Responsabilidades:

- página principal;
- categorías;
- SEO;
- catálogo;
- fichas de modelos;
- contacto;
- navegación;
- tema claro y oscuro;
- rewrites hacia las invitaciones.

### Aplicaciones de invitación

Repositorios:

- `wedding-model-01`;
- `wedding-model-02`;
- `wedding-model-03`;
- `wedding-model-04`;
- futuros modelos.

Tecnología principal:

- Angular 18;
- TypeScript;
- Tailwind CSS;
- aplicaciones SPA.

Responsabilidades:

- experiencia pública;
- presentación visual;
- información de la celebración;
- RSVP;
- cupos y acompañantes;
- vencimiento;
- mapas, música y recursos.

### Panel administrativo

Repositorio: `admin-festanovaco`.

Responsabilidades reutilizadas del MVP 1:

- autenticación;
- eventos;
- configuración de boda;
- recursos;
- importación de invitados;
- consulta de RSVP;
- copia y exportación de enlaces.

El panel no forma parte del repositorio del shell, pero sigue siendo una pieza de la plataforma.

### API

Responsabilidades evidenciadas por los clientes:

- autenticación;
- cuentas;
- eventos;
- configuración;
- recursos;
- invitaciones;
- tokens;
- RSVP.

El backend no se encuentra en los repositorios revisados para estos documentos.

---

## Integración bajo un solo dominio

### Rutas de marketing

```text
festanovaco.com/
festanovaco.com/wedding
festanovaco.com/wedding/:id
festanovaco.com/15-anos
festanovaco.com/birthday
```

### Rutas de invitaciones

```text
festanovaco.com/invitations-wedding-model-01?token=...
festanovaco.com/invitations-wedding-model-02?token=...
festanovaco.com/invitations-wedding-model-03?token=...
festanovaco.com/invitations-wedding-model-04?token=...
```

### Funcionamiento

1. El dominio apunta al proyecto Next.js.
2. El shell recibe la solicitud.
3. Las rutas de invitación se reescriben hacia el despliegue Angular correspondiente.
4. El navegador mantiene la URL de `festanovaco.com`.
5. Angular consulta el API mediante el token.

### Motivo de la decisión

Esta arquitectura:

- conserva un solo dominio de marca;
- permite despliegues independientes;
- evita mezclar Angular y React en el mismo documento;
- permite reutilizar aplicaciones existentes;
- reduce el impacto de cambios entre modelos.

### Alternativas descartadas

**Module Federation**

No era necesario porque la invitación ocupa una página completa y no es un widget Angular dentro de React.

**Iframe**

Complica navegación, historial, enlaces compartidos y experiencia móvil.

**Reescribir todo en Next.js**

Eliminaría el trabajo Angular existente y obligaría al equipo a usar un solo stack.

**Subdominios públicos por invitación**

Los despliegues pueden usar subdominios como origen, pero el usuario final debe permanecer bajo las rutas de `festanovaco.com`.

---

## Rewrites

La variable `WEDDING_APP_URL` acepta una lista ordenada de orígenes:

```text
origen-modelo-01,origen-modelo-02,origen-modelo-03,origen-modelo-04
```

El orden determina la correspondencia:

- primer origen → modelo 01;
- segundo origen → modelo 02;
- tercer origen → modelo 03;
- cuarto origen → modelo 04.

Cada modelo recibe dos reglas:

```text
/invitations-wedding-model-0N
/invitations-wedding-model-0N/:path*
```

También existe una redirección de compatibilidad desde `/invitations-wedding` hacia el modelo 01.

### Reglas importantes

- Los enlaces deben realizar navegación de documento completo.
- Los proyectos Angular necesitan el `baseHref` correspondiente.
- Los recursos deben usar rutas compatibles con el prefijo.
- Los hosts de origen no deben redirigir otra vez hacia el dominio principal, porque producirían un bucle.

---

## Plantilla base para nuevos modelos

Repositorio: `festanova-invite-template`.

Su objetivo es reducir el trabajo repetido al crear una nueva invitación.

### Contenido común

- estructura Angular;
- layout;
- acceso por token;
- servicios de invitación;
- RSVP;
- vencimiento;
- estado compartido;
- música;
- temas;
- mocks;
- scripts;
- configuración de Vercel.

### Contenido específico del modelo

- identidad visual;
- componentes;
- composición de página;
- copy;
- recursos;
- datos de ejemplo;
- paleta;
- tipografía.

### Proceso de creación

1. Copiar la plantilla sin historial, dependencias ni compilados.
2. Ejecutar el script `stamp-model.js`.
3. Asignar un identificador, por ejemplo `wedding-model-05`.
4. Generar nombre de paquete y prefijo público.
5. Configurar `baseHref`.
6. Generar `vercel.json`.
7. Seleccionar o crear tema.
8. desarrollar el diseño.
9. verificar pruebas y compilación.
10. desplegar la aplicación.
11. añadir el origen al shell.
12. publicar la ficha en el catálogo.

### Identidad sellada

Los modelos recientes incluyen `model.identity.json`, utilizado para generar:

- identificador;
- nombre de paquete;
- prefijo;
- configuración Angular;
- configuración de despliegue.

El modelo 02 es anterior a este proceso y mantiene parte de su configuración de forma manual.

---

## Funcionalidades compartidas

Los modelos reutilizan, con variaciones según su antigüedad:

- consulta de invitación por token;
- API HTTP;
- estado de carga y error;
- aceptación y rechazo;
- cupos y acompañantes;
- modal de confirmación;
- guía de RSVP;
- página expirada;
- música de fondo;
- layout;
- temas;
- mocks;
- utilidades de fechas;
- generación de entorno.

### Limitación de la reutilización

La base común está copiada dentro de varios repositorios. No es un paquete compartido en tiempo de ejecución.

Consecuencia:

- corregir un error en un modelo no actualiza automáticamente los demás;
- los cambios deben portarse o sincronizarse manualmente;
- pueden aparecer diferencias de comportamiento entre modelos.

Esta decisión conserva independencia, pero aumenta el costo de mantenimiento.

---

## Tema claro y oscuro

El shell guarda la preferencia visual en:

```text
localStorage["festanova_theme"]
```

Las invitaciones pueden leer la misma clave al iniciar para mantener continuidad visual entre el catálogo y la demo.

La arquitectura no obliga a que todos los modelos compartan exactamente la misma estética; solo define un mecanismo común para conocer la preferencia.

---

## Flujo de extremo a extremo

### Cliente

1. Visita FestanovaCo.
2. Elige bodas.
3. Explora el catálogo.
4. Abre una ficha.
5. Revisa una demo.
6. Solicita cotización.
7. Comparte datos y recursos.
8. Recibe el enlace final.

### Administrador

1. Inicia sesión.
2. Crea el evento.
3. Configura la boda.
4. Carga imágenes y música.
5. Importa invitados.
6. Obtiene enlaces.
7. Distribuye o exporta.
8. Monitorea RSVP.

### Invitado

1. Recibe su enlace.
2. Abre la invitación.
3. Consulta información.
4. Acepta o rechaza.
5. Registra acompañantes.
6. Consulta ubicación, calendario y detalles.

---

## Estado de implementación

### Implementado

- shell comercial;
- home;
- landing de bodas;
- catálogo de diez propuestas;
- páginas de detalle;
- contacto por WhatsApp y correo;
- cuatro repositorios de modelos de boda;
- rewrites configurables;
- rutas públicas con prefijo;
- plantilla para nuevos modelos;
- proceso de sellado;
- panel administrativo reutilizable;
- RSVP y expiración en los modelos;
- soporte opcional de rutas para cumpleaños y 15 años;
- páginas “Próximamente”.

### Parcial

- conexión de las cuatro demos depende de variables de producción;
- catálogo 05 a 10 sin aplicación correspondiente;
- continuidad de tema depende de cada modelo;
- proceso común coexistiendo con modelos antiguos;
- administración enfocada en bodas;
- personalización todavía manual.

### Pendiente

- invitaciones de 15 años;
- invitaciones de cumpleaños;
- invitaciones empresariales;
- invitaciones de graduación;
- invitaciones de baby shower;
- landings dedicadas para empresarial, graduación y baby shower;
- configuración administrativa por categoría;
- contratos de datos específicos por categoría;
- modelos 05 a 10;
- automatización de publicación;
- analítica real;
- pruebas end-to-end;
- estrategia para sincronizar correcciones entre modelos.

---

## Criterios de finalización

El MVP 2 completo debería cumplir:

- al menos una invitación operativa por cada categoría anunciada;
- landing o flujo público por categoría;
- configuración administrativa compatible;
- contrato de datos definido;
- demo accesible desde catálogo;
- personalización y publicación verificadas;
- RSVP funcional cuando aplique;
- despliegue documentado;
- pruebas mínimas del flujo crítico;
- contacto y cotización con datos reales;
- métricas de uso y conversión.

Con el estado actual, el MVP 2 puede considerarse validado para **múltiples modelos de boda**, pero no terminado para **múltiples categorías de evento**.

---

## Pruebas y calidad

### Shell

Comandos disponibles:

- lint;
- typecheck;
- build.

No se encontraron pruebas unitarias o end-to-end en el repositorio del shell.

### Aplicaciones Angular

Los modelos y la plantilla incluyen pruebas para partes como:

- servicios de invitación;
- estado;
- confirmación;
- vencimiento;
- temas;
- generación de recursos;
- cuenta regresiva en algunos modelos.

No se encontró una suite end-to-end común que pruebe:

```text
catálogo -> demo -> token -> RSVP -> panel
```

---

## Riesgos

### Duplicación entre modelos

Cada repositorio puede desviarse de la base común.

**Mitigación:** definir una estrategia de actualización o extraer contratos y utilidades estables a paquetes versionados.

### Catálogo mayor que la oferta real

Mostrar modelos sin aplicación puede crear expectativas incorrectas.

**Mitigación:** distinguir claramente “propuesta”, “demo disponible” y “modelo listo para venta”.

### Expansión prematura de categorías

Cada categoría necesita datos y reglas distintas.

**Mitigación:** terminar una categoría a la vez y validarla con un evento real.

### Dependencia de configuración por orden

La correspondencia de `WEDDING_APP_URL` depende de la posición.

**Mitigación:** documentar el orden, validarlo al iniciar y considerar variables nombradas si aumenta el número de modelos.

### Operación manual

La recopilación y personalización consumen tiempo.

**Mitigación:** documentar el proceso y evolucionar hacia el configurador asistido planteado en el [MVP 3](./mvp-3.md).

### Falta de pruebas completas

Los componentes pueden funcionar de manera aislada mientras falla el flujo integrado.

**Mitigación:** automatizar casos críticos con invitaciones de prueba y tokens no productivos.

---

## Métricas recomendadas

### Comerciales

- visitas por categoría;
- aperturas de ficha;
- aperturas de demo;
- contactos por modelo;
- cotizaciones;
- conversión a evento publicado;
- modelos más solicitados;
- categorías más solicitadas.

### Operativas

- tiempo de personalización;
- tiempo de publicación;
- errores por despliegue;
- incidencias por modelo;
- correcciones replicadas entre repositorios;
- eventos administrados por mes.

### Invitaciones

- enlaces creados;
- invitaciones abiertas;
- aceptación;
- rechazo;
- pendientes;
- acompañantes;
- tiempo hasta RSVP.

---

## Resultado esperado

El MVP 2 debe demostrar que FestanovaCo puede dejar de ser una sola invitación y convertirse en una plataforma:

- con marca propia;
- catálogo;
- varios diseños;
- arquitectura multi-repositorio;
- despliegues independientes;
- administración central;
- base técnica reutilizable;
- capacidad de crecer por categoría.

La validación actual es sólida para múltiples modelos de boda. La siguiente validación de producto consiste en completar una segunda categoría con un evento real y comprobar que el patrón no depende exclusivamente del dominio de bodas.

---

## Relación con el MVP 3

El MVP 2 aporta:

- catálogo;
- plantillas;
- aplicaciones desplegables;
- panel;
- API;
- contratos de invitación;
- operación real.

El [MVP 3](./mvp-3.md) utiliza esta base para reducir el trabajo manual mediante:

- descripción del evento en lenguaje natural;
- propuesta estructurada;
- contenido y estilo recomendados;
- detección de datos faltantes;
- previsualización;
- revisión humana;
- publicación controlada.

La IA no reemplaza la arquitectura del MVP 2; la utiliza como sistema de entrega.

---

## Fuentes revisadas

### Shell

- `festanovaco-web/README.md`
- `festanovaco-web/docs/arquitectura.md`
- `festanovaco-web/src/features/home/`
- `festanovaco-web/src/features/wedding/`
- `festanovaco-web/src/features/birthday/`
- `festanovaco-web/src/features/fifteen/`
- `festanovaco-web/src/shared/config/`
- `festanovaco-web/next.config.ts`

### Modelos

- `wedding-model-01`
- `wedding-model-02`
- `wedding-model-03`
- `wedding-model-04`

Se revisaron sus configuraciones, rutas, páginas, componentes compartidos, temas, scripts, pruebas y despliegues.

### Plantilla

- `festanova-invite-template/README.md`
- `festanova-invite-template/model.identity.json`
- `festanova-invite-template/scripts/stamp-model.js`
- `festanova-invite-template/src/app/shared/`

### Administración

- `admin-festanovaco/src/features/event/`
- `admin-festanovaco/src/features/guest-list/`
- `admin-festanovaco/src/features/file-manager/`
- `admin-festanovaco/src/shared/data/`

No se realizaron cambios ni operaciones en producción durante la revisión.
