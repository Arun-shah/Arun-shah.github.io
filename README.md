# Arun Sah — React Portfolio

A responsive, animated portfolio built with React, Vite, Framer Motion, and Lucide icons.

## Features
- Animated hero and project/skill reveal
- Responsive navigation for mobile
- About, skills, projects, and contact sections
- Custom domain CNAME for `arun-sah.com.np`
- GitHub Actions deployment to GitHub Pages

## Add your profile photo
Place your photo at:

`public/profile.jpg`

Use a square or portrait image. Keep the file reasonably small for faster loading. The site displays a designed placeholder if no photo is present.

## Run locally
Install Node.js 20 or newer, then:

```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Upload the project files to your GitHub Pages repository (the repository currently used for your portfolio).
2. Ensure the default branch is `main`.
3. Open **Settings → Pages** and select **GitHub Actions** as the deployment source.
4. Commit and push. The workflow in `.github/workflows/deploy.yml` builds and deploys the site.
5. In **Settings → Pages → Custom domain**, enter `arun-sah.com.np` if it is not already set.
6. Wait for DNS/HTTPS verification, then enable **Enforce HTTPS**.

Do not change your domain's Cloudflare DNS records if they are already pointing correctly to GitHub Pages.
