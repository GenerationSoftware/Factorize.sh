# Factorize.sh

The public marketing site at https://factorize.sh, extracted from
`GenerationSoftware/factorize` (`packages/marketing`, commit
`8d899a8efdfe6fcf20031ebe90ce8085159077a5`). The static files in `public/`
are the production site. `src/index.ts` retains the original Worker fallback.
The authenticated application lives at https://app.factorize.sh and its
source remains in https://github.com/GenerationSoftware/factorize.

## Development

Use Node 24.12.0 and npm 11.19.0.

```sh
npm ci
npm test
npm run dev
```

## Hosting

Cloudflare Pages project: `factorize-sh`.
Production branch: `main`. Repository root: `/`.
Build command: `npm run build`. Output directory: `public`.
Cloudflare builds and deploys production on pushes to `main` and creates
previews for other branches. The custom domain is `factorize.sh`.

For a manual upload with Cloudflare credentials, run `npm run deploy`.
Changes to this site deploy independently of the application repository.

The previous `factorize-marketing` Pages project is retained for rollback with
automatic deployments disabled. The apex DNS record now targets
`factorize-sh.pages.dev`; app and documentation hosting are managed separately.
