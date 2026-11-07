# DSA interview handbook: installable web app

Everything runs in the browser: the handbook, 18 topic labs, Interview mode and your progress. There is no server code and no build step. Once the app has been opened, it works offline.

## Deploy (pick one, about 5 minutes)

All three are free and serve over HTTPS, which offline support and installation require.

**Netlify Drop (no account setup, fastest)**
1. Open https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Netlify gives you a URL like `https://something.netlify.app`. Rename it in Site settings if you like.

**GitHub Pages**
1. Create a new repository and push the contents of this folder to it (index.html at the root).
2. In the repository: Settings → Pages → Source: “Deploy from a branch” → Branch: `main`, folder `/ (root)`.
3. The app appears at `https://<your-username>.github.io/<repo>/` within a minute or two.

**Vercel**
1. In this folder, run `npx vercel` and accept the defaults (no framework, no build command).
2. Run `npx vercel --prod` for the production URL.

## Install on iPhone

1. Open your URL in **Safari** (Chrome on iOS cannot install web apps).
2. Tap the Share button, then **Add to Home Screen**, then **Add**.
3. Open it from the home screen: it runs full-screen, without the Safari bar, and keeps working offline.

On Android or desktop Chrome or Edge, use the install icon in the address bar, or the menu → “Install app”.

## Your progress

- Progress is saved on each device, in the browser storage of your app's URL. It never leaves your device.
- To back it up or move it to another device: Handbook home → **Export progress**, then on the other device → **Import progress**.
- Deleting the home-screen app or clearing Safari website data deletes the progress on that device, so export a backup now and then.
- Keep one URL. Progress belongs to the address, so moving the app to a different URL starts an empty tracker (import your backup there).

## Updating the app later

If you replace any file, open `sw.js`, change `VERSION` (for example `dsa-v1` → `dsa-v2`) and deploy again. The installed app picks up the new version the next time it is opened while online; close and reopen it once more to see it.

## What is inside

| Path | Contents |
|---|---|
| `index.html` | The handbook: 19 topics, strategy maps, templates, problem bank, Interview mode, progress tracker |
| `labs/*.html` | 18 topic labs: theory, an animation for every strategy, decision helper, quiz, practice |
| `sw.js` | Offline support (caches every file on first visit) |
| `manifest.webmanifest`, `icons/` | App name and home-screen icons |
| `fonts/` | The two fonts, self-hosted so the app makes no third-party requests |
