const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cluster = require('cluster');
const numOfCPU = require('os').cpus().length;

if (cluster.isMaster) {

    console.log(`Master Process Id is - ${process.pid}`);

    const worker1 = require("child_process").fork("./workers/fab-series-worker1");
    const worker2 = require("child_process").fork("./workers/fab-series-worker2");

    console.log(`Child Process ID is ${worker1.pid}`);
    console.log(`Child Process ID is ${worker2.pid}`);

    worker1.on('message', function (number) {
        // Receive results from child process - 1
        console.log(`Fab Number from Child Process - 1 is ${number}`);
    });
    worker2.on('message', function (number) {
        // Receive results from child process - 2
        console.log(`Fab Number from Child Process - 2 is ${number}`);
    });
    cluster.on("online", worker => {
        console.log(`Message received from - ${worker.process.pid}`)
        worker.on("message", num => {
            if (num % 2 === 0) {
                worker1.send(num);
            } else {
                worker2.send(num);
            }
        });
    });
    for (let i = 0; i < numOfCPU - 2; i++) {
        let worker = cluster.fork();
        console.log(`Worker started on PID - ${worker.process.pid}`);
    }
    console.log(`Total Number of CPU Count is ${numOfCPU}`);
} else {
    app.get("/", (request, response) => {
        process.send(request.query.number);
        console.log(`Process Id ${process.pid} received the request!`);
        response.send("<h3>The request has been received successfully! We will send an email once your calculation is ready!</h3>");
        response.end();
    });
    
    app.listen(port, () => console.log(`listening on http://localhost:${port}`));
}
