// http server here
const http = require('http'),

const server = http.createServer((req, res) => {
    const method = req.method

    switch(method){
        case 'GET': res.write('GET response from countries name')
            res.end()
            break
        case 'POST': res.write('POST countries name')
            res.end()
            break
        case 'DELETE': res.write('DELETE countries name')
            res.end()
            break
        default: res.write('No response')
    }

})

server.listen(3000, error => {
    if(!error === ok){
        console.log('error while listening', error)
    }
    console.log('server is listening on port 3000')
})