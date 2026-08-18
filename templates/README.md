# Repository Templates for New Projects

This directory provides standardized templates for new repositories generated from the Coming Soon & Maintenance template.

---

## Files Included

| File | Purpose | When to Use |
| :--- | :--- | :--- |
| [`README.template.md`](README.template.md) | Standardized project README | Base README template for every new project / landing page. |
| [`LICENSE.MIT`](LICENSE.MIT) | Open Source MIT License | For open-source tools, public templates, and reusable libraries. |
| [`LICENSE.ALL-RIGHTS-RESERVED`](LICENSE.ALL-RIGHTS-RESERVED) | Proprietary / Internal License | For proprietary lab web apps, internal services, and confidential research portals. |

---

## How to Setup for a New Project

When you generate a new repository from this template:

### 1. Setup README
Copy [`README.template.md`](README.template.md) to the root `README.md`:
```bash
cp templates/README.template.md README.md
```
Open `README.md` and replace all placeholders:
- `[Project Name / Service Title]`
- `[REPOSITORY-NAME]`
- `[YOUR_DOMAIN]`
- `[YEAR]`
- Select either **Option A (MIT)** or **Option B (All Rights Reserved)** for the badges and License section at the bottom.

### 2. Choose and Apply License

#### If using MIT License (Open Source):
```bash
cp templates/LICENSE.MIT LICENSE
```
Replace `[YEAR]` with the current year (e.g. `2026`).

#### If using All Rights Reserved (Proprietary / Internal):
```bash
cp templates/LICENSE.ALL-RIGHTS-RESERVED LICENSE
```
Replace `[YEAR]` with the current year (e.g. `2026`).

---

## License Selection Guidelines

- **Use MIT License when:**
  - The repository is intended to be public and reusable by the community or other labs.
  - The code contains general UI templates, open utilities, or educational examples.

- **Use All Rights Reserved when:**
  - The repository contains proprietary lab systems, official lab branding, or production portals.
  - The assets, content, or designs should not be duplicated, redistributed, or re-hosted without explicit lab authorization.
