var str1 = 'Hello world';
export var HelloWorld = function HelloWorld() {
    return str1;
};
export function ShouldBeTreeShaken() {
    return 'This function is not used. It should be removed by the tree shaking process.';
}
//# sourceMappingURL=index.js.map