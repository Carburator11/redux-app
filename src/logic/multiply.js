export const multiply = (a, b) => {
    if(!Number.isInteger(a) || !Number.isInteger(b) || !isFinite(a) || !isFinite(b) || a === undefined || b === undefined ){
        return;
    }
    return a * b;
}