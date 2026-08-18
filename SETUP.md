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
| **Meta & SEO** | `meta.ogImage` | [OPTIONAL] | Social media preview card image URL or path |
| **Branding** | `branding.logo.src` | **[REQUIRED]** | Main logo image URL or relative path |
| **Branding** | `branding.logo.srcDark` / `srcLight` | [OPTIONAL] | Separate logos for dark & light mode |
| **Branding** | `branding.logo.alt` & `href` | **[REQUIRED]** | Logo alt text (supports `{ en, id }`) and link |
| **Branding** | `branding.logo.useContainer` | [CONFIG] | `false` for horizontal logos, `true` for icon boxes |
| **Branding** | `branding.theme.defaultMode` | [CONFIG] | `"system"`, `"dark"`, or `"light"` |
| **Header Links** | `headerLinks.enabled` & `items` | [OPTIONAL] | Toggle and configure top-right links (e.g. GitHub repo) |
| **Content** | `content.headline` | **[REQUIRED]** | Main heading (supports `{ en, id }` or string) |
| **Content** | `content.description` | **[REQUIRED]** | Main description (supports `{ en, id }` or string) |
| **Content** | `content.countdown` | [OPTIONAL] | Live countdown timer / target ETA (`enabled`, `targetDate`, `label`, `labels`, `expiredText`) |
| **Content** | `content.cta` | [OPTIONAL] | CTA button (`enabled`, `text: { en, id }`, `href`) |
| **Footer** | `footer.copyright` & `address` | [OPTIONAL] | Copyright & address (supports `{ en, id }`) |
| **Footer** | `footer.quickLinks` | [OPTIONAL] | Quick text links (supports `{ en, id }` label) |
| **Footer** | `footer.socialLinks` | [OPTIONAL] | Social media icon links at bottom |

---

## 4. Setup Project README and License

When creating a new project from this template, update the root `README.md` and `LICENSE` files using the standardized templates provided in the [`templates/`](templates/) folder.

### Step 1: Copy & Customize README Template

```bash
cp templates/README.template.md README.md
```

Open `README.md` and fill in:
1. **Title & Description:** Project name, description, live domain, and organization badge.
2. **Badges:** Update the CI/CD and repository badge links.
3. **License Section:** Choose either **Option A (MIT)** or **Option B (All Rights Reserved)** to match your project license.

---

### Step 2: Choose and Apply Project License

Our laboratory uses two standard licensing models depending on project type:

#### Option A: MIT License (Open Source Projects)
For open-source projects, public templates, and reusable tools:
```bash
cp templates/LICENSE.MIT LICENSE
```
*Edit `LICENSE` to update `[YEAR]` with the current year.*

#### Option B: All Rights Reserved (Proprietary / Internal Projects)
For proprietary lab applications, internal portals, and confidential research initiatives:
```bash
cp templates/LICENSE.ALL-RIGHTS-RESERVED LICENSE
```
*Edit `LICENSE` to update `[YEAR]` with the current year.*

---

## 5. Local Development and Testing

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

## 6. Deploy Changes

Commit and push changes to the `main` branch:

```bash
git add .
git commit -m "feat: customize coming soon template config"
git push origin main
```

The GitHub Actions workflow deploys the static files to Cloudflare Pages and executes Lighthouse CI quality audits.

---

## 7. Connect Custom Domain in Cloudflare

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

---

## 8. Using as a Maintenance Page & HTTP 503 Best Practices

This template can also be used as a **Scheduled Maintenance Page** for existing applications and services.

### Coming Soon vs Maintenance Page

| Scenario | HTTP Status | Purpose / Search Engine Impact |
| :--- | :--- | :--- |
| **Coming Soon (Pre-Launch)** | `200 OK` | Tells search engines (Googlebot) to index the domain, build early domain authority, and show preview snippets. |
| **Maintenance Mode (Downtime)** | `503 Service Unavailable` | Informs search crawlers and bots that downtime is **temporary**, preventing them from de-indexing live URLs or ranking the maintenance page over your real app content. |

---

### Nginx Server Configuration (HTTP 503)

To temporarily put a service into maintenance mode on an Nginx reverse proxy using this template:

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name app.eimlab.org;

    # Define root containing index.html and config.js
    root /var/www/comingsoon-eim;

    # Send 503 Service Temporarily Unavailable
    error_page 503 /index.html;

    # Static assets (JS, CSS, images) should return 200 OK so the page renders
    location ~* \.(js|css|png|jpg|jpeg|svg|ico|woff2?)$ {
        try_files $uri =404;
        expires 1h;
        add_header Cache-Control "public, no-transform";
    }

    # All HTML requests trigger 503 status
    location / {
        return 503;
    }

    location = /index.html {
        internal;
        # Tell crawlers to retry in 1 hour (3600 seconds)
        add_header Retry-After 3600 always;
        add_header Cache-Control "no-store, no-cache, must-revalidate" always;
    }
}
```

---

### Central Cloudflare Maintenance Router (Multi-Site Setup)

If you have multiple lab websites on Cloudflare (e.g. `portal.eimlab.org`, `iot.eimlab.org`, `docs.eimlab.org`), use a single central Cloudflare Worker to act as the maintenance switchboard.

#### Step 1: Deploy this Template to Cloudflare Pages
1. Deploy this repository to Cloudflare Pages (e.g., `comingsoon-eim.pages.dev`).
2. Verify the page is accessible at `https://comingsoon-eim.pages.dev/`.

#### Step 2: Create the Central Router Worker in Cloudflare
1. Go to **Cloudflare Dashboard** > **Compute (Workers & Pages)** > **Create Worker**.
2. Name it `eim-maintenance-router`.
3. Paste the following Worker code:

```javascript
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const subdomain = url.hostname.split(".")[0].toLowerCase(); // e.g. "portal"
        const rawSites = (env.MAINTENANCE_SITES || "").toLowerCase();
        const activeList = rawSites.split(",").map(s => s.trim()).filter(Boolean);

        // Check if all sites, this subdomain, or the exact hostname is under maintenance
        const isUnderMaintenance =
            activeList.includes("all") ||
            activeList.includes(subdomain) ||
            activeList.includes(url.hostname.toLowerCase());

        if (isUnderMaintenance) {
            const templateUrl = env.TEMPLATE_URL || "https://comingsoon-eim.pages.dev/";
            const response = await fetch(templateUrl);

            return new Response(response.body, {
                status: 503,
                statusText: "Service Unavailable",
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                    "Retry-After": "3600",
                    "Cache-Control": "no-store, no-cache, must-revalidate"
                }
            });
        }

        // Normal traffic -> pass through to live application
        return fetch(request);
    }
};
```

#### Step 3: Configure Variables and Routes
1. **Environment Variables** (in Worker > **Settings** > **Variables and Secrets**):
   - `TEMPLATE_URL`: `https://comingsoon-eim.pages.dev/`
   - `MAINTENANCE_SITES`: `""` *(leave empty when all sites are running normally)*
2. **Route Binding** (in Worker > **Settings** > **Domains & Routes** > **Add Route**):
   - Route: `*.eimlab.org/*` (or individual subdomains)
   - Zone: `eimlab.org`

#### Step 4: How to Toggle Maintenance
- **To put `portal` and `iot` into maintenance:** Set `MAINTENANCE_SITES` = `portal, iot` and click **Save and Deploy**.
- **To put ALL sites into maintenance:** Set `MAINTENANCE_SITES` = `all` and click **Save and Deploy**.
- **To return to normal live apps:** Set `MAINTENANCE_SITES` = `""` (empty) and click **Save and Deploy**.

---

### Switching via Shared CI/CD Workflow

For production applications using the `LABEIM/shared-ci-cd` pipeline:

1. **Option A (Dedicated Maintenance Repo):** Keep a standalone `app-maintenance` Pages project deployed and toggle the custom domain or Cloudflare routing rule during major upgrades.
2. **Option B (Workflow Dispatch):** Trigger a manual GitHub Actions `workflow_dispatch` with a parameter `maintenance_mode: true` to publish this template folder to Cloudflare Pages during scheduled maintenance windows, then redeploy the main branch when maintenance completes.
