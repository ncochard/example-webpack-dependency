'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShouldBeTreeShaken = ShouldBeTreeShaken;
var str1 = 'Hello world';
var HelloWorld = exports.HelloWorld = function HelloWorld() {
    return str1;
};
function ShouldBeTreeShaken() {
    return 'This function is not used. It should be removed by the tree shaking process.';
}
//# sourceMappingURL=index.js.map