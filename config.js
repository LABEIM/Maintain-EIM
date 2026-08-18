/**
 * =========================================================================
 * Coming Soon Web Template - Configuration
 * =========================================================================
 *
 * Customize all settings, texts, links, logos, and branding for your project here.
 * You DO NOT need to edit index.html or CSS!
 *
 * All text fields support either:
 * - Bilingual Object: { en: "English text", id: "Teks Bahasa Indonesia" }
 * - Plain String: "Text in single language" (used for all languages)
 *
 * -------------------------------------------------------------------------
 * NEW PROJECT SETUP CHECKLIST:
 * -------------------------------------------------------------------------
 * 1. [REQUIRED] Update `meta.title` and `meta.description` with project name.
 * 2. [REQUIRED] Update `branding.logo` (logo image URLs, alt text, homepage link).
 * 3. [REQUIRED] Update `headerLinks` (e.g., link to your project's GitHub repo).
 * 4. [REQUIRED] Update `content.headline` and `content.description`.
 * 5. [OPTIONAL] Configure `i18n` (default language, switcher visibility).
 * 6. [OPTIONAL] Enable `content.cta` (call-to-action button).
 * 7. [OPTIONAL] Update `footer` contact email (`Hubungi Kami`) and social links.
 * =========================================================================
 */

const CONFIG = {
    // ---------------------------------------------------------------------
    // 1. Language & Internationalization (i18n) Settings
    // ---------------------------------------------------------------------
    i18n: {
        // [CONFIG] Enable (true) or disable (false) multi-language support
        enabled: true,

        // [CONFIG] Default language for first-time visitors: "en" | "id" | "system"
        defaultLanguage: "system",

        // [CONFIG] Show (true) or hide (false) the EN/ID language switcher in header
        showSwitcher: true,

        // [CONFIG] Supported language definitions
        languages: [
            { code: "en", label: "EN", title: "English" },
            { code: "id", label: "ID", title: "Bahasa Indonesia" }
        ]
    },

    // ---------------------------------------------------------------------
    // 2. Meta & SEO Settings
    // ---------------------------------------------------------------------
    meta: {
        // [REQUIRED] Browser tab title (e.g., "Project Name — Coming Soon")
        title: {
            en: "EIM Lab — Coming Soon Template",
            id: "EIM Lab — Template Segera Hadir"
        },

        // [REQUIRED] Search engine description shown on Google / preview cards
        description: {
            en: "Enterprise Infrastructure Management Research Laboratory - New web experience coming soon template.",
            id: "Laboratorium Riset Enterprise Infrastructure Management - Template pengalaman web baru segera hadir."
        },

        // [OPTIONAL] Browser tab icon (URL or relative path like "assets/favicon.png")
        favicon: "https://eimlab.org/assets/brand/eim-favicon.png",
    },

    // ---------------------------------------------------------------------
    // 3. Branding & Logo Settings
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
            alt: {
                en: "EIM Lab Logo",
                id: "Logo EIM Lab"
            },

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
    // 4. Header Action Links (Top-Right Controls)
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
    // 5. Hero / Main Content
    // ---------------------------------------------------------------------
    content: {
        // [REQUIRED] Main headline
        headline: {
            en: "Something new is coming soon.",
            id: "Sesuatu yang baru akan segera hadir."
        },

        // [REQUIRED] Subheading description
        description: {
            en: "Coming Soon Web Template for EIM Lab research.",
            id: "Template Web Segera Hadir untuk riset EIM Lab."
        },

        // [OPTIONAL] Call-to-Action button below description
        cta: {
            enabled: false,                      // Set to true to show the CTA button
            text: {
                en: "Get in Touch",
                id: "Hubungi Kami"
            },
            href: "mailto:laboratoriumeim@gmail.com", // Target link (mailto:, URL, etc.)
            icon: "fa-solid fa-arrow-right",     // Button icon
            external: false                      // Open in new tab (true/false)
        }
    },

    // ---------------------------------------------------------------------
    // 6. Footer Information
    // ---------------------------------------------------------------------
    footer: {
        // [OPTIONAL] Copyright notice
        copyright: {
            en: "Copyright © 2026 Enterprise Infrastructure Management Research Laboratory.",
            id: "Hak Cipta © 2026 Enterprise Infrastructure Management Research Laboratory."
        },

        // [OPTIONAL] Physical address / laboratory location
        address: {
            en: "TULT Building 8th Floor, Room TULT.08.09, Telkom University, Bandung, Indonesia",
            id: "Gedung TULT Lantai 8, Ruang TULT.08.09, Telkom University, Bandung, Indonesia"
        },

        // [OPTIONAL] Quick navigation links (separated by |)
        quickLinks: [
            {
                label: {
                    en: "Lab Website",
                    id: "Website Lab"
                },
                href: "https://eimlab.org",
                external: true
            },
            {
                label: {
                    en: "Contact Us",
                    id: "Hubungi Kami"
                },
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
