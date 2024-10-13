const http = require("http");
const fs = require("fs");

let homeContent = ""
let projectContent = ""
let regContent = ""
fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
})

fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
})

fs.readFile("registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    regContent = registration;
})
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const port = parseInt(args.port);

http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "contentType": "text/html" });
    switch (url) {
        case "/project.html":
            response.write(projectContent);
            response.end();
            break;
        case "/registration.html":
            response.write(regContent);
            response.end();
            break;
        default:
            response.write(homeContent);
            response.end()
            break;
    }
})
    .listen(port);