# Coming Soon & Maintenance Web Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Template](https://img.shields.io/badge/GitHub-Template_Repository-2ea44f.svg)](https://github.com/LABEIM/ComingSoon-Web-Template/generate)
[![CI/CD](https://github.com/LABEIM/ComingSoon-Web-Template/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/LABEIM/ComingSoon-Web-Template/actions)

A modern, responsive, configurable, and lightweight web template tailored for Enterprise Infrastructure Management (EIM) Research Laboratory projects, pre-launch initiatives, and scheduled maintenance pages.

This template provides zero-build static hosting, centralized zero-code configuration via [config.js](config.js), bilingual support (English & Indonesian) with instant language toggle, light and dark mode support, optional live countdown / ETA timer, and automated CI/CD deployment to Cloudflare Pages via the [LABEIM Shared CI/CD](https://github.com/LABEIM/shared-ci-cd) workflow.

[**Use this template**](https://github.com/LABEIM/ComingSoon-Web-Template/generate) · [**Setup Guide**](SETUP.md) · [**EIM Lab**](https://eimlab.org)

---

## Features

- **Dual-Purpose Architecture:** Perfect for pre-launch **Coming Soon** landing pages (HTTP 200) and temporary **Scheduled Maintenance** pages (HTTP 503).
- **Optional Countdown / ETA Indicator:** Built-in live ticking countdown timer with localized units (Days, Hours, Minutes, Seconds) and completion fallback message.
- **Bilingual & Multi-Language (i18n):** Native support for English (`EN`) and Indonesian (`ID`) with a sleek language toggle switch, automated browser language detection, and `localStorage` persistence.
- **Centralized Configuration:** Customize logo, navigation, SEO meta tags, hero headline, description, countdown, CTA, footer, and social links in `config.js` without touching HTML code.
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
├── .gitignore             # Standard OS, IDE, and log file ignore rules
├── LICENSE                # MIT License (for this template repository)
├── README.md              # Project overview (for this template repository)
├── SETUP.md               # Setup and customization guide
├── config.js              # Central configuration file (customize content & languages here)
├── index.html             # Main Coming Soon / Maintenance landing page
└── templates/             # Starter templates for new projects
    ├── LICENSE.ALL-RIGHTS-RESERVED # Proprietary / Internal license template
    ├── LICENSE.MIT        # Open Source MIT license template
    ├── README.md          # Templates guide & license selection instructions
    └── README.template.md # Standardized project README template
```

---

## Setup and Getting Started

For the complete step-by-step setup guide for new projects, see [SETUP.md](SETUP.md).

### Quick Summary

1. Select **Use this template** on GitHub to create a new repository.
2. Update `cloudflare_project_name` in [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml).
3. Customize title, logo, languages, headings, links, and footer in [config.js](config.js).
4. Apply the project README & choose a License (MIT or All Rights Reserved) from [`templates/`](templates/).
5. Push to `main` to trigger automated deployment to Cloudflare Pages.
6. Connect custom domain in Cloudflare (see [SETUP.md](SETUP.md#7-connect-custom-domain-in-cloudflare)).

---

## Local Development

Preview the landing page locally:

```bash
# Using Python HTTP server
python3 -m http.server 8000

# Using Node.js serve
npx serve .
```

Alternatively, open [index.html](index.html) directly in any modern web browser or use an IDE extension such as VS Code Live Server.

---

## License and Credits

Maintained by **[EIM Lab (Enterprise Infrastructure Management Research Laboratory)](https://eimlab.org)**.  
Licensed under the [MIT License](LICENSE).
