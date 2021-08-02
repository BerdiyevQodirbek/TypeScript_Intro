"use strict";
exports.__esModule = true;
var message_1 = require("./components/message");
var user_1 = require("./components/user");
// making console.log() function
var log = function (arg) { return console.log(arg); };
// testing block
var makeInitialChat = function () {
};
var CavernClub = new message_1.Chat([], [], new Date().toLocaleDateString("ru"));
var Ahmad = new user_1.User("Ahmadjon Abdusamadov", 1);
CavernClub.setMessenger({ name: "Abduboriy Mirzayev" });
log(CavernClub);
CavernClub._createdAt;
