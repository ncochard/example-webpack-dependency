const str1 = 'Hello world';
export const HelloWorld = () => str1;
export function ShouldBeTreeShaken() {
    return 'This function is not used. It should be removed by the tree shaking process.';
}