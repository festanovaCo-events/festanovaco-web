---
name: clean-code
description: >-
  Applies Clean Code guidelines when writing or reviewing code in the
  FestanovaCo marketing shell (festanovaco-web). Use when implementing
  features, refactoring, fixing bugs, or reviewing changes, and when the user
  mentions clean code, SOLID, DRY, duplicidad, or maintainability. Keeps edits small and
  does not rewrite the architecture unless a real defect requires it.
---

# Clean Code Guidelines

## Constants Over Magic Numbers
- Replace hard-coded values with named constants
- Use descriptive constant names that explain the value's purpose
- Keep constants at the top of the file or in a dedicated constants file

## Meaningful Names
- Variables, functions, and classes should reveal their purpose
- Names should explain why something exists and how it's used
- Avoid abbreviations unless they're universally understood

## Smart Comments
- Don't comment on what the code does - make the code self-documenting
- Use comments to explain why something is done a certain way
- Document APIs, complex algorithms, and non-obvious side effects

## SOLID

### Single Responsibility
- Each function should do exactly one thing
- Functions should be small and focused
- If a function needs a comment to explain what it does, it should be split

### Open/Closed
- Add a new variant, component, or config entry instead of editing a stable module for every case
- Extend behavior without rewriting the callers that already work
- Do not grow a chain of special cases inside a function that used to have one job

### Liskov Substitution
- A variant must honor the contract of the type it replaces
- Callers of a shared component or helper must not need to know which variant they received
- Do not strengthen preconditions or drop results that existing callers rely on

### Interface Segregation
- Depend only on the fields and functions the caller actually uses
- Pass the value a function needs, not the whole object that happens to contain it
- Do not add props, context, or parameters that most consumers ignore

### Dependency Inversion
- High-level code depends on a small interface, not on a concrete provider
- Keep origins, storage keys, and external URLs behind the config module that already owns them
- Do not let a page or section talk to a concrete backend when a port already exists

## Duplicidad de código (DRY)

No copies un bloque que ya existe. Si dos pantallas hacen lo mismo y solo cambia el texto, hay una sola pieza y cada pantalla le pasa su copy.

- Extrae la estructura repetida a una función o un componente. El texto, el tono y los enlaces se quedan en quien lo usa.
- Una URL, un teléfono, un id de sección o una ruta viven en un solo módulo. No los rearmes en cada archivo.
- Dos apariciones del mismo panel, del mismo flujo o de la misma marca ya son duplicidad. No esperes a la tercera.
- No es duplicidad el catálogo: cada modelo es un dato distinto del mismo tipo. No es duplicidad una página que solo rellena un componente compartido.
- No unifiques dos bloques solo porque se parecen un poco. Unifícalos cuando un cambio de comportamiento habría que repetirlo a mano.

## Clean Structure
- Keep related code together
- Organize code in a logical hierarchy
- Use consistent file and folder naming conventions

## Encapsulation
- Hide implementation details
- Expose clear interfaces
- Move nested conditionals into well-named functions

## Code Quality Maintenance
- Refactor continuously
- Fix technical debt early
- Leave code cleaner than you found it

## Testing
- Write tests before fixing bugs
- Keep tests readable and maintainable
- Test edge cases and error conditions

## Version Control
- Write clear commit messages (Conventional Commits)
- Make small, focused commits
- Use meaningful branch names

## Aplicación en este proyecto

Estas reglas se aplican en el shell de marketing Next.js (`festanovaco-web`). El cambio se queda en el defecto; no se reescribe la arquitectura ni se trae el SPA de invitaciones a este repo.

- El enlace a una invitación es navegación de documento completo (`<a>` o `ButtonLink` con `fullPage`), no `next/link`. Las páginas dependen de `ROUTES`, `whatsappUrl` y los helpers de rewrite, no de `process.env`.
- No uses Module Federation, iframe, ni reescribas RSVP, cupos o el dominio de la invitación en este shell.
- La clave de tema la comparten el script anti-parpadeo y `ThemeProvider`. No partas un componente de menos de unas 30 líneas.
