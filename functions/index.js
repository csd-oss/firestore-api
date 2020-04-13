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


//Read a specific resume based on ID
//Get
app.get('/api/resumes/:id', (req, res) => {
    (async() => {
        try {
            const doument = db.collection('resumes').doc(req.params.id);
            let resume = await doument.get();
            let response = resume.data();
            return res.status(200).send(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }



    } )();
});
//Read all resumes
//Get
app.get('/api/resumes', (req, res) => {
    (async() => {
        try {
            let query = db.collection('resumes');
            let response = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs)
                {
                    const selectedResume = {
                    id: doc.id,
                    basics:doc.data().basics,
                    work:doc.data().work,
                    volunteer:doc.data().volunteer,
                    education:doc.data().education,
                    awards:doc.data().awards,
                    publications:doc.data().publications,
                    skills:doc.data().skills,
                    languages:doc.data().languages,
                    interests:doc.data().interests,
                    references:doc.data().references
                };
                response.push(selectedResume);
                }
                return response
            })

            return res.status(200).send(response);
            
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }



    } )();
});

//Update

//Delete

//Export to Firebase Cloud functions
exports.app = functions.https.onRequest(app);