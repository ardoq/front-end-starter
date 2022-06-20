# front-end starter boilerplate

### Features
- React (with hot reloading)
- Styled Components (with [stylelint](https://stylelint.io/))
- Webpack 4
- TypeScript & ESlint & Prettier (via [@ardoq/shared-configs](https://github.com/ardoq/shared-configs))

### How to use this?
1. `git clone git@github.com:ardoq/front-end-starter.git`
2. `cd front-end-starter && rm -rf .git`
3. `yarn install`
4. Transform it into your needs!

### Scripts:
- `yarn start` (development with hot-reloading)
- `yarn lint` (eslint)
- `yarn stylelint` (eslint)
- `yarn check-types` (TypeScript check)
- `yarn build` (Build to `/dist`, uses webpack.prod.js

### Recommended VSCode extensions:
- [VSCode Stylelint](https://github.com/stylelint/vscode-stylelint)
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
with config option `"eslint.codeActionsOnSave.mode": "all"` (to fix eslint issues and auto-format on save)
