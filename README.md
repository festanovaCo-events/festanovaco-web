# FestanovaCo (shell Next.js)

Sitio principal de [festanovaco.com](https://festanovaco.com). Las invitaciones de boda viven en el repo Angular `wedding-invitation-tmp` y se sirven en el mismo dominio con rewrites.

Documentación de objetivo, razones, arquitectura y alcance: [docs/arquitectura.md](./docs/arquitectura.md).

## Estructura (features)

- `src/app` — rutas de App Router. Solo componen páginas; no hay lógica de negocio.
- `src/features/<feature>` — cada dominio es un feature (`home`, `wedding`, `birthday`). Lo nuevo entra aquí.
- `src/shared` — layout, botones y config usados por más de un feature.

No hay página Next en `/invitations-wedding`. Esa ruta se reescribe al SPA Angular.

## Arranque local

En este repo:

```bash
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000), `/wedding` y `/birthday`.

Para ver la invitación Angular detrás del rewrite, en `wedding-invitation-tmp`:

```bash
ng serve
```

Luego entra a `http://localhost:3000/invitations-wedding?token=...` (el CTA de `/wedding` usa `WEDDING_DEMO_TOKEN` si está en `.env.local`).

El enlace a la invitación es un `<a>` de página completa, no `next/link`, para que el rewrite llegue al servidor.

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — producción
- `npm run typecheck` — TypeScript
- `npm run lint` — ESLint
