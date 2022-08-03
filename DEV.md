# DEV

## Create Component

- create component file in `src/components/`
- create entry module in `src/index.ts`

## Test Component

### Unit Test

- create test files:
  - source-code.js
  - source-code.spec.js
- run command `npm run test`

### Browser Test

- import test component in `dev/src/App.vue`, or create multiple components in `dev/src`
- run command `npm start`

## Build Component

- run command `npm run build`
- the dest in `lib` folder

## Create Document

- run command `npm run build` to get component dest code
- run command `npm run docs:dev` start docs preview
- edit `docs/*.md` show your component features
- run command `npm run docs:build` to build docs website
- the dest in `dist` folder

> `_layouts` is GitHub static pages, if you don't need, remove it.
