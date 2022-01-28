# Pyro

> Vue 3 + Vuex 4 + Vite 2 + SSR template (vite-ssr)

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next)

- [Vite 2](https://github.com/vitejs/vite)

- [pnpm](https://pnpm.js.org/)

- [ESBuild](https://github.com/evanw/esbuild)

- [Vuex](https://github.com/vuejs/vuex)

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 🖨 Server-side rendering (SSR) en Node.js via [vite-ssr](https://github.com/frandiox/vite-ssr)

- 🦾 TypeScript, bien sûr

<br>

## All inclusive

### Plugins

- [Vuex](https://github.com/vuejs/vuex) - store centralisé avec modules
- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - système de route à base de fichiers
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts pour les pages
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - auto import des composants
- [VueUse](https://github.com/antfu/vueuse) - collection de composants pour l'api composition
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulation du head

### Coding Style

- [ESLint](https://eslint.org/) single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/) - package manager rapide et ascétique
- [`vite-ssr`](https://github.com/frandiox/vite-ssr) - Server-side rendering
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Usage

Installer [pnpm](https://pnpm.io/) avec npm (mouarf)

```bash
npm install -g pnpm
```

### Development

```bash
pnpm dev # SSR development
pnpm dev:spa # SPA without SSR
```

Et enfin visitez : http://localhost:1337

### Build

Pour construire l'appli :

```bash
pnpm build
```

Les fichiers générés sont dans `dist`
