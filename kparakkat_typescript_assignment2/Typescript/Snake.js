var Snake = /** @class */ (function () {
    function Snake() {
    }
    Snake.prototype.move = function () {
        console.log("Snake is moving");
    };
    return Snake;
}());
var obj;
obj = new Snake();
obj.move();
