const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const myAuth = express();
const cors = require('cors')
myAuth.use(cors({origin:true}));

var serviceAccount = require("./permisions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
},'myAuth');

myAuth.get('/auth', async(req, res) => {
    try {
        return await admin.auth().createCustomToken(req.body.uid);
    } catch (error) {

        res.status(500).send(error);
        throw new Error(error);
     
    }
});

exports.myAuth = functions.https.onRequest(myAuth);