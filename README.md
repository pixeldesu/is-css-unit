# is-css-unit
Check if a given value contains a valid CSS unit

## Installation

```
npm install --save is-css-unit
```

## Usage

```js
const isCSSUnit = require('is-css-unit').isCSSUnit;

console.log(isCSSUnit('300px'))
// => true

console.log(isCSSUnit('10bark'))
// => false
```

If you need more specific checks, you can require different functions:

* `isFontUnit`: checks for all relative font units (`em`, `ex`, `ch`, `rem`)
* `isViewportUnit`: checks for all viewport units (`vw`, `vh`, `vmin`, `vmax`)
* `isAbsoluteUnit`: checks for all absolute units (`cm`, `mm`, `q`, `in`, `pt`, `pc`, `px`)
* `isAngleUnit`: checks for all angle units (`deg`, `grad`, `rad`, `turn`)
* `isDurationUnit`: checks for all duration units (`s`, `ms`)
* `isFrequencyUnit`: checks for all frequency units (`Hz`, `kHz`)
* `isResolutionUnit`: checks for all resolution units (`dpi`, `dpcm`, `dppx`)

## License

`is-css-unit` is licensed under the MIT License