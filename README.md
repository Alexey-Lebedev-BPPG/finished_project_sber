## Что было сделано:

- вынесены ui компоненты в папку '/src/shared'
- изолированы фичи по слоям shared/, features/, pages/
- убраны лишние пропсы, заменены на селекторы
- необходимые компоненты обернуты в memo и использованы useMemo и useCallback
- реализован компонент [Modal](/src/shared/ui/Modal/Modal.tsx) с помощью createPortal и обработкой ESC/clickoverlay
- реализован компонент [ReviewModal](/src/widgets/ReviewModal/ReviewModal.tsx) в котором есть счетчик фокусов, автофокус на поле ввода, useOptimistic:
  ![alt text](/docs/assets/image3.png)
- сформирована конфигурация проекта на vite с использованием swc
- составлен отчет по сравнению показателей webpack с vite

# Результаты сборки на webpack:

> npm run build

```homework-react-21951242@1.0.0 build
cross-env NODE_ENV=production webpack --config webpack/webpack.config.js --env env=prod

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
```

# Результаты проверки через profiler для страницы логина для webpack:

![alt text](/docs/assets/image.png)

# Результаты сборки на vite:

> npm run build:vite

```
finished-project-sber@1.0.0 build:vite
tsc -b && vite build

vite v7.2.2 building client environment for production...
✓ 703 modules transformed.
dist/index.html 0.52 kB │ gzip: 0.31 kB
dist/assets/NotFoundPage-BbjCeKZe.css 0.13 kB │ gzip: 0.13 kB
dist/assets/WithQuery-BqG72aGh.css 0.58 kB │ gzip: 0.27 kB
dist/assets/ProfilePage-DHZ3r13r.css 1.44 kB │ gzip: 0.57 kB
dist/assets/CartPage-DAQCXSAv.css 4.30 kB │ gzip: 1.31 kB
dist/assets/ProductPage-BV7I4Cs6.css 8.84 kB │ gzip: 1.88 kB
dist/assets/index-CpYOg7_I.css 27.32 kB │ gzip: 5.86 kB
dist/assets/NotFoundPage-CtBSzWDX.js 0.35 kB │ gzip: 0.27 kB
dist/assets/FavoritesPage-DT2LdqJG.js 0.43 kB │ gzip: 0.31 kB
dist/assets/ButtonBack-C2HIK9hS.js 0.82 kB │ gzip: 0.51 kB
dist/assets/ProfilePage-C7x7uM4l.js 1.64 kB │ gzip: 0.67 kB
dist/assets/SignUpPage-CWhXNZfr.js 1.83 kB │ gzip: 1.02 kB
dist/assets/SignInPage-q7BCffD8.js 1.85 kB │ gzip: 1.03 kB
dist/assets/HomePage-DFpN08DO.js 2.88 kB │ gzip: 1.49 kB
dist/assets/CartPage-Cqk2SiKx.js 6.07 kB │ gzip: 2.16 kB
dist/assets/WithQuery-9grMeaI4.js 9.87 kB │ gzip: 3.64 kB
dist/assets/ProductPage-9bKZYNW8.js 16.22 kB │ gzip: 6.46 kB
dist/assets/getMessageFromError-DrY3tB8c.js 45.74 kB │ gzip: 14.67 kB
dist/assets/validator-C6a6Sans.js 142.25 kB │ gzip: 45.53 kB
dist/assets/index-NmI0X8ty.js 508.07 kB │ gzip: 169.73 kB

✓ built in 4.58s
```

# Результаты проверки через profiler для страницы логина для vite:

![alt text](/docs/assets/image1.png)

# Сравнительный анализ сборок:

## 1. Размер бандла

| Метрика      | Webpack  | Vite       |
| ------------ | -------- | ---------- |
| Основной JS  | 607 KiB  | 508 KiB    |
| Основной CSS | 39.5 KiB | 27.32 KiB  |
| Общий размер | 646 KiB  | 536 KiB    |
| Gzip JS      | -        | 169.73 KiB |

**Вывод**: Vite выигрывает по размеру бандла на 110 KiB (17%)

## 2. Производительность сборки

| Метрика      | Webpack  | Vite       |
| ------------ | -------- | ---------- |
| Время сборки | 18.4 сек | 4.6 сек    |
| Скорость     | 1x       | 4x быстрее |

**Вывод**: Vite значительно быстрее

## 3. Code Splitting

| Метрика          | Webpack          | Vite                        |
| ---------------- | ---------------- | --------------------------- |
| Разделение кода  | Один бандл       | Автоматическое              |
| Чанки            | 1 JS + 1 CSS     | 20+ оптимизированных чанков |
| Ленивая загрузка | Ручная настройка | Автоматическая              |

**Вывод**: Vite дает лучшее разделение кода "из коробки"

## 4. Предупреждения и оптимизации

    Webpack:
      Превышен лимит размера бандла (607 KiB > 244 KiB)
      Рекомендует code splitting
      Caniuse-lite устарел
    Vite:
      Нет предупреждений о размере
      Автоматическая оптимизация
      Современные форматы (ES modules)

# Структура папок в проекте:

```
├── 📁 app
│   ├── 📁 providers
│   │   ├── 📁 ErrorBoundary
│   │   │   ├── 📁 ui
│   │   │   │   └── 📄 ErrorBoundary.tsx
│   │   │   └── 📄 index.tsx
│   │   ├── 📁 StoreProvider
│   │   │   ├── 📁 config
│   │   │   │   ├── 📄 stateSchema.ts
│   │   │   │   └── 📄 store.ts
│   │   │   ├── 📁 ui
│   │   │   │   └── 📄 StoreProvider.tsx
│   │   │   └── 📄 index.ts
│   │   ├── 📁 Toastify
│   │   │   └── 📄 index.tsx
│   │   └── 📁 router
│   │       ├── 📁 config
│   │       │   └── 📄 routeConfig.tsx
│   │       ├── 📁 ui
│   │       │   ├── 📄 AppRouter.tsx
│   │       │   └── 📄 RequireAuth.tsx
│   │       └── 📄 index.tsx
│   ├── 📁 styles
│   │   ├── 🎨 index.css
│   │   └── 🎨 normalize.css
│   ├── 📁 types
│   │   └── 📄 global.d.ts
│   └── 📄 App.tsx
├── 📁 entities
│   ├── 📁 Product
│   │   ├── 📁 api
│   │   │   └── 📄 productApi.ts
│   │   ├── 📁 model
│   │   │   ├── 📁 lib
│   │   │   │   └── 📁 hooks
│   │   │   │       ├── 📄 useCount.ts
│   │   │   │       └── 📄 useProducts.ts
│   │   │   ├── 📁 selectors
│   │   │   │   ├── 📄 cartSelectors.ts
│   │   │   │   └── 📄 productSelectors.ts
│   │   │   ├── 📁 slice
│   │   │   │   └── 📄 productSlice.ts
│   │   │   └── 📁 types
│   │   │       └── 📄 productSchema.ts
│   │   ├── 📁 ui
│   │   │   ├── 📁 Card
│   │   │   │   ├── 🎨 Card.module.css
│   │   │   │   └── 📄 Card.tsx
│   │   │   ├── 📁 CartCounter
│   │   │   │   ├── 🎨 CartCounter.module.css
│   │   │   │   └── 📄 CartCounter.tsx
│   │   │   └── 📁 LikeButton
│   │   │       ├── 🎨 LikeButton.module.css
│   │   │       └── 📄 LikeButton.tsx
│   │   ├── 📝 README.md
│   │   └── 📄 index.ts
│   └── 📁 User
│       ├── 📁 api
│       │   └── 📄 userApi.ts
│       ├── 📁 model
│       │   ├── 📁 selectors
│       │   │   └── 📄 userSelectors.ts
│       │   ├── 📁 slice
│       │   │   └── 📄 userSlice.ts
│       │   └── 📁 types
│       │       └── 📄 userSchema.ts
│       ├── 📝 README.md
│       └── 📄 index.ts
├── 📁 features
│   ├── 📁 ButtonBack
│   │   ├── 📁 ui
│   │   │   └── 📄 ButtonBack.tsx
│   │   └── 📄 index.ts
│   ├── 📁 LoadMore
│   │   ├── 📁 model
│   │   │   └── 📁 lib
│   │   │       └── 📁 hooks
│   │   │           └── 📄 useLoadMore.ts
│   │   ├── 📁 ui
│   │   │   └── 📄 LoadMore.tsx
│   │   └── 📄 index.ts
│   ├── 📁 Logo
│   │   ├── 📁 ui
│   │   │   ├── 🎨 Logo.module.css
│   │   │   └── 📄 Logo.tsx
│   │   └── 📄 index.ts
│   ├── 📁 ProductCartCounter
│   │   ├── 📁 model
│   │   │   └── 📁 lib
│   │   │       └── 📁 hooks
│   │   │           └── 📄 useProductCartCounter.ts
│   │   ├── 📁 ui
│   │   │   ├── 🎨 ProductCartCounter.module.css
│   │   │   └── 📄 ProductCartCounter.tsx
│   │   └── 📄 index.ts
│   ├── 📁 Search
│   │   ├── 📁 model
│   │   │   └── 📁 lib
│   │   │       └── 📁 hooks
│   │   │           └── 📄 useProductsSearchForm.ts
│   │   ├── 📁 ui
│   │   │   ├── 🎨 Search.module.css
│   │   │   └── 📄 Search.tsx
│   │   └── 📄 index.ts
│   └── 📁 Sort
│       ├── 📁 model
│       │   └── 📁 lib
│       │       └── 📁 hooks
│       │           └── 📄 useSort.ts
│       ├── 📁 ui
│       │   └── 📄 Sort.tsx
│       └── 📄 index.ts
├── 📁 pages
│   ├── 📁 CartPage
│   │   ├── 📁 ui
│   │   │   ├── 📁 CartAmount
│   │   │   │   ├── 📁 ui
│   │   │   │   │   └── 📄 CartAmount.tsx
│   │   │   │   └── 📄 index.ts
│   │   │   ├── 📁 CartItem
│   │   │   │   ├── 📁 ui
│   │   │   │   │   └── 📄 CartItem.tsx
│   │   │   │   └── 📄 index.ts
│   │   │   ├── 📁 CartList
│   │   │   │   ├── 📁 ui
│   │   │   │   │   └── 📄 CartList.tsx
│   │   │   │   └── 📄 index.ts
│   │   │   └── 📁 CartPage
│   │   │       ├── 📄 CartPage.async.tsx
│   │   │       ├── 🎨 CartPage.module.css
│   │   │       └── 📄 CartPage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 FavoritesPage
│   │   ├── 📁 ui
│   │   │   ├── 📄 FavoritesPage.async.tsx
│   │   │   └── 📄 FavoritesPage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 HomePage
│   │   ├── 📁 ui
│   │   │   ├── 📄 HomePage.async.tsx
│   │   │   └── 📄 HomePage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 NotFoundPage
│   │   ├── 📁 ui
│   │   │   ├── 🎨 NotFoudPage.module.css
│   │   │   ├── 📄 NotFoundPage.async.tsx
│   │   │   └── 📄 NotFoundPage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 PageError
│   │   ├── 📁 ui
│   │   │   ├── 🎨 PageError.module.css
│   │   │   └── 📄 PageError.tsx
│   │   └── 📄 index.tsx
│   ├── 📁 ProductPage
│   │   ├── 📁 ui
│   │   │   ├── 📄 ProductPage.async.tsx
│   │   │   ├── 🎨 ProductPage.module.css
│   │   │   └── 📄 ProductPage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 ProfilePage
│   │   ├── 📁 ui
│   │   │   ├── 📄 ProfilePage.async.tsx
│   │   │   ├── 🎨 ProfilePage.module.css
│   │   │   └── 📄 ProfilePage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 SignInPage
│   │   ├── 📁 ui
│   │   │   ├── 📄 SignInPage.async.tsx
│   │   │   └── 📄 SignInPage.tsx
│   │   └── 📄 index.ts
│   ├── 📁 SignUpPage
│   │   ├── 📁 ui
│   │   │   ├── 📄 SignUpPage.async.tsx
│   │   │   └── 📄 SignUpPage.tsx
│   │   └── 📄 index.ts
│   └── 📁 layouts
│       └── 📁 MainLayout
│           ├── 📁 ui
│           │   ├── 🎨 MainLayout.module.css
│           │   └── 📄 MainLayout.tsx
│           └── 📄 index.ts
├── 📁 shared
│   ├── 📁 api
│   │   └── 📄 rtkApi.ts
│   ├── 📁 assets
│   │   ├── 📁 icons
│   │   │   ├── 🖼️ back.svg
│   │   │   ├── 🖼️ cart.svg
│   │   │   ├── 🖼️ favorites.svg
│   │   │   ├── 🖼️ like.svg
│   │   │   ├── 🖼️ logo.svg
│   │   │   ├── 🖼️ profile.svg
│   │   │   ├── 🖼️ quality.svg
│   │   │   ├── 🖼️ search.svg
│   │   │   ├── 🖼️ star.svg
│   │   │   ├── 🖼️ trash.svg
│   │   │   └── 🖼️ truck.svg
│   │   └── 📁 images
│   │       ├── 🖼️ instagram.svg
│   │       ├── 🖼️ telegram.svg
│   │       ├── 🖼️ viber.svg
│   │       ├── 🖼️ vk.svg
│   │       └── 🖼️ whatsapp.svg
│   ├── 📁 consts
│   │   ├── 📄 router.ts
│   │   └── 📄 urls.ts
│   ├── 📁 lib
│   │   ├── 📁 WithQuery
│   │   │   └── 📄 WithQuery.tsx
│   │   ├── 📁 contexts
│   │   │   └── 📁 ThemeContext
│   │   │       └── 📄 ThemeContext.tsx
│   │   ├── 📁 helpers
│   │   │   ├── 📄 getMessageFromError.ts
│   │   │   ├── 📄 isLiked.ts
│   │   │   ├── 📄 objectHasProperty.ts
│   │   │   └── 📄 validator.ts
│   │   └── 📁 hooks
│   │       ├── 📄 redux.ts
│   │       ├── 📄 useDebounce.ts
│   │       └── 📄 usePagination.ts
│   ├── 📁 types
│   │   ├── 📄 router.ts
│   │   └── 📄 signFormValues.ts
│   └── 📁 ui
│       ├── 📁 Button
│       │   └── 📄 Button.tsx
│       ├── 📁 Icon
│       │   ├── 🎨 Icon.module.css
│       │   └── 📄 Icon.tsx
│       ├── 📁 Input
│       │   ├── 🎨 Input.module.css
│       │   └── 📄 Input.tsx
│       ├── 📁 Modal
│       │   ├── 🎨 Modal.module.css
│       │   └── 📄 Modal.tsx
│       ├── 📁 Price
│       │   ├── 🎨 Price.module.css
│       │   └── 📄 Price.tsx
│       ├── 📁 Rating
│       │   └── 📄 Rating.tsx
│       └── 📁 Spinner
│           ├── 🎨 Spinner.module.css
│           └── 📄 Spinner.tsx
├── 📁 widgets
│   ├── 📁 CardList
│   │   ├── 📁 ui
│   │   │   ├── 🎨 CardList.module.css
│   │   │   └── 📄 CardList.tsx
│   │   └── 📄 index.ts
│   ├── 📁 Footer
│   │   ├── 📁 consts
│   │   │   └── 📄 footer.tsx
│   │   ├── 📁 ui
│   │   │   ├── 🎨 Footer.module.css
│   │   │   └── 📄 Footer.tsx
│   │   └── 📄 index.ts
│   ├── 📁 Header
│   │   ├── 📁 ui
│   │   │   ├── 🎨 Header.module.css
│   │   │   └── 📄 Header.tsx
│   │   └── 📄 index.ts
│   ├── 📁 ReviewList
│   │   ├── 📁 ui
│   │   │   ├── 📁 ReviewForm
│   │   │   │   ├── 🎨 ReviewForm.module.css
│   │   │   │   └── 📄 ReviewForm.tsx
│   │   │   └── 📁 ReviewList
│   │   │       ├── 🎨 ReviewList.module.css
│   │   │       └── 📄 ReviewList.tsx
│   │   └── 📄 index.ts
│   ├── 📁 ReviewModal
│   │   ├── 🎨 ReviewModal.module.css
│   │   └── 📄 ReviewModal.tsx
│   ├── 📁 SignInForm
│   │   ├── 📁 ui
│   │   │   └── 📄 SignInForm.tsx
│   │   └── 📄 index.ts
│   └── 📁 SignUpForm
│       ├── 📁 ui
│       │   └── 📄 SignUpForm.tsx
│       └── 📄 index.ts
└── 📄 index.tsx
```
