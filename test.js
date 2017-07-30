import test from 'ava'
import isCSSUnit from './index.js'

test('return true if valid CSS value', t => {
  t.deepEqual(isCSSUnit.isCSSUnit('300px'), true)
})

test('return false if invalid CSS value', t => {
  t.deepEqual(isCSSUnit.isCSSUnit('10bark'), false)
})

test('return true if valid font value', t => {
  t.deepEqual(isCSSUnit.isFontUnit('1em'), true)
})

test('return true if valid viewport value', t => {
  t.deepEqual(isCSSUnit.isViewportUnit('10vh'), true)
})

test('return true if valid absolute value', t => {
  t.deepEqual(isCSSUnit.isAbsoluteUnit('10in'), true)
})

test('return true if valid angle value', t => {
  t.deepEqual(isCSSUnit.isAngleUnit('90deg'), true)
})

test('return true if valid duration value', t => {
  t.deepEqual(isCSSUnit.isDurationUnit('1.5s'), true)
})

test('return true if valid frequency value', t => {
  t.deepEqual(isCSSUnit.isFrequencyUnit('1Hz'), true)
})

test('return true if valid resolution value', t => {
  t.deepEqual(isCSSUnit.isResolutionUnit('300dpi'), true)
})