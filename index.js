var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

//ルータモジュールとhandleオブジェクトを引数に渡す。
server.start(router.route,handle);