/**
 * @param {number} x
 * @return {number}
 */
//7
var reverse = function (x) {
    var num = parseInt(x);
    if (typeof (x) === "number" && x >= Math.pow(-2, 31) - 1 && x <= Math.pow(2, 31) - 1) {
        var splitArr = num.toString().split("");
        if (splitArr[0] === "-") {
            var backString = splitArr.slice(1).reverse().join("");
            num = parseInt(backString, 10);
            if (num <= Math.abs(Math.pow(2, 31) - 1)) {
                return -num;
            } else {
                return 0;
            }
        } else {
            var reverseString = splitArr.reverse().join("");
            num = parseInt(reverseString, 10);
            if (num <= Math.abs(Math.pow(2, 31) - 1)) {
                return num;
            } else {
                return 0;
            }
        }
    } else {
        return 0;
    }
};