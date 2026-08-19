# Starter Templates for New Projects

This directory provides standardized starter files and templates for new repositories created in the EIM Research Laboratory.

---

## Files Included

| File | Purpose | When to Use |
| :--- | :--- | :--- |
| [`README.template.md`](README.template.md) | Standardized Project README | Base README template for every new project / repository. |
| [`LICENSE.MIT`](LICENSE.MIT) | Open Source MIT License | For open-source tools, public templates, and reusable libraries. |
| [`LICENSE.ALL-RIGHTS-RESERVED`](LICENSE.ALL-RIGHTS-RESERVED) | Proprietary / Internal License | For proprietary lab web apps, internal services, and confidential research portals. |

---

## How to Setup for a New Project Repository

When creating a new repository using **Use this template**:

### 1. Apply Project README
Copy [`README.template.md`](README.template.md) to replace the root `README.md`:
```bash
cp templates/README.template.md README.md
```
Open `README.md` and fill in:
- `[Project Name / Service Title]`
- `[REPOSITORY-NAME]`
- `[YOUR_DOMAIN]` (e.g. `smart-campus.eimlab.org`)
- `[YEAR]`
- Select either **Option A (MIT)** or **Option B (All Rights Reserved)** for badges and license info.

---

### 2. Choose and Apply Project License

#### Option A: MIT License (Open Source Projects)
```bash
cp templates/LICENSE.MIT LICENSE
```
Replace `[YEAR]` with the current year (e.g. `2026`).

#### Option B: All Rights Reserved (Proprietary / Internal Lab Systems)
```bash
cp templates/LICENSE.ALL-RIGHTS-RESERVED LICENSE
```
Replace `[YEAR]` with the current year (e.g. `2026`).
