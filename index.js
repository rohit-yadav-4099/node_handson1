const http = require("http");
const jsondata = require('./jsonPackege')
const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write("<h1>What is Node js?</h1> <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009.</p>")
        response.write("<h1>Advantage of Node.js -</h1><p>Node js is faster than java because it uses an asynchronous event-driven I/O model and does not have the overhead of the Java runtime environment.</p>")
        response.write("<h1>Benefits of Node.js- </h1><ol><li>High Performance.</li><li>Scalability</li><li>Easy to Learn</li></ol>")
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
