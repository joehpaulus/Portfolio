# Portfolio

A personal website/portfolio template you can edit locally with Docker and deploy to [Render](https://render.com) for free.

## Edit on localhost with Docker

1. **Start the dev server**
   ```bash
   docker compose up --build
   ```
2. Open **http://localhost:5173** in your browser.  
   Edits to `index.html`, `src/style.css`, and `src/main.js` hot-reload.

3. **Stop**
   ```bash
   docker compose down
   ```

### Without Docker

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Deploy to Render (free)

### Option A: Connect repo in Render Dashboard

1. Push this repo to GitHub (or GitLab).
2. Go to [Render Dashboard](https://dashboard.render.com) → **New** → **Static Site**.
3. Connect your repository and select this project.
4. Set:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Click **Create Static Site**. Render will build and deploy; later pushes to the same branch will auto-deploy.

### Option B: Blueprint (render.yaml)

If your account supports [Blueprints](https://render.com/docs/blueprint-spec), you can deploy from the repo root:

1. Push the repo to GitHub/GitLab.
2. In Render: **New** → **Blueprint** → connect the repo.
3. Render reads `render.yaml` and creates a static site with the build command and publish path already set.

## What to edit

| File | Purpose |
|------|--------|
| `index.html` | Content: your name, projects, about, contact links |
| `src/style.css` | Colors, fonts, layout (CSS variables at the top) |
| `src/main.js` | Optional JavaScript behavior |
| `public/` | Favicon, images, and other static assets |

## Safety notes for deployment

- **No secrets in the repo** – the site is static; don’t commit API keys or `.env` with secrets. Use [Render environment variables](https://render.com/docs/environment-variables) if you add a backend later.
- **Free tier** – static sites on Render are free; check [Render’s free tier docs](https://render.com/docs/free) for current limits.
- **HTTPS** – Render provides TLS and HTTPS by default.

## Build for production locally

```bash
npm run build
```

Output is in `dist/`. Serve that folder with any static host or run `npm run preview` to test it.
