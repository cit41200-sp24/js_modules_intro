// Internal helper function that is not exported
const addition = (x,y) => x+y;

exports.calculate = function (method, x, y) {
    if (method == 'addition') {
        return addition(x,y);
    }
}