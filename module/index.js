'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShouldBeTreeShaken = ShouldBeTreeShaken;
const str1 = 'Hello world';
const HelloWorld = exports.HelloWorld = () => str1;
function ShouldBeTreeShaken() {
    return 'This function is not used. It should be removed by the tree shaking process.';
}
//# sourceMappingURL=index.js.map