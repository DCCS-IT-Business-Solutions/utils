# utils &middot; ![travis build](https://img.shields.io/travis/DCCS-IT-Business-Solutions/utils.svg) ![npm version](https://img.shields.io/npm/v/@dccs/utils.svg)

A collection of small to medium sized utils that don't fit into a package of their own.

@dccs/utils is written in [Typescript](https://www.typescriptlang.org/) and comes with its own type definitions.

## Installation

You should install [utils with npm or yarn](https://www.npmjs.com/package/@dccs/utils):

    npm install @dccs/utils
    or
    yarn add @dccs/utils

This command will download and install utils and all required dependencies.

## Features

## sleep

Retuns a `Promise` that resolves after `ms` milliseconds.

```javascript
sleep(1000).then(() => console.log("after 1 second"));

// Or with the async syntax:
await sleep(1000);
console.log("after 1 second");
```

## timespanToText

Returns a `string` representing the time that has passed between the two dates.

```javascript
window.console.log(timeSpanToText(startDate, endDate));
```

| Timespan      | Result                      |
| ------------- | --------------------------- |
| same hour     | `10:15 - 45 15.Dec.2020`    |
| same day      | `15:30 - 18:20 10.Jun.2019` |
| same month    | `10 - 15.Dec.2022`          |
| same year     | `10.Nov - 5.Nov.2010`       |
| differnt year | `10.Nov.2010 - 5.Jun.2011`  |

## Contributing

### License

@dccs/utils is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE)
