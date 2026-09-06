# FestanovaCo (shell Next.js)

Sitio principal de [festanovaco.com](https://festanovaco.com). Las invitaciones de boda viven en los repos Angular (`wedding-model-01`, `wedding-model-02`, …) y se sirven en el mismo dominio con rewrites:

- Modelo 01 → `/invitations-wedding-model-01`
- Modelo 02 → `/invitations-wedding-model-02`

Los subdominios `wedding-invitations-m01/m02.festanovaco.com` son el origen de cada SPA Angular (destino de los rewrites). La URL pública sigue siendo `festanovaco.com/invitations-wedding-model-0X`. En Vercel, `WEDDING_APP_URL` debe apuntar a esos subdominios (con `https://`). Los proyectos Angular no deben redirigir esos hosts de vuelta a `festanovaco.com`, o se crea un bucle.

Documentación de objetivo, razones, arquitectura y alcance: [docs/arquitectura.md](./docs/arquitectura.md).

## Estructura (features)

- `src/app` — rutas de App Router. Solo componen páginas; no hay lógica de negocio.
- `src/features/<feature>` — cada dominio es un feature (`home`, `wedding`, `birthday`). Lo nuevo entra aquí.
- `src/shared` — layout, botones y config usados por más de un feature.

No hay página Next en `/invitations-wedding-model-01`, `-02`, etc. Esas rutas se reescriben a cada SPA Angular según el orden de `WEDDING_APP_URL`.

## Arranque local

En este repo:

```bash
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000), `/wedding` y `/birthday`.

Para ver la invitación Angular detrás del rewrite, en `wedding-model-01` (y opcionalmente `wedding-model-02` en otro puerto):

```bash
ng serve
```

Luego entra a `http://localhost:3000/invitations-wedding-model-01?token=...` (el CTA de `/wedding` usa `WEDDING_DEMO_TOKEN` si está en `.env.local`). Con varios orígenes en `WEDDING_APP_URL`, también existirá `/invitations-wedding-model-02`, `-03`, etc.

El enlace a la invitación es un `<a>` de página completa, no `next/link`, para que el rewrite llegue al servidor.

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — producción
- `npm run typecheck` — TypeScript
- `npm run lint` — ESLint
