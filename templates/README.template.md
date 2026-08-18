# [Project Name / Service Title]

<!-- BADGES: Choose the badges relevant to your project and update repository/domain links -->

<!-- Badge Option 1: For MIT License (Open Source) -->
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

<!-- Badge Option 2: For All Rights Reserved (Proprietary) -->
<!-- [![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](LICENSE) -->

[![CI/CD](https://github.com/LABEIM/[REPOSITORY-NAME]/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/LABEIM/[REPOSITORY-NAME]/actions)
[![Website](https://img.shields.io/badge/Website-[YOUR_DOMAIN]-0284c7.svg)](https://[YOUR_DOMAIN])
[![Organization](https://img.shields.io/badge/Org-LABEIM-6366f1.svg)](https://eimlab.org)

[Short 1-2 sentence description of the project, service, or initiative by Enterprise Infrastructure Management (EIM) Research Laboratory, Telkom University.]

[**Live Website**](https://[YOUR_DOMAIN]) · [**EIM Research Lab**](https://eimlab.org) · [**Report Issue**](https://github.com/LABEIM/[REPOSITORY-NAME]/issues)

---

## About This Project

[Provide a concise overview of this project, its purpose, objectives, target audience, and current launch status.]

- **Status:** Coming Soon / In Active Development
- **Maintained by:** Enterprise Infrastructure Management (EIM) Research Laboratory, Telkom University
- **Target Launch:** [Target Launch Date / Quarter, e.g. Q3 2026]

---

## Configuration & Content

All content, logos, branding, links, languages, and text are managed in [`config.js`](file:///config.js). **You do not need to modify [`index.html`](file:///index.html)!**

1. Open `config.js` in your editor.
2. Customize the relevant sections (supports bilingual `{ en, id }` objects or plain strings):
   - **`meta`**: Page title, description, favicon, and OpenGraph social preview image.
   - **`branding`**: Logo, site title, and dark/light theme defaults.
   - **`content`**: Main hero headline, description text, live countdown timer, and CTA button.
   - **`footer`**: Copyright info, lab address, quick links, and social links.
3. Commit and push to `main` — Cloudflare Pages will automatically build and deploy!

---

## Local Development

Preview the landing page locally:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Or open [`index.html`](file:///index.html) directly in any modern browser.

---

## License & Ownership

<!-- ========================================================================= -->
<!-- OPTION A: MIT License (Open Source Projects)                               -->
<!-- ========================================================================= -->
This project is open-source and licensed under the [MIT License](LICENSE).  
Copyright (c) [YEAR] **Enterprise Infrastructure Management (EIM) Research Laboratory**, Telkom University.

<!-- ========================================================================= -->
<!-- OPTION B: All Rights Reserved (Proprietary / Lab Internal Projects)        -->
<!-- ========================================================================= -->
<!--
Copyright (c) [YEAR] **Enterprise Infrastructure Management (EIM) Research Laboratory**, Telkom University.  
**All Rights Reserved.**

This repository, its source code, website design, assets, and documentation are proprietary and confidential to Enterprise Infrastructure Management (EIM) Research Laboratory. Unauthorized copying, modification, distribution, public display, or re-hosting is strictly prohibited without prior written consent. See [LICENSE](LICENSE) for full terms.
-->
