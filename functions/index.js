const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors({origin:true}));

var serviceAccount = require("./permisions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://work-as-a-horse.firebaseio.com"
});
const db = admin.firestore();

//Routes 
 //Create
 //Post
 app.post('/api/resumes', (req, res) => {
    (async() => {
        try {
            await db.collection('resumes').doc().create({
                basics:req.body.basics,
                work:req.body.work,
                volunteer:req.body.volunteer,
                education:req.body.education,
                awards:req.body.awards,
                publications:req.body.publications,
                skills:req.body.skills,
                languages:req.body.languages,
                interests:req.body.interests,
                references:req.body.references

            })
            return res.status(200).send();
            
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }



    } )();
});


//Read

//Update

//Delete

//Export to Firebase Cloud functions
exports.app = functions.https.onRequest(app);