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
};
