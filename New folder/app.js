const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

// Creating express server
const app = express();


const PORT = 3333;
const HOST = "192.168.116.179";
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

// const API_SERVICE_URL = `${API_BASE_URL}?q=London&appid=${API_KEY_VALUE}`;
const API_SERVICE_URL = `${API_BASE_URL}`;



app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
}));


// app.use('/test', function(req, res, next) {
// 	console.log(req.path);
// 	createProxyMiddleware({
// 	    target: req.protocol + '://' + req.get('host') + req.originalUrl,
// 	    changeOrigin: true,
// 	});
// 	  next();
// });


// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});