var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/media"] = requestHandlers.media;


//���[�^���W���[����handle�I�u�W�F�N�g�������ɓn���B
server.start(router.route,handle);