
import { multiply } from '../src/logic/';

test("Simple check", () => {
    expect(multiply(2,3)).toBe(2*3)
})

test("Check if result is defined", () => {
    const rdm = Math.floor(Math.random()*100)
    const rdm2 = Math.floor(Math.random()*10)
    expect(multiply(rdm, rdm2)).toBeDefined()
});

test("Check if result is an integer", () => {
    const rdm = Math.floor(Math.random()*100)
    const rdm2 = Math.floor(Math.random()*10)
    expect(multiply(-rdm, rdm2).isNan).toBeFalsy()
});


