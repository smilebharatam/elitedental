<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8cdd3eb7-da0b-471e-9a77-d7d51f077344

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
3. Open [http://localhost:5173](http://localhost:5173)

## Static HTML Hosting

This site is a static React app. Build it once, then upload the output to any static host (cPanel, Netlify, Vercel, S3, GitHub Pages, etc.).

1. Build static files:
   `npm run build`
2. Upload **everything inside the `dist/` folder** to your web host's public directory (`public_html`, `www`, `htdocs`, etc.)
3. Test locally before uploading:
   `npm run preview`

## GitHub Pages / Custom Domain

The site uses **elitedentalmedavakkam.com** (served from domain root), so build with:

```bash
npm run build
```

After pushing to GitHub, the workflow builds and publishes to the `gh-pages` branch.

**One-time GitHub setting (required):**
1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **gh-pages** → folder: **/ (root)** → Save

Do **not** deploy from the `main` branch — that serves raw source code and causes a white screen.

**Note:** The optional Express server (`npm start`) is only needed for local Gemini AI chat. Static hosting serves the full clinic website without it.
