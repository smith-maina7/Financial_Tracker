import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  // Frontend files (Vue + JS)
  {
    name: 'frontend/files-to-lint',
    files: ['frontend/**/*.{js,mjs,jsx,vue}'], // adjust path to your frontend folder
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // your frontend-specific rules here
    },
    extends: [js.configs.recommended, ...pluginVue.configs['flat/essential'], skipFormatting],
  },

  // Backend files (Node.js)
  {
    name: 'backend/files-to-lint',
    files: ['backend/**/*.js'], // adjust if your backend files are elsewhere
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'script', // Node.js usually uses CommonJS, so 'script' is fine
        ecmaVersion: 2021,
      },
    },
    rules: {
      // your backend-specific rules here, e.g.:
      // 'no-console': 'off'  // allow console in backend if you want
    },
    extends: [js.configs.recommended, skipFormatting],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
])
