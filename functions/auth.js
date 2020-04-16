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

myAuth.get('/auth', (req, res) => {
    (async() => {
        try {
            admin.auth().createCustomToken(uid)
            .then((customToken) => {
                return res.status(200).send(customToken);
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }

    } )();
});