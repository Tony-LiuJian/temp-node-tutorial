const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('This is a server home page!!')
    res.end()
})

server.listen(5000)