"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_name, _id) {
        this._name = _name;
        this._id = _id;
    }
    User.prototype.getName = function () {
        console.log(this._name);
        return this._name;
    };
    User.prototype.getId = function () {
        console.log(this._id);
        return this._id;
    };
    return User;
}());
exports.User = User;
