# Setup and Customization Guide

Step-by-step instructions for configuring and deploying the Coming Soon web template for new projects.

---

## 1. Use Template

1. Select **Use this template** > **Create a new repository** on GitHub (or clone the repository directly).
2. Set the repository name (e.g., `project-comingsoon`).
3. Clone the repository locally:
   ```bash
   git clone https://github.com/<organization-or-username>/<repository-name>.git
   cd <repository-name>
   ```

---

## 2. Configure CI/CD Pipeline

Edit [.github/workflows/ci-cd.yml](file:///.github/workflows/ci-cd.yml):

Update `cloudflare_project_name` with the target Cloudflare Pages project name:

```yaml
jobs:
  deploy:
    uses: LABEIM/shared-ci-cd/.github/workflows/deploy-app.yml@main
    with:
      enable_cloudflare: true
      cloudflare_project_name: 'project-name'
      enable_lighthouse: true
      lighthouse_routes: |
        /
    secrets: inherit
```

> [!NOTE]
> Ensure required GitHub Actions secrets (`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`) are defined in the organization or repository settings under **Settings > Secrets and variables > Actions**.

---

## 3. Customize Content (config.js)

All content, logos, branding, links, languages, and text are managed in [config.js](file:///config.js). **You do not need to modify [index.html](file:///index.html)!**

Open [config.js](file:///config.js) and follow the checklist:

### Bilingual & Plain String Formats

All text fields support either:
1. **Bilingual Object:** `{ en: "English content", id: "Konten Bahasa Indonesia" }`
2. **Plain String:** `"Universal content"`

### New Project Setup Checklist

| Section | Field | Status | Description |
| :--- | :--- | :--- | :--- |
| **i18n** | `i18n.enabled` | [CONFIG] | `true` or `false` to toggle multi-language switching |
| **i18n** | `i18n.defaultLanguage` | [CONFIG] | `"en"`, `"id"`, or `"system"` |
| **i18n** | `i18n.showSwitcher` | [CONFIG] | `true` or `false` to show language toggle in header |
| **Meta & SEO** | `meta.title` | **[REQUIRED]** | Browser tab title (supports `{ en, id }` or string) |
| **Meta & SEO** | `meta.description` | **[REQUIRED]** | Google search / preview text (supports `{ en, id }` or string) |
| **Meta & SEO** | `meta.favicon` | [OPTIONAL] | Tab favicon URL or path |
| **Branding** | `branding.logo.src` | **[REQUIRED]** | Main logo image URL or relative path |
| **Branding** | `branding.logo.srcDark` / `srcLight` | [OPTIONAL] | Separate logos for dark & light mode |
| **Branding** | `branding.logo.alt` & `href` | **[REQUIRED]** | Logo alt text (supports `{ en, id }`) and link |
| **Branding** | `branding.logo.useContainer` | [CONFIG] | `false` for horizontal logos, `true` for icon boxes |
| **Branding** | `branding.theme.defaultMode` | [CONFIG] | `"system"`, `"dark"`, or `"light"` |
| **Header Links** | `headerLinks.enabled` & `items` | [OPTIONAL] | Toggle and configure top-right links (e.g. GitHub repo) |
| **Content** | `content.headline` | **[REQUIRED]** | Main heading (supports `{ en, id }` or string) |
| **Content** | `content.description` | **[REQUIRED]** | Main description (supports `{ en, id }` or string) |
| **Content** | `content.cta` | [OPTIONAL] | CTA button (`enabled`, `text: { en, id }`, `href`) |
| **Footer** | `footer.copyright` & `address` | [OPTIONAL] | Copyright & address (supports `{ en, id }`) |
| **Footer** | `footer.quickLinks` | [OPTIONAL] | Quick text links (supports `{ en, id }` label) |
| **Footer** | `footer.socialLinks` | [OPTIONAL] | Social media icon links at bottom |

---

## 4. Local Development and Testing

Preview the landing page locally:

### Option A: VS Code Live Server
Right-click [index.html](file:///index.html) and select **Open with Live Server**.

### Option B: Python HTTP Server
```bash
python3 -m http.server 8000
```
Navigate to `http://localhost:8000`.

### Option C: Node.js Serve
```bash
npx serve .
```

### Option D: Direct Browser
Open [index.html](file:///index.html) directly in any web browser (`file:///...`).

---

## 5. Deploy Changes

Commit and push changes to the `main` branch:

```bash
git add .
git commit -m "feat: customize coming soon template config"
git push origin main
```

The GitHub Actions workflow deploys the static files to Cloudflare Pages and executes Lighthouse CI quality audits.

---

## 6. Connect Custom Domain in Cloudflare

For domains registered or managed in Cloudflare Registrar / DNS, configuration is automated:

### Step 1: Open Pages Project in Cloudflare
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Compute (Workers & Pages)** > **Workers & Pages**.
3. Select the project matching `cloudflare_project_name`.

### Step 2: Add Custom Domain
1. In the project dashboard, select the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter the domain name:
   - Root apex domain: `example.com`
   - Subdomain: `comingsoon.example.com` or `app.example.com`
4. Click **Continue**.

### Step 3: Confirm DNS Configuration
1. Cloudflare automatically detects the DNS zone for domains in the same account.
2. Review the pre-configured CNAME record pointing to `<project-name>.pages.dev`.
3. Click **Activate domain**.

### Step 4: SSL/TLS Verification
1. Cloudflare provisions a free Universal SSL/TLS certificate.
2. Status updates to **Active** once provisioning finishes (typically 1–5 minutes).

### Step 5: Configure Apex and WWW Redirection (Optional)
To route both apex (`example.com`) and `www` (`www.example.com`) to the deployment:
1. Add `www.example.com` as a second custom domain in the **Custom domains** tab, or
2. Go to **Websites** > select `example.com` > **Rules** > **Redirect Rules** to create a 301 redirect from `www.example.com` to `https://example.com`.
