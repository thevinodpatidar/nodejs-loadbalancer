const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const redis = require("redis");
const keys = require("./keys");

let client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort
});

app.get("/", (request, response) => {
    console.log(`Process ID is ${process.pid}`);
    let num = request.query.number;
    if (num % 2 === 0) {
        client.publish("math-subscription1", num);
    } else {
        client.publish("math-subscription2", num);
    }
    response.end("<h3>Notification sent to the respective subscribers! We will send you an email with the details!</h3>");
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

