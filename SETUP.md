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

## 3. Customize Content (index.html)

Open [index.html](file:///index.html) to update site content:

### A. Title and Meta Tags
Update the page title and metadata in the `<head>` section:
```html
<title>Project Name — Coming Soon</title>
```

### B. Header Logo and Links
Update the link destination, logo image source, and alternative text:
```html
<a href="https://example.com" class="group flex items-center" aria-label="Project Home">
    <img id="lab-logo" src="https://example.com/assets/logo.png" alt="Project Logo"
        class="w-full h-full object-contain" onerror="handleLogoError(this)">
</a>
```

### C. Main Heading and Description
Update headline and subtext:
```html
<div class="space-y-4">
    <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
        Something new is coming soon.
    </h1>
    <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
        A new web experience is currently under development. Stay tuned for updates.
    </p>
</div>
```

### D. Footer and Contact Information
Update the footer section:
- **Copyright and location:** Adjust laboratory / organization name and address text.
- **Navigation links:** Update URLs for the main website and contact email (`mailto:...`).
- **Social media icons:** Update profile links for GitHub, Instagram, LinkedIn, or add required platforms.

---

## 4. Customize Styles and Branding

Brand colors and typography are configured in the `<script>` tag inside `<head>` in [index.html](file:///index.html):

```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    600: '#2563eb', // Primary brand accent color
                    900: '#0f172a',
                }
            }
        }
    }
}
```

---

## 5. Local Development and Testing

Static preview options:

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
Open [index.html](file:///index.html) directly in any web browser.

---

## 6. Deploy Changes

Commit and push changes to the `main` branch:

```bash
git add .
git commit -m "feat: configure coming soon landing page"
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
