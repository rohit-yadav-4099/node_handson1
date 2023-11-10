const http = require("http");
const jsondata = require('./jsonPackege')
const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write("<h1>This is my HTTP home server</>")
        response.end()
    }else if(request.url === '/product'){
        const viewdata = JSON.stringify(jsondata);
        response.write(viewdata)
        response.end()
    }else if(request.url === '/student'){
        response.write("<h1>This is the Student</h1>")
        response.end()
    }else {
        response.write("<p>Error 404</p>")
        response.end()
    }
})

server.listen(4099, () => {
    console.log("starting...");
})