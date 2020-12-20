import {getPercents} from "../index"
// const getPercents = require('../index')

describe('getPercent function', () => {
    test('get 50% from 100', () => {
        expect(getPercents(50, 100)).toBe(50)
    })
    test('get 0%', () => {
        expect(getPercents(0, 100)).toBe(0)
        expect(getPercents(0, 500)).toBe(0)
    })
    test('get 100%', () => {
        expect(getPercents(100, 400)).toBe(400)
        expect(getPercents(100, 200)).toBe(200)
        expect(getPercents(100, 1000)).toBe(1000)
    })
    test('get over 100%', () => {
        expect(getPercents(150, 100)).toBe(150)
        expect(getPercents(200, 500)).toBe(1000)
    })
    test('get % of small num', () => {
        expect(getPercents(50, 1)).toBe(0.5)
        expect(getPercents(20, 1)).toBe(0.2)
        expect(getPercents(1, 1)).toBe(0.01)
    })


})

