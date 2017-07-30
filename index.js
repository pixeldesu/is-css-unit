const fontUnit = ['em', 'ex', 'ch', 'rem']
const viewportUnit = ['vh', 'vw', 'vmin', 'vmax']
const absoluteUnit = ['cm', 'mm', 'q', 'in', 'pt', 'pc', 'px']
const angleUnit = ['deg', 'grad', 'rad', 'turn']
const durationUnit = ['s', 'ms']
const frequencyUnit = ['Hz', 'kHz']
const resolutionUnit = ['dpi', 'dpcm', 'dppx']
const allUnit = (new Array).concat(fontUnit, viewportUnit, absoluteUnit, angleUnit, durationUnit, frequencyUnit, resolutionUnit)

const isUnit = function (units, value) {
  if (units.some(function (unit) { return value.includes(unit)})) {
    return true
  }

  return false
}

module.exports = {
  isCSSUnit: function (value) {
    return isUnit(allUnit, value)
  },
  isFontUnit: function (value) {
    return isUnit(fontUnit, value)
  },
  isViewportUnit: function (value) {
    return isUnit(viewportUnit, value)
  },
  isAbsoluteUnit: function (value) {
    return isUnit(absoluteUnit, value)
  },
  isAngleUnit: function (value) {
    return isUnit(angleUnit, value)
  },
  isDurationUnit: function (value) {
    return isUnit(durationUnit, value)
  },
  isFrequencyUnit: function (value) {
    return isUnit(frequencyUnit, value)
  },
  isResolutionUnit: function (value) {
    return isUnit(resolutionUnit, value)
  }
}