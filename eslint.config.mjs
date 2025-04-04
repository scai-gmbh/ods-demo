import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.plugins("eslint-plugin-react-compiler"),

    ...compat.extends("next/core-web-vitals", "next/typescript"),

    {
        rules: {
            "react-compiler/react-compiler": "error",
        },
    },

    // Turn off rules that are annoying during development.
    process.env.NODE_ENV !== "production"
        ? {
              rules: {
                  "no-unused-vars": "off",
              },
          }
        : {},
];

export default eslintConfig;
