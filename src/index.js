export function HelloWorld() {
    return 'Hello world';
}
export function ShouldBeTreeShaken() {
    return 'This function is not used. It should be removed by the tree shaking process.';
}