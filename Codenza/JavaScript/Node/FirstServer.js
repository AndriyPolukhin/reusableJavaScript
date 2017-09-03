const http = require('http');

http.createServer((request, response) => {
    const {
        headers,
        method,
        url
    } = request;
    let body = [];

    // REQUEST


    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        // RESPONSE


        response.on('error', (err) => {
            console.error(err);
        });

        response.statusCode = 200;
        response.setheader('Content-Type', 'application/json');
        // response.writeHead(200, {'Content-Type': 'application/json'});


        const responseBody = {
            hreders,
            method,
            url,
            body
        };

        response.write(JSON.stringify(responseBody));
        response.end();
        // response.end(JSON.stringify(responseBody));






    });
}).listen(8080);
