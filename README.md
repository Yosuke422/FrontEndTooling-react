# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# FrontEndApp
FrontEndApp is a comprehensive boilerplate for building web frontend projects in React. It comes pre-configured with various tools and features to kickstart your development process efficiently.

# Installation
## vite
```bash
 npm install --save-dev vite
```
Once Vite is installed, you can create a Vite configuration file. Run the following command:
```bash
 npx create-vite
```
## Jest
```bash
npm install --save-dev jest
```
- Create a folder `__tests__` and a file `sum.test.js`
- Create a file `sum.js`
- `sum.js` and `sum.test.js` are exemples that will let us know if the test is successful

```bash
// sum.js

function sum(a, b) {
  return a + b;
}

module.exports = sum;
```
```bash
// sum.test.js

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
```bash
"scripts": {
    "test": "jest"
  }
```
 ```bash
  npm run test
 ```
to run the test

## ESlint && Prettier
```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```
- Create a eslintConfig
```bash
 npx eslint --init
```
- Create a file `.prettierrc.cjs
  ```bash
  module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,
  };
  ```

## CommitLint
```bash
npm install -g @commitlint/cli @commitlint/config-conventional
```
- Create a file `commitlint.config.cjs`
  ```bash
  module.exports = { extends: ['@commitlint/config-conventional'] };
  ```
- Add in `package.json` :
  ```bash
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  ```

## Husky 
```bash
npx husky-init && npm install
```
```bash
npx husky add .husky/pre-commit "npm test"
```
```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
- Add to `package.json`
  ```bash
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  ```
  ```bash
  npx husky install
  ```

## Sass
```bash
npm install sass
```
```bash
npm install --save-dev vite-plugin-sass```
- In `vite.config.js`. import and use the `vite-plugin-sass`:
  ```bash
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import VitePluginSass from 'vite-plugin-sass'
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react(), VitePluginSass()],
  })
  ```

## StoryBook
```bash
npm install --save-dev @storybook/react
```
- Create a Configuration File:
```bash
npx sb init
```
- Create Stories:Create a folder `components` and inside a file `buttons.stories.jsx`:
  ```bash
  import React from 'react'
  import { Button } from '../stories/Button'
  
  export default {
    title: 'Button',
    component: Button,
  };
  
  export const Primary = () => <Button primary>Primary Button</Button>
  export const Secondary = () => <Button backgroundColor={'yellow'}>Secondary Button</Button>
  ```
  ```bash
  npm run storybook
  ```
## Pokedex
Created a Pokedex where it will generate a new Pokemon with its stats whenever you click on the button Load New Pokemon
  










