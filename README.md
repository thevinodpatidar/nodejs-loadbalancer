# **PM2 Worker RabbitMQ Example**

## **Dependencies**
- Nodejs
- Express
- Loadtest
- Nodemon
- RabbitMQ (amqplib)
- PM2

## **Pre-requisite**
### Install RabbitMQ server
[Install RabbitMQ](https://www.rabbitmq.com/download.html)
### Install PM2 nodejs package globally
```
npm install pm2 -g
```
## **Start Project**
### 1. Install Dependencies
```
yarn
```
### 2. Run Project
```
yarn pm2-start
```
### 3. Load test using (loadtest library)
```
yarn loadtest
```
