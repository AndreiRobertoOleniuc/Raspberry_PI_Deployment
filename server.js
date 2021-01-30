const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome to my Webseite!</h1>
        <p>This page has been viewed 1 times!</p>
    </body>
    </html>
    `)
});

app.listen(5000,()=> console.log('http://localhost:5000/'))