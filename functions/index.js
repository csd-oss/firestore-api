const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({origin:true}));

var serviceAccount = require("./permisions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://work-as-a-horse.firebaseio.com"
});

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