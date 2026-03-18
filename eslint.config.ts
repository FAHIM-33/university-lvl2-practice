import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import ts from 'typescript'

export default defineConfig([
  {
    ignores: ['.node_modules/*', '.env', '.dist/*'],
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, ts },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off',
      // 'no-console':'error',
      'no-undef':"error",
      'no-unused-expressions': 'error',
      'no-unreachable': 'error',
    },
  },
])
