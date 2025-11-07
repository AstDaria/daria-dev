# Personal Site (React + Vite + Vercel)

A minimal, componentized personal site for Daria. No Tailwind. Uses CSS variables and simple cards.

## Local dev
```bash
npm i
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel, **New Project → Import** your repo. Framework preset: **Vite** (detected automatically).
3. Build command: `vite build` (auto). Output dir: `dist` (auto). Click **Deploy**.

## Custom domain
- In Vercel, go to your project → **Settings → Domains** → **Add** your domain (you can buy in Vercel or any registrar).
- If buying outside Vercel, set the DNS to Vercel (they show exact records). Propagation can take a bit.
- The default vercel.app subdomain is free. Custom domain registration costs money with any registrar.

## Notes
- Update contact email in `src/components/Contact.jsx`.
- Add real case studies in `src/components/Projects.jsx`.
- If you want a blog later, we can add a `/blog` route and MDX.
