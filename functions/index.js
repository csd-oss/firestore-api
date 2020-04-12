const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const app = express();


//Routes 
 //Create
app.get('/helloWorld', (req, res) => {
    return res.status(200).send('Hello World');
});



//Read

//Update

//Delete

//Export to Firebase Cloud functions
exports.app = functions.https.onRequest(app);