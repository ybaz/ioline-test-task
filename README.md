# Iodine Website Automation Task

## Preparation
```
1. Clone the repo
2. Navigate to project folder
```

## Operation system
You can run this framework on both Windows or Mac OS

## Project setup
```
npm install
```

## Environment
Two environments are supported: [uk, ua]
Each tenant has different validation message translation

## Open Cypress GUI (local run)
uk environment:
```
test:open:uk
```

uk environment:
```
test:open:ua
```

## Headless run
uk environment
```
npm run test:headless:uk ${browser}
```

ua environment
```
npm run test:headless:ua ${browser}
```

example:
```
npm run test:headless:ua chrome
```
