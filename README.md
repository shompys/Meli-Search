### README

Proyecto monorepo (Turborepo) con 3 paquetes:
- client: Next.js 15 (App Router, React 19)
- api: Express
- @meli/utils: librería interna TypeScript

#### Requisitos
- Node 22.x
- pnpm 10.x

#### Instalación
```bash
pnpm install
```

#### Entornos
- Variables en la raíz: `.env`.

```bash
ACCESS_TOKEN=
MELI_API=https://api.mercadolibre.com
SITE_ID=MLA
```

#### Desarrollo
Desde la raíz del repo:
```bash
pnpm run dev
```
- Ejecuta en paralelo:
  - client (Next dev) en `http://localhost:3000`
  - api (Express con tsx watch) en `http://localhost:3001`
  - utils: se compila cuando se corre su build (lib)

#### Build
```bash
pnpm run build
```
- Ejecuta `turbo run build` para todos los paquetes en el orden correcto:
  - @meli/utils → tsc a `packages/utils/dist`
  - api → tsc a `apps/backend/dist`
  - client → `next build --turbopack` a `apps/client/.next`

#### Producción
Opción A: ejecutar todo de una
```bash
pnpm run start
```
- Corre `turbo run start`:
  - api: `node dist/main.js` (puerto 3001)
  - client: `next start` (puerto 3000)
  - utils: no se ejecuta (es lib), solo ejecuta su build

#### Puertos
- Client: 3000
- API: 3001


#### Notas
- Si cambias `.env`, reinicia `pnpm run dev`.
- Si cambias código en `@meli/utils`, vuelve a construir

```bash
pnpm run build
o
pnpm run dev (se ocupa de construir el dist del paquete también)
```
 - #### Es importante ejecutar un reinicio de TypeScript en el IDE para que se actualice el tipado de las utils.

#### Autenticación (Mercado Libre)
- Debes generar tu propio `ACCESS_TOKEN` y configurar tu aplicación en el DevCenter de Mercado Libre.
- Lee la guía oficial para crear una aplicación, obtener `client_id`, `client_secret` y generar tokens: [Crea una aplicación en Mercado Libre](https://developers.mercadolibre.com.ar/es_ar/crea-una-aplicacion-en-mercado-libre-es).





