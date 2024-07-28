import js from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  ...js.configs.recommended,
  ...eslintPluginVue.configs['flat/essential'],

  files: ['*.vue', '**/*.vue'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: {
    vue: eslintPluginVue,
    prettier: eslintPluginPrettier, // Add Prettier plugin
  },
  rules: {
    'vue/multi-word-component-names': 'off', // Disable the rule
    'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
  },
});
