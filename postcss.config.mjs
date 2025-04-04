/** @type {import("postcss-load-config").Config} */
const config = {
    plugins: {
        /**
         * Tailwind can do this natively with v4, but we still need it because PostCSS is more lenient in accepting
         * malformed CSS files, which is unfortunately the case with our design tokens.
         */
        "postcss-import": {},

        /**
         * Required to rebase imported `url()` references to `node_modules`, so that Next.js understands them.
         */
        "postcss-url": {},

        "@tailwindcss/postcss": {},
    },
};

export default config;
