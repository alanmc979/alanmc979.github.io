# Alan Madrigal's portfolio

A responsive, text-first React portfolio with professional experience, a parking
application, snowboarding, padel, a CJ-5 restoration, and an HPI Baja 5B rebuild.
The 1930 Ford Model A is labeled as an upcoming project. Built with Vite and plain CSS; no
third-party fonts, analytics, embedded work documents, or remote photos.

## Local development

Use Node.js 22.12 or newer and npm:

```sh
npm install
npm run dev
```

Build and preview the production site:

```sh
npm run build
npm run preview
```

The default local development URL is http://127.0.0.1:5173.

The first successful install generates `package-lock.json`. Commit that file for
reproducible dependency resolution and use `npm ci` for later clean installations.
The workflow uses `npm ci` when a lockfile is present and `npm install` for the
initial upload without one. Top-level dependency versions are pinned.

## Content and photos

Edit the experience and personal-interest data in `src/main.jsx`. The interest
cards work without photos. To add an approved photo, put it in `public/photos`,
set the corresponding `photo` to `/photos/filename.jpg`, and provide meaningful
`alt` text. Use optimized images, remove location metadata before publishing, and
only include photos and descriptions approved for public use. Do not use internal
Teams links, work screenshots, resumes, phone numbers, or addresses.

The included Hokkaido, Jeep camping and restoration, padel, HPI Baja 5B, and
Model A images were supplied for this portfolio. Local WebP copies are optimized and stripped of metadata;
the RC photo is cropped to exclude the incidental vehicle plate and the padel
photo is cropped to focus on the two players.

The parking project graphic is a decorative illustration, not an application
screenshot or a claim of public availability. No demo or repository is linked
without an approved public URL.

## Publish yourself with the personal account

Nothing is published by running the local commands. The GitHub workflow builds
and deploys when these files are committed to `main` or when manually started.
It requires GitHub Pages to use GitHub Actions as its source.

1. Sign in to GitHub as `alanmc979` in your personal-account environment. No
   passwords or tokens need to be shared with anyone.
2. Open `https://github.com/alanmc979/alanmc979.github.io` and go to
   Settings > Pages. Set **Source** to **GitHub Actions**.
3. Extract the source ZIP. On the repository's `main` branch, choose
   **Add file > Upload files**. Upload the extracted contents at the repository
   root, preserving `src`, `public/photos`, and `.github/workflows`.
   Do not upload the ZIP itself or wrap the files in an extra folder.
4. Review the content and photos before committing. Use a normal commit message,
   such as `Build personal portfolio`.
5. In **Actions**, open **Deploy portfolio to GitHub Pages** and wait for both
   build and deploy jobs to succeed. If the workflow did not start, use
   **Run workflow** on `main`.
6. Visit `https://alanmc979.github.io`. GitHub builds the React source and
   publishes `dist`; it does not serve raw JSX.

### Files to transfer

```text
.github/
  workflows/
    pages.yml
.gitignore
index.html
LICENSE
package.json
README.md
src/
  main.jsx
  styles.css
public/
  photos/
    *.webp
```

Do not transfer `.git`, `node_modules`, npm logs, local runtime tools, session
folders, or authentication configuration. The source ZIP excludes these.

Local npm installation was blocked by an HTTPS/TLS handshake failure, so the
production build has not been verified locally. Treat the first GitHub Actions
run as required validation before considering the site published successfully.

The default Vite root base is appropriate for `alanmc979.github.io`. For a project
site hosted under a repository subpath, configure Vite's `base` before deploying.
