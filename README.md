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

## Tenants
Choose your tenant depends from your location

Two tenants are supported: [uk, eu]

Each tenant has different validation message translation

## Open Cypress GUI (local run)
uk environment:
```
test:open:uk
```

eu environment:
```
test:open:eu
```

## Headless run
uk environment
```
npm run test:headless:uk ${browser}
```

eu environment
```
npm run test:headless:eu ${browser}
```

example:
```
npm run test:headless:eu chrome
```
