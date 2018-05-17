import { Map } from 'immutable';

test("Object should not be mutated", () => {
    const obj1 = Map({ a: 11, b: 12, c: 13 });
    const copy = obj1.set('a', 15);
    expect(obj1.get('a')).toBe(11)
})
