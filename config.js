/*  ============================================================
    CONFIG.JS — Centralized configuration for the blog
    ------------------------------------------------------------
    This file contains all sensitive and environment-specific
    values. Add it to your .gitignore so it stays out of
    version control:

        echo "config.js" >> .gitignore

    Then on your production server, create this file with the
    real values.
    ============================================================ */

const SITE_CONFIG = {
    // ── Blog Data ─────────────────────────────────────────────
    // Path to your posts JSON file (relative to the HTML pages)
    POSTS_FILE: "posts.json",

    // Number of post cards per page on blog.html
    POSTS_PER_PAGE: 6,

    // ── Cusdis Comments ──────────────────────────────────────
    // 1) Create a free account at https://cusdis.com
    // 2) Add your website in the dashboard
    // 3) Click "Embed Code" and copy your App ID
    // 4) Paste it below
    CUSDIS_APP_ID: "cf7e15c8-177e-44d6-a36b-fc3b0857ea11",

    // If you self-host Cusdis, change this to your own URL.
    // Otherwise leave it as-is for the free cloud version.
    CUSDIS_HOST: "https://cusdis.com",

    // ── Site Info (used for sharing & Open Graph) ─────────────
    SITE_NAME: "UX Ramirez",
    SITE_URL: "https://uxramirez.com"
};
