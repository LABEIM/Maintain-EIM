# Coming Soon & Maintenance Hub

[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](LICENSE)
[![CI/CD](https://github.com/LABEIM/Maintain-EIM/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/LABEIM/Maintain-EIM/actions)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![EIM Lab](https://img.shields.io/badge/EIM-Research_Laboratory-blue.svg)](https://eimlab.org)

A modern, responsive, and lightweight web hub tailored for **Enterprise Infrastructure Management (EIM) Research Laboratory** pre-launch projects, upcoming initiatives, and scheduled maintenance windows across all `*.eimlab.org` domains.

This repository serves two interconnected purposes:
1. **Central Coming Soon & Maintenance Hub:** Deployed once to Cloudflare Pages (`maintenance-eim`) to dynamically serve custom pre-launch and maintenance landing pages for any lab subdomain via the Central Edge Router Worker (`eim-edge-router`).
2. **Template Repository for New Web Projects:** Provides standardized CI/CD pipelines, starter READMEs, and laboratory licensing templates in [`templates/`](templates/) for bootstrapping new repositories.

For complete setup instructions, deployment workflows, and Cloudflare Worker configuration, refer to the [**Setup Guide (SETUP.md)**](SETUP.md).

---

## Features

- **Multi-Site Dynamic Profiles (`config.js`):** Centralized registry supporting unique per-project branding, headlines, descriptions, countdowns, and CTA buttons resolved dynamically via URL query parameter (`?site=<slug>`) or subdomain.
- **Edge Gateway Integration (`eim-edge-router`):** Cloudflare Worker routes traffic dynamically across `*.eimlab.org/*`:
  - **Coming Soon Mode:** Emits `200 OK` for early Google search indexing and preview cards.
  - **Maintenance Mode:** Emits `503 Service Unavailable` with `Retry-After: 3600` to preserve SEO during maintenance windows.
  - **Live App Pass-Through:** Instant cutover to the real application on launch day.
- **Automated PR Preview Support:** Fully integrated with `LABEIM/Shared-CICD` to generate isolated preview URLs commented directly on GitHub Pull Requests.
- **Optional Countdown / ETA Indicator:** Live ticking countdown timer with localized units (Days, Hours, Minutes, Seconds) and completion fallback text.
- **Bilingual & Multi-Language (i18n):** Native support for English (`EN`) and Indonesian (`ID`) with instant toggle switch, auto-browser detection, URL param override (`?lang=id`), and `localStorage` persistence.
- **Theme Switching:** Dark and light mode toggle with system preference detection.
- **Zero-Build Static Architecture:** Pure HTML5 and Tailwind CSS with no compilation step required.
- **Starter Templates (`templates/`):** Ready-to-use project README template (`README.template.md`), AI agent guidelines (`AGENTS.template.md`, `CLAUDE.template.md`), Contributor Code of Conduct (`CODE_OF_CONDUCT.template.md`), Contributing Guidelines (`CONTRIBUTING.template.md`), and laboratory license templates (`LICENSE.MIT`, `LICENSE.ALL-RIGHTS-RESERVED`).

---

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # CI/CD pipeline using LABEIM shared workflows
├── .gitignore                 # Standard OS, IDE, and log ignore rules
├── AGENTS.md                  # Standardized AI Agent operating guidelines template
├── CLAUDE.md                  # Claude Code instructions pointer
├── CODE_OF_CONDUCT.md         # Contributor Covenant Code of Conduct
├── CONTRIBUTING.md            # Contributing guidelines & workflow standards
├── LICENSE                    # EIM Lab Proprietary License
├── README.md                  # Project overview
├── SETUP.md                   # Complete Architecture, Setup, and SOP Guide
├── config.js                  # Central configuration & per-site profiles registry
├── index.html                 # Dynamic Coming Soon / Maintenance landing page
└── templates/                 # Starter templates for new web project repositories
    ├── AGENTS.template.md     # AI Agent instructions template for new projects
    ├── CLAUDE.template.md     # Claude Code instructions template
    ├── CODE_OF_CONDUCT.template.md # Contributor Code of Conduct template
    ├── CONTRIBUTING.template.md    # Contributing guidelines template
    ├── LICENSE.ALL-RIGHTS-RESERVED # Proprietary license template
    ├── LICENSE.MIT            # Open Source MIT license template
    ├── README.md              # Template usage instructions
    └── README.template.md     # Standardized project README template
```

---

## Local Development & Testing

Preview the landing page with different profiles locally:

```bash
# Start local HTTP server
python3 -m http.server 8000
```

- **Default view:** `http://localhost:8000/`
- **Smart Campus profile:** `http://localhost:8000/?site=smart-campus`
- **Sensor Network profile:** `http://localhost:8000/?site=sensor-net`
- **Maintenance mode:** `http://localhost:8000/?mode=maintenance`
- **Indonesian language:** `http://localhost:8000/?site=smart-campus&lang=id`

---

## Community & Contributing

We are dedicated to building a welcoming, inclusive, and harassment-free community across all Enterprise Infrastructure Management (EIM) Research Laboratory initiatives.

- **Code of Conduct:** All contributors and participants are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).
- **Contributing Guide:** For branching conventions, commit rules, and Pull Request workflows, please see our [Contributing Guide](CONTRIBUTING.md).

---

## License and Credits

Maintained by **[EIM Lab (Enterprise Infrastructure Management Research Laboratory)](https://eimlab.org)**, Telkom University.  
All Rights Reserved.
