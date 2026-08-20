# Starter Templates for New Projects

This directory provides standardized starter files and templates for new repositories created in the EIM Research Laboratory.

---

## Files Included

| File | Purpose | When to Use |
| :--- | :--- | :--- |
| [`README.template.md`](README.template.md) | Standardized Project README | Base README template for every new project / repository. |
| [`AGENTS.template.md`](AGENTS.template.md) | AI Agent Guidelines & Workflow | Standardized rules, architecture, and operational guidelines for AI coding agents. |
| [`CLAUDE.template.md`](CLAUDE.template.md) | Claude Code Instructions Pointer | Pointer instructing Claude Code to adhere to `AGENTS.md`. |
| [`CODE_OF_CONDUCT.template.md`](CODE_OF_CONDUCT.template.md) | Contributor Code of Conduct | Standardized community pledge and enforcement rules for contributors. |
| [`CONTRIBUTING.template.md`](CONTRIBUTING.template.md) | Contributing Guidelines | Standardized contribution workflows, git branching, commit standards, and PR lifecycle. |
| [`SECURITY.template.md`](SECURITY.template.md) | Security Policy | Standardized vulnerability reporting, disclosure SLOs, and CVD practices. |
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

### 2. Apply Agent Workflow Guidelines (AGENTS & CLAUDE)
Copy [`AGENTS.template.md`](AGENTS.template.md) and [`CLAUDE.template.md`](CLAUDE.template.md) to the root directory:
```bash
cp templates/AGENTS.template.md AGENTS.md
cp templates/CLAUDE.template.md CLAUDE.md
```
Open `AGENTS.md` and configure:
- `[PROJECT_NAME]`
- `[FRAMEWORK_CONFIG]`, `[BUILD_COMMAND]`, `[LINT_COMMAND]`, `[TEST_COMMAND]`
- Framework & Tech Stack in Section 2 (e.g. Next.js, Astro, Vite, Fastify, etc.)
- Directory layout and component roles

---

### 3. Choose and Apply Project License

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

---

### 4. Apply Contributor Code of Conduct
Copy [`CODE_OF_CONDUCT.template.md`](CODE_OF_CONDUCT.template.md) to the root directory:
```bash
cp templates/CODE_OF_CONDUCT.template.md CODE_OF_CONDUCT.md
```
Open `CODE_OF_CONDUCT.md` and configure:
- `[PROJECT_NAME]` (e.g. `Smart Campus IoT`)
- `[INSERT CONTACT EMAIL]` (default: `lab@eimlab.org`)

---

### 5. Apply Contributing Guidelines
Copy [`CONTRIBUTING.template.md`](CONTRIBUTING.template.md) to the root directory:
```bash
cp templates/CONTRIBUTING.template.md CONTRIBUTING.md
```
Open `CONTRIBUTING.md` and configure:
- `[PROJECT_NAME]` (e.g. `Smart Campus IoT`)
- `[REPOSITORY-NAME]` (e.g. `smart-campus-web`)
- `[INSTALL_COMMAND]`, `[DEV_SERVER_COMMAND]`, `[BUILD_COMMAND]`, `[LINT_COMMAND]`, `[TEST_COMMAND]`
- `[CONTACT_EMAIL]` (default: `lab@eimlab.org`)
- Under **Intellectual Property & Licensing**, uncomment **Option A** (for MIT projects) or **Option B** (for All Rights Reserved projects) matching your chosen `LICENSE`.

---

### 6. Apply Security Policy
Copy [`SECURITY.template.md`](SECURITY.template.md) to the root directory:
```bash
cp templates/SECURITY.template.md SECURITY.md
```
Open `SECURITY.md` and configure:
- `[PROJECT_NAME]` (e.g. `Smart Campus IoT`)
- `[REPOSITORY-NAME]` (e.g. `smart-campus-web`)
- `[MAIN_BRANCH]` (default: `main`)
- `[CONTACT_EMAIL]` (default: `lab@eimlab.org`)




