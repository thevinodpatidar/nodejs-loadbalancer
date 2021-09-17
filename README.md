# **PM2 Worker with Redis Basic Example**

## **Dependencies**
- Nodejs
- Express
- Loadtest
- Nodemon
- PM2
- Redis

## **Pre-requisite**
### Install Redis server
[Install Redis](https://redis.io/download)
### Start Redis Server locally 

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