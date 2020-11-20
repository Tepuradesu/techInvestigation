function route(handle,pathname,response,postData){
 console.log("About to route a request for" + pathname);
 //funtionオブジェクトの場合はresponseオブジェクトを引数にリクエストハンドラを呼ぶ。
 if (typeof handle[pathname] === 'function') {
   handle[pathname](response,postData);
 }else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
 }
}

exports.route = route;