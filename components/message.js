"use strict";
exports.__esModule = true;
exports.Chat = void 0;
var Chat = /** @class */ (function () {
    function Chat(_messengers, _messages, _createdAt) {
        this._messengers = _messengers;
        this._messages = _messages;
        this._createdAt = _createdAt;
        // _createdAt = new Date().toLocaleString()
        // this._messengers = _messengers
    }
    Chat.prototype.getMessenger = function () {
        return this._messengers;
    };
    Chat.prototype.getMessages = function () {
        return this._messages;
    };
    Chat.prototype.getCreatedAt = function () {
        return this._createdAt;
    };
    Chat.prototype.setMessenger = function (person) {
        this._messengers.push(person);
    };
    Chat.prototype.setMessages = function (message) {
        this._messages.push(message);
    };
    return Chat;
}());
exports.Chat = Chat;
