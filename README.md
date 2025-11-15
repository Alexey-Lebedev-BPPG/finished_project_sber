# Результаты сборки на webpack:

npm run build

> homework-react-21951242@1.0.0 build
> cross-env NODE_ENV=production webpack --config webpack/webpack.config.js --env env=prod

Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
asset static/scripts/main.a96d1115b6fec15860ad.js 607 KiB [emitted] [immutable] [minimized] [big] (name: main) 1 related asset
asset static/styles/main.9be9a7afe6f12945b644.css 39.5 KiB [emitted] [immutable] (name: main)
asset index.html 410 bytes [emitted]
Entrypoint main [big] 646 KiB = static/styles/main.9be9a7afe6f12945b644.css 39.5 KiB static/scripts/main.a96d1115b6fec15860ad.js 607 KiB
orphan modules 3.23 MiB (javascript) 17.4 KiB (runtime) [orphan] 1219 modules
runtime modules 2.03 KiB 5 modules
cacheable modules 1.74 MiB (javascript) 39.5 KiB (css/mini-extract)
  javascript modules 1.74 MiB 97 modules
  css modules 39.5 KiB
    modules by path ./src/shared/ 8.24 KiB 7 modules
    modules by path ./src/widgets/ 5.41 KiB 5 modules
    modules by path ./src/pages/ 9.67 KiB
      css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProductPage/ui/ProductPage.module.css 4.97 KiB [built] [code generated]
      + 3 modules
    modules by path ./src/app/ 2.58 KiB
      css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/styles/normalize.css 1.73 KiB [built] [code generated]
      css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/styles/styles.css 876 bytes [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/react-toastify/dist/ReactToastify.css 13.6 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  static/scripts/main.a96d1115b6fec15860ad.js (607 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (646 KiB)
      static/styles/main.9be9a7afe6f12945b644.css
      static/scripts/main.a96d1115b6fec15860ad.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.93.0 compiled with 3 warnings in 18374 ms

# Результаты проверки через profiler для страницы логина:

![alt text](/docs/assets/image.png)

# Результаты сборки на vite:

