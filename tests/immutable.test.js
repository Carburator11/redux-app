import { Map } from 'immutable';

test("Object should not be mutated", () => {
    const obj1 = Map({ a: 11, b: 12, c: 13 });
    const copy1 = obj1.set('a', 15);
    expect(obj1.get('a')).toBe(11);
    expect(copy1.get('a')).toBe(15);
})

test("...or we could spread object", () => {
    const obj2 = { a: 11, b: 12, c: 13 };
    const copy2 = {...obj2};
    copy2.a = 15;
    expect(obj2.a).toBe(11);
    expect(copy2.a).toBe(15);
})

