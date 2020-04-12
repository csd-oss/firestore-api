const functions = require('firebase-functions');
const admin = require('firebase-admin')

var serviceAccount = require("./permisions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://work-as-a-horse.firebaseio.com"
});

const express = require('express')
const cors = require('cors')
const app = express();


//Routes 
app.get('/helloWorld', (req, res) => {
    return res.status(200).send('Hello World');
});

 //Create
 //Post



//Read

//Update

//Delete

//Export to Firebase Cloud functions
exports.app = functions.https.onRequest(app);