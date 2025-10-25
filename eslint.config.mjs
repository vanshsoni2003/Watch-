import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { next } from "@next/eslint-plugin-next";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create FlatCompat instance
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Combined ESLint configuration
const eslintConfig = [
  // Extend Next.js core web vitals rules
  ...compat.extends("next/core-web-vitals"),

  // Ignored folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // Plugin and rules for JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": next,
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      // You can add more custom rules here
    },
  },
];

export default eslintConfig;
