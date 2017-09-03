const domain = require('domain');
const net = require('net');

const server = net.createServer((c) => {
    // Use a domain to propagate data across events within the
    // connection so that we don't have to pass arguments
    // everywhere.
    const d = domain.create();
    d.data = {
        connection: c
    };
    d.add(c);
    // Mock class that does some useless async data transformation
    // for demonstration purposes.
    const ds = new DataStream(dataTransformed);
    c.on('data', (chunk) => ds.data(chunk));
}).listen(8080, () => console.log('listening on 8080'));

function dataTransformed(chunk) {
    // FAIL! Because the DataStream instance also created a
    // domain we have now lost the active domain we had
    // hoped to use.
    domain.active.data.connection.write(chunk);
}

function DataStream(cb) {
    this.cb = cb;
    // DataStream wants to use domains for data propagation too!
    // Unfortunately this will conflict with any domain that
    // already exists.
    this.domain = domain.create();
    this.domain.data = {
        inst: this
    };
}

DataStream.prototype.data = function data(chunk) {
    // This code is self contained, but pretend it's a complex
    // operation that crosses at least one other module. So
    // passing along "this", etc., is not easy.
    this.domain.run(() => {
        // Simulate an async operation that does the data transform.
        setImmediate(() => {
            for (let i = 0; i < chunk.length; i++)
                chunk[i] = ((chunk[i] + Math.random() * 100) % 96) + 33;
            // Grab the instance from the active domain and use that
            // to call the user's callback.
            const self = domain.active.data.inst;
            self.cb(chunk);
        });
    });
};
