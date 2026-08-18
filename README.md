# Coming Soon Web Template

A modern, responsive, configurable, and lightweight Coming Soon web template tailored for Enterprise Infrastructure Management (EIM) Research Laboratory projects and new web initiatives.

This template provides zero-build static hosting, centralized zero-code configuration via `config.js`, bilingual support (English & Indonesian) with instant language toggle, light and dark mode support, and automated CI/CD deployment to Cloudflare Pages via the [LABEIM Shared CI/CD](https://github.com/LABEIM/shared-ci-cd) workflow.

---

## Features

- **Bilingual & Multi-Language (i18n):** Native support for English (`EN`) and Indonesian (`ID`) with a sleek language toggle switch, automated browser language detection, and `localStorage` persistence.
- **Centralized Configuration:** Customize logo, navigation, SEO meta tags, hero headline, description, footer, and social links in `config.js` without touching HTML code.
- **Zero-Build Static Architecture:** Pure HTML5 and Tailwind CSS (via CDN) with no compilation step required.
- **Theme Switching:** Dark and light mode toggle with `localStorage` persistence and automatic system preference detection.
- **Fully Responsive:** Layout optimized for mobile, tablet, and desktop viewports.
- **Minimal Design:** Typography powered by Inter font, subtle glowing background gradients, and FontAwesome icons.
- **Automated CI/CD:** Integrated with Cloudflare Pages deployment and Lighthouse CI performance auditing.

---

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml      # CI/CD pipeline using LABEIM shared workflows
├── config.js              # Central configuration file (customize content & languages here)
├── index.html             # Main Coming Soon landing page
├── SETUP.md               # Setup and customization guide
└── README.md              # Project overview
```

---

## Setup and Getting Started

For the complete step-by-step setup guide for new projects, see [SETUP.md](file:///home/arukast/Projects/comingsoon-eim/SETUP.md).

### Quick Summary

1. Select **Use this template** on GitHub to create a new repository.
2. Update `cloudflare_project_name` in [.github/workflows/ci-cd.yml](file:///home/arukast/Projects/comingsoon-eim/.github/workflows/ci-cd.yml).
3. Customize title, logo, languages, headings, links, and footer in [config.js](file:///home/arukast/Projects/comingsoon-eim/config.js).
4. Push to `main` to trigger automated deployment to Cloudflare Pages.
5. Connect custom domain in Cloudflare (see [SETUP.md](file:///home/arukast/Projects/comingsoon-eim/SETUP.md#6-connect-custom-domain-in-cloudflare)).

---

## Local Development

Preview the landing page locally:

```bash
# Using Python HTTP server
python3 -m http.server 8000

# Using Node.js serve
npx serve .
```

Alternatively, open [index.html](file:///home/arukast/Projects/comingsoon-eim/index.html) directly in any modern web browser or use an IDE extension such as VS Code Live Server.

---

## License and Credits

Maintained by **[EIM Lab (Enterprise Infrastructure Management Research Laboratory)](https://eimlab.org)**.  
Licensed under the [MIT License](LICENSE).
