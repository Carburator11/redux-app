export const multiply = (a, b) => {
    if(a.isNan || b.isNan){
        return;
    }
    return a * b;
}