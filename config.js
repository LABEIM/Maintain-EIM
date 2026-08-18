/**
 * =========================================================================
 * Coming Soon Web Template - Configuration
 * =========================================================================
 *
 * Customize all settings, texts, links, logos, and branding for your project here.
 * You DO NOT need to edit index.html or CSS!
 *
 * -------------------------------------------------------------------------
 * NEW PROJECT SETUP CHECKLIST:
 * -------------------------------------------------------------------------
 * 1. [REQUIRED] Update `meta.title` and `meta.description` with project name.
 * 2. [REQUIRED] Update `branding.logo` (logo image URLs, alt text, homepage link).
 * 3. [REQUIRED] Update `headerLinks` (e.g., link to your project's GitHub repo).
 * 4. [REQUIRED] Update `content.headline` and `content.description`.
 * 5. [OPTIONAL] Enable `content.badge` (announcement tag) or `content.cta` (button).
 * 6. [OPTIONAL] Update `footer` contact email (`Hubungi Kami`) and social links.
 * =========================================================================
 */

const CONFIG = {
    // ---------------------------------------------------------------------
    // 1. Meta & SEO Settings
    // ---------------------------------------------------------------------
    meta: {
        // [REQUIRED] Browser tab title (e.g., "Project Name — Coming Soon")
        title: "EIM Lab — Coming Soon Template",

        // [REQUIRED] Search engine description shown on Google / preview cards
        description: "Enterprise Infrastructure Management Research Laboratory - New web experience coming soon template.",

        // [OPTIONAL] Browser tab icon (URL or relative path like "assets/favicon.png")
        favicon: "https://eimlab.org/assets/brand/eim-favicon.png",
    },

    // ---------------------------------------------------------------------
    // 2. Branding & Logo Settings
    // ---------------------------------------------------------------------
    branding: {
        logo: {
            // [REQUIRED] Main logo image URL or relative path
            src: "https://eimlab.org/assets/brand/eim-logo-horizontal.png",

            // [OPTIONAL] Dark-mode specific logo (used when dark mode is active)
            srcDark: "https://eimlab.org/assets/email/logo-white.png",

            // [OPTIONAL] Light-mode specific logo (used when light mode is active)
            srcLight: "https://eimlab.org/assets/brand/eim-logo-horizontal.png",

            // [REQUIRED] Accessible description for screen readers and SEO
            alt: "EIM Lab Logo",

            // [REQUIRED] URL when user clicks the logo (e.g. "https://eimlab.org")
            href: "https://eimlab.org",

            // [CONFIG] Set to true for square icon box (w-10 h-10), or false for wide horizontal logos
            useContainer: false,

            // [FALLBACK] SVG markup rendered if the logo image fails to load
            fallbackSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>`,
        },

        theme: {
            // [CONFIG] Initial theme for first-time visitors: "system" | "dark" | "light"
            defaultMode: "system",

            // [CONFIG] Show (true) or hide (false) the Sun/Moon toggle button in header
            showThemeToggle: true,
        }
    },

    // ---------------------------------------------------------------------
    // 3. Header Action Links (Top-Right Controls)
    // ---------------------------------------------------------------------
    // [REQUIRED] Update links to match your project repository or docs
    headerLinks: [
        {
            label: "GitHub",
            href: "https://github.com/LABEIM", // Update to your project repo e.g. "https://github.com/LABEIM/project-name"
            icon: "fa-brands fa-github",
            external: true
        }
    ],

    // ---------------------------------------------------------------------
    // 4. Hero / Main Content
    // ---------------------------------------------------------------------
    content: {
        // [OPTIONAL] Status or announcement pill badge above main title
        badge: {
            enabled: false,             // Set to true to show the badge
            text: "Under Development",  // Badge text
            icon: "fa-solid fa-sparkles"// FontAwesome icon class
        },

        // [REQUIRED] Main headline
        headline: "Something new is coming soon.",

        // [REQUIRED] Subheading description
        description: "Coming Soon Web Template for EIM Lab research.",

        // [OPTIONAL] Call-to-Action button below description
        cta: {
            enabled: false,                      // Set to true to show the CTA button
            text: "Get in Touch",                // Button text
            href: "mailto:laboratoriumeim@gmail.com", // Target link (mailto:, URL, etc.)
            icon: "fa-solid fa-arrow-right",     // Button icon
            external: false                      // Open in new tab (true/false)
        }
    },

    // ---------------------------------------------------------------------
    // 5. Footer Information
    // ---------------------------------------------------------------------
    footer: {
        // [OPTIONAL] Copyright notice
        copyright: "Copyright © 2026 Enterprise Infrastructure Management Research Laboratory.",

        // [OPTIONAL] Physical address / laboratory location
        address: "Gedung TULT Lantai 8, Ruang TULT.08.09, Telkom University, Bandung, Indonesia",

        // [OPTIONAL] Quick navigation links (separated by |)
        quickLinks: [
            {
                label: "Website Lab",
                href: "https://eimlab.org",
                external: true
            },
            {
                label: "Hubungi Kami",
                href: "mailto:laboratoriumeim@gmail.com", // Update with project contact email
                external: false
            }
        ],

        // [OPTIONAL] Social media profile links at the bottom
        socialLinks: [
            {
                platform: "GitHub",
                href: "https://github.com/LABEIM",
                icon: "fa-brands fa-github"
            },
            {
                platform: "Instagram",
                href: "https://www.instagram.com/eimresearchlab/",
                icon: "fa-brands fa-instagram"
            },
            {
                platform: "LinkedIn",
                href: "https://www.linkedin.com/company/keprofesian-enterprise-infrastructure-management-eim/",
                icon: "fa-brands fa-linkedin"
            }
        ]
    }
};

// Expose CONFIG globally to window
if (typeof window !== "undefined") {
    window.CONFIG = CONFIG;
}
