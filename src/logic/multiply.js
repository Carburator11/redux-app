export const multiply = (a, b) => {
    if(!Number.isInteger(a) || !Number.isInteger(b) || !isFinite(a) || !isFinite(b) || !a || !b){
        return;
    }
    return a * b;
}