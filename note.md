[Tutorial Link](https://blog.cloudboost.io/create-a-react-application-from-scratch-part-1-introduction-b2e66dfb3aae?)

Thing I saw...
- babel 6.23 does not support React.Fragment shorthand `<>` (it needs v7^)
- in webpack config, using `eslint-loader` to check lint error before bundling can make your life harder~
- using `yarn` can result something different from `npm` such as this script `"build": "NODE_ENV=production npx env-cmd .env webpack --config ./webpack/config-prod.babel.js"`