# The Front
The front is a vueJS app generated from vue cli 3.0.0rc10.

Selected options are: 
- Router
- Vuex
- SCSS -> CSS preprocessor
- Linter/Formater
- Unit testing
- E2E testing

- No router history mode

- Basic linter (error prevention only)

- No auto Lint

- Jest

- Nightwatch

- Dedicated config files


## Project setup (to use in "host" mode... not in "container" mode => generated README file from vue cli)
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

# WARNINGS
due to a vue cli bug, package.json commandes have been changed from
```
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
},
``` 
to
```
"scripts": {
    "serve": "../node_modules/\\@vue/cli-service/bin/vue-cli-service.js serve --open",
    "build": "../node_modules/\\@vue/cli-service/bin/vue-cli-service.js build",
    "lint": "../node_modules/\\@vue/cli-service/bin/vue-cli-service.js lint"
},
```
The ".." allow npm to find vue cli service. Without it, it leads to an :
```
sh: vue-cli-service: command not found
```
This may have to be changed when fixed... vuejs/vue-cli #1105