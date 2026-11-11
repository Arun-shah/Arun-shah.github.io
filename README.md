# Arun Sah — Personal Portfolio

A responsive React + Vite portfolio for **Arun Sah**, featuring a dark premium interface, subtle motion, project links, skills, contact details and a portrait.

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Open this project folder in VS Code.
3. Open Terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

The production website is generated in `dist/`.

## Deploy to GitHub Pages

The included GitHub Actions workflow deploys automatically when you push to the `main` branch. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.

The custom domain is configured as `arun-sah.com.np` through `public/CNAME`.

## Personalize

- Replace `public/profile.jpg` to change the portrait.
- Update the project list and links in `src/main.jsx`.
- Update the social links in the footer if you want to add a specific LinkedIn profile URL.
