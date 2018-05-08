
import { multiply } from '../src/logic/';

test("Simple check", () => {
    expect(multiply(2,3)).toBe(2*3)
})

test("Check if result is defined", () => {
    const rdm = Math.floor(Math.random()*100)
    const rdm2 = Math.floor(Math.random()*10)
    expect(multiply(rdm, rdm2)).toBeDefined()
    expect(multiply(0, 0)).toBeDefined()
    
});

test("Check if result is an integer", () => {
    const rdm = Math.floor(Math.random()*100)
    const rdm2 = Math.floor(Math.random()*10)
    expect(multiply(-rdm, rdm2).isNaN).toBeFalsy()
});

test("NaN, Infinity should return undefined", ()=>{
    expect(multiply(42, undefined)).toBeUndefined();
    expect(multiply(42, true)).toBeUndefined();
    expect(multiply(42, {544: 545})).toBeUndefined();
    expect(multiply(42, [545])).toBeUndefined();            
    expect(multiply(42, null)).toBeUndefined();
    expect(multiply(42, "lolilol")).toBeUndefined();
    expect(multiply(42, 4545/0)).toBeUndefined();
})

test("One or no argument should return undefined", ()=>{
    expect(multiply("lol")).toBeUndefined();
    expect(multiply(426)).toBeUndefined();    
    expect(multiply()).toBeUndefined();    
})



