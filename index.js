const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cluster = require('cluster');
const numOfCPU = require('os').cpus().length;
const fabObject = require('./math-logic/fibonacci-series');

if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numOfCPU - 2; i++) {
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log(`Worker PID - ${worker.process.pid}`);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    app.get('/', (req, res) => {
        console.log(`Worker Process ID - ${cluster.worker.process.pid} has accepted the request`);
        const num = Number.parseInt(req.query.number);
        const result = fabObject.calculateFibonacciValue(num);
        res.send(`<h1>Result - ${result}</h1>`)
    });
    
    app.listen(port, () => console.log(`listening on http://localhost:${port}`));
}
