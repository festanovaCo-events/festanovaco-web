# MVP 1 — Primera invitación digital operativa

Documento histórico de producto y alcance. Fecha de documentación: 2026-11-26.

---

## Resumen ejecutivo

El MVP 1 de FestanovaCo fue una invitación digital desarrollada y utilizada en la boda de un familiar. Su objetivo fue comprobar que una celebración real podía administrarse y compartirse mediante una experiencia web completa:

- creación y configuración del evento desde un panel administrativo;
- carga masiva de invitados;
- enlaces personalizados mediante token;
- invitación web adaptable a dispositivos móviles;
- confirmación o rechazo de asistencia;
- control de cupos y acompañantes;
- consulta administrativa de respuestas;
- manejo de fecha límite de confirmación;
- publicación bajo el dominio de FestanovaCo.

El MVP no fue solamente una landing de boda. Conectó tres piezas: panel administrativo, API e invitación pública.

---

## Contexto

La hipótesis inicial fue:

> Una invitación web puede sustituir la invitación digital estática y, además, ayudar a los anfitriones a controlar invitados y confirmaciones.

Para validar esa hipótesis se construyó una experiencia para una celebración real, con datos, invitados y una fecha límite reales.

### Referencias públicas

- Invitación: `https://festanovaco.com/invitations-wedding-model-01?token=<token>`
- Panel administrativo: [admin.festanovaco.com](https://admin.festanovaco.com/es/auth/login)

El token real no se guarda en la documentación porque funciona como identificador de acceso. La invitación fue comprobada el 26 de noviembre de 2026 y mostraba correctamente el estado de RSVP vencido.

---

## Objetivos

### Objetivo principal

Validar de extremo a extremo la creación, publicación, distribución y seguimiento de una invitación digital para una boda real.

### Objetivos específicos

- Centralizar la información de la celebración.
- Entregar un enlace personalizado a cada invitado.
- Permitir aceptar o rechazar la invitación.
- Controlar cupos y nombres de acompañantes.
- Evitar confirmaciones después de la fecha límite.
- Permitir a un administrador consultar el estado de los invitados.
- Probar una experiencia visual más completa que una imagen o PDF.
- Obtener una base reutilizable para futuros modelos.

---

## Alcance funcional

### Panel administrativo

El repositorio `admin-festanovaco` implementó el flujo operativo para preparar y monitorear la boda.

#### Autenticación

- registro de usuario;
- inicio de sesión;
- token JWT almacenado en cookie;
- protección de rutas privadas;
- cierre de sesión;
- soporte de interfaz en español e inglés.

No se implementaron roles ni permisos diferenciados. Cualquier sesión válida accede al mismo nivel funcional.

#### Creación del evento

El administrador podía registrar:

- título;
- tipo de evento;
- modalidad;
- dirección;
- capacidad;
- fechas de inicio y finalización;
- cuenta propietaria.

Aunque el selector contemplaba más tipos de evento, únicamente la boda disponía de configuración completa.

#### Configuración de la boda

El panel ofrecía un proceso de cuatro pasos:

1. **Información principal**
   - nombre del novio;
   - nombre de la novia;
   - frase o mensaje de la boda.
2. **Datos de la celebración**
   - fecha y hora;
   - dirección de la fiesta.
3. **Recursos visuales**
   - imagen principal;
   - galería de entre una y diez imágenes;
   - imagen de cierre.
4. **Música**
   - URL o archivo de audio.

Al finalizar, el panel enviaba la configuración y los archivos al API.

#### Importación de invitados

El administrador podía subir una lista en formato Excel:

- archivos `.xlsx` y `.xls`;
- asociación de la lista con un evento;
- creación masiva de invitaciones mediante el API.

Este flujo evitó registrar manualmente cada invitado.

#### Seguimiento de invitados

El panel permitía:

- listar invitados por evento;
- filtrar por todos, confirmados, pendientes y rechazados;
- consultar cantidad de cupos;
- ver nombres de acompañantes;
- revisar cupos usados y disponibles;
- conocer la fecha de respuesta;
- copiar el enlace individual de invitación;
- exportar información en CSV;
- paginar resultados.

La administración de RSVP era principalmente de consulta. No se implementó la edición manual del estado ni un CRUD individual completo de invitados.

---

## Invitación pública

El repositorio `wedding-model-01` contiene la experiencia utilizada como primer modelo de boda.

### Acceso por token

Cada enlace incluye un parámetro `token`:

```text
/invitations-wedding-model-01?token=<token>
```

El token permite consultar:

- nombre del invitado principal;
- estado de la invitación;
- cantidad de cupos;
- acompañantes confirmados;
- cupos utilizados y disponibles;
- fecha de respuesta.

La invitación también admite `preview=1` para mostrar una vista previa sin aplicar la redirección automática por vencimiento.

### Experiencia de bienvenida

Al ingresar:

- se muestra una pantalla de bienvenida;
- el usuario decide si desea continuar con música;
- se activa la experiencia completa;
- se presenta una guía de confirmación cuando corresponde.

### Secciones de la boda

La invitación incluye:

1. portada principal;
2. cuenta regresiva;
3. información de ceremonia y celebración;
4. enlaces de ubicación;
5. enlaces para agregar eventos al calendario;
6. galería de fotografías;
7. instrucciones y código de vestimenta;
8. información de regalos;
9. sección de Instagram;
10. confirmación de asistencia;
11. pie de página.

### Música

- reproducción de audio de fondo;
- elección inicial con o sin música;
- control flotante durante la navegación.

### Mapas y calendario

Cada momento del evento puede enlazar a:

- Google Maps;
- búsqueda de la ubicación como respaldo;
- Google Calendar.

### Galería

- carrusel de imágenes;
- apertura ampliada mediante lightbox;
- carga diferida para mejorar rendimiento.

### Temas visuales

El modelo incorpora dos variaciones:

- `hojas-navy`;
- `hojas-forest`.

El tema activo se selecciona durante desarrollo o compilación y se aplica mediante variables visuales.

---

## RSVP

### Estados

El contrato maneja:

- `PENDING`;
- `ACCEPTED`;
- `DECLINED`.

### Confirmación

El invitado puede:

1. indicar que asistirá;
2. registrar su nombre;
3. agregar acompañantes dentro del cupo permitido;
4. confirmar aunque no utilice todos los cupos, después de aceptar una advertencia;
5. consultar posteriormente los nombres registrados.

### Rechazo

El invitado puede rechazar la invitación y visualizar el estado actualizado.

### Endpoints consumidos

La aplicación de invitación está preparada para consumir:

```text
GET  /v1/invitation/info/:token
POST /v1/invitation/accept/:token
GET  /v1/invitation/decline/:token
```

La aceptación envía la lista de nombres confirmados.

### Fecha límite

La experiencia compara:

- estado de la invitación;
- fecha límite de RSVP;
- modo de vista previa.

Después de la fecha límite:

- una invitación pendiente o rechazada lleva a la pantalla de vencimiento;
- una invitación ya aceptada continúa mostrando la experiencia normal;
- el modo de vista previa permite revisar el contenido.

En el modelo 01, la fecha límite está configurada en la aplicación. No corresponde necesariamente a la expiración técnica del token en el backend.

---

## Pantalla de invitación vencida

La ruta:

```text
/invitations-wedding-model-01/expired?token=<token>
```

explica:

- que el plazo de confirmación terminó;
- que el lugar ya no está reservado;
- que los arreglos finales se realizaron con las respuestas recibidas;
- que el invitado debe contactar directamente a los anfitriones si considera que existe un error.

También permite revisar la invitación como recuerdo mediante una vista previa.

---

## Arquitectura

### Panel administrativo

- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS 4;
- Zustand;
- React Hook Form;
- Zod;
- Axios;
- next-intl;
- Radix UI y componentes shadcn.

### Invitación

- Angular 18;
- TypeScript;
- Tailwind CSS 4;
- RxJS;
- ngx-toastr;
- ngx-lottie;
- carrusel Slick;
- Fancybox.

### Integración

El flujo general es:

```text
Administrador
  -> crea y configura el evento
  -> sube recursos e invitados
  -> API genera invitaciones y tokens
  -> administrador comparte enlaces
  -> invitado consulta su invitación
  -> invitado acepta o rechaza
  -> administrador consulta el resultado
```

### Separación de responsabilidades

**Panel**

- autenticación;
- operación del evento;
- carga de invitados;
- consulta de RSVP.

**API**

- persistencia;
- autenticación;
- eventos;
- archivos;
- invitaciones;
- tokens;
- respuestas.

**Aplicación Angular**

- experiencia pública;
- presentación del evento;
- interacción RSVP;
- vencimiento.

---

## Despliegue

### Invitación

- aplicación Angular compilada como SPA;
- `baseHref` configurado para `/invitations-wedding-model-01/`;
- reglas de Vercel para recursos y fallback;
- exclusión de indexación mediante `noindex` y `robots.txt`;
- variable de entorno para la URL del API.

### Panel

- aplicación Next.js separada;
- dominio `admin.festanovaco.com`;
- rutas privadas protegidas por cookie;
- API configurada mediante variable de entorno.

### Dominio público

La invitación se presenta bajo `festanovaco.com`, aunque la aplicación Angular se despliega de forma independiente. La integración por ruta permite que el invitado no perciba el cambio de aplicación.

---

## Qué se validó

### Producto

- Una invitación web puede utilizarse en una boda real.
- Los invitados entienden el acceso mediante enlace.
- El RSVP puede integrarse dentro de la propia invitación.
- Los cupos y acompañantes pueden capturarse digitalmente.
- Una fecha límite puede comunicarse y aplicarse en la experiencia.
- Los anfitriones pueden consultar las respuestas desde un panel.

### Ingeniería

- Angular puede servir la experiencia de invitación.
- Next.js puede servir la administración.
- El API puede conectar ambos productos.
- Las invitaciones pueden identificarse mediante token.
- Los recursos del evento pueden gestionarse por separado.
- La aplicación puede desplegarse como SPA bajo un prefijo de ruta.

---

## Funcionalidades reales y funcionalidades incompletas

### Implementadas

- registro e inicio de sesión;
- creación y eliminación de eventos;
- configuración de boda;
- carga de imágenes y audio;
- importación masiva de invitados;
- listado y filtros de RSVP;
- exportación CSV;
- copia de enlaces;
- invitación completa;
- aceptación y rechazo;
- acompañantes y cupos;
- pantalla de vencimiento;
- temas visuales;
- mapas, calendario, galería y música.

### Parciales o no implementadas

- edición de los datos generales del evento;
- roles y permisos;
- recuperación de contraseña conectada al backend;
- creación o edición individual de invitados;
- cambio manual de RSVP desde el panel;
- analytics reales;
- envío de correos desde el editor de plantillas;
- administración completa de archivos;
- sugerencia de canciones;
- algunas acciones de agenda mostradas en la interfaz;
- configuración completa para eventos diferentes de boda.

---

## Limitaciones técnicas

- El modelo 01 contiene información editorial específica de una boda.
- El token personaliza invitado y RSVP, pero no convierte la aplicación en una plantilla multi-evento en tiempo de ejecución.
- El panel no implementa actualización completa de eventos.
- La lista de invitados depende de un archivo Excel.
- No existen pruebas end-to-end automatizadas.
- El panel no contiene control de acceso por roles.
- Algunas pantallas del administrador provienen de una plantilla y no están conectadas.
- En el estado local del repositorio de la invitación, los mocks están habilitados y el API generado usa una URL de ejemplo. Producción puede usar valores distintos inyectados durante el despliegue.
- El backend no se encuentra en los repositorios revisados para este documento.

---

## Repositorios involucrados

### `wedding-model-01`

Responsable de:

- invitación pública;
- experiencia visual;
- RSVP;
- expiración;
- mapas, música y galería.

### `admin-festanovaco`

Responsable de:

- autenticación;
- creación del evento;
- configuración de boda;
- carga de recursos;
- importación de invitados;
- seguimiento de respuestas.

### Backend/API

El frontend evidencia contratos para autenticación, eventos, configuración, archivos e invitaciones. Su implementación no forma parte de los repositorios revisados.

---

## Métricas que debieron registrarse

El MVP permitió validar el uso real, pero para comparar fases futuras conviene conservar:

- invitados cargados;
- enlaces entregados;
- invitaciones abiertas;
- confirmaciones;
- rechazos;
- respuestas pendientes;
- acompañantes registrados;
- tiempo medio hasta responder;
- respuestas después de recordatorios;
- incidencias reportadas;
- uso móvil frente a escritorio.

Si no existen registros históricos, no deben inventarse cifras.

---

## Resultado

El MVP 1 demostró que FestanovaCo podía operar una invitación digital real de extremo a extremo. Su principal resultado no fue únicamente el diseño de la boda, sino la integración entre administración, datos de invitados, enlaces tokenizados y RSVP.

También dejó claro el siguiente problema: el producto estaba construido alrededor de una boda y un modelo específico. Para atender más clientes era necesario convertirlo en una plataforma con catálogo, múltiples modelos, categorías y despliegues repetibles. Ese trabajo dio origen al MVP 2.

---

## Fuentes revisadas

- `wedding-model-01/package.json`
- `wedding-model-01/angular.json`
- `wedding-model-01/src/app/app.routes.ts`
- `wedding-model-01/src/app/pages/model-page/`
- `wedding-model-01/src/app/shared/services/`
- `wedding-model-01/src/app/shared/constants/`
- `wedding-model-01/src/app/shared/components/confirmations/`
- `wedding-model-01/src/app/shared/pages/wedding-expired-page/`
- `wedding-model-01/vercel.json`
- `admin-festanovaco/package.json`
- `admin-festanovaco/src/app/`
- `admin-festanovaco/src/features/event/`
- `admin-festanovaco/src/features/guest-list/`
- `admin-festanovaco/src/features/file-manager/`
- `admin-festanovaco/src/shared/data/`
- `admin-festanovaco/src/shared/lib/api/routes.ts`
- `admin-festanovaco/src/proxy.ts`

La invitación y la pantalla pública de inicio de sesión del administrador también fueron consultadas. No se accedió a información privada ni se realizaron operaciones sobre producción.
