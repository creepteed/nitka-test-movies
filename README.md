# nitka-test

## Project setup
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
### Use Config to set up sits/rows/seed settings in './src/gridConfig.js'

```
status_code: { //status codes
    free: 100,
    selected: 101,
    booked: 102
  },
  rows: 10, //amount of default rows
  sits: 10, //amount of default sits
  random_seed: {
    enable: true, //seed random booked sits
    sits_to_seed: 10 //amount of sits to seed
  }

```
