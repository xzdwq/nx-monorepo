### MultiApp
Необходимо установить (если еще не установлено):
```bash
Node.js >=14.18.0        # Node.js   (среда разработки)
npm i -g nx              # NX        (для работы с nx в командной строке)
npm i -g @nestjs/cli     # Nest.js   (бэкенд фреймворк)
npm i -g @vue/cli        # Vue CLI   (для работы с vue из командной строки)
```
### Установка
```bash
# Клонируем приложение
git clone https://github.com/xzdwq/multi-app.git
cd multi-app
# Установка зависимостей
npm i
```

### Запуск
Из корня приложения (./multi-app)
```bash
nx serve mdm        # Запуск бэкенда на Nest.js
nx serve mdm-ui     # Запуск фронтенда на Vue3
```

<details>
<summary>Manual</summary>

- [Vue3](https://v3.vuejs.org/)
  - `npm i nx-vue3-vite -D`
  - `nx g nx-vue3-vite:app <app-name>`
  - run: `nx serve <app-name>`
- [Nest](https://nestjs.com)
  - `npm i -D @nrwl/nest`
- [React](https://reactjs.org)
  - `npm i -D @nrwl/react`
- Web (no framework frontends)
  - `npm i -D @nrwl/web`
- [Angular](https://angular.io)
  - `npm i -D @nrwl/angular`
- [Express](https://expressjs.com)
  - `npm i -D @nrwl/express`
- [Node](https://nodejs.org)
  - `npm i -D @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@multi-app/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

</details>