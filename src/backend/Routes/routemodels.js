const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');


//create model authority
const authoritiesSchema={
    id: Number,
    position: String,
    content: String,
    image: String,
    ranking: String,
    name: String,
    contact: String,
}

const authorities_doc= mongoose.model("authorities_doc", authoritiesSchema);

const authoritiesRouter = express.Router();
authoritiesRouter.get("/", (req, res) => {
  authorities_doc.find({})
    .then(foundNotes => res.json(foundNotes))
});


// create model candidate

const candidatesSchema={
    id: Number,
    name: String,
    moto: String,
    about: String,
    position: String,
    votes: Number,
    pic: String,
}

const candidate= mongoose.model("candidate", candidatesSchema);

const candidatesRouter = express.Router();
candidatesRouter.get("/", (req, res) => {
    candidate.find()
    .then(foundCandidates => res.json(foundCandidates))
});


router.use("/authorities", authoritiesRouter);
router.use("/candidates", candidatesRouter);

module.exports=router;


// const express = require("express");
// const router = express.Router();
// router.post("/collectiondata", (req, res) => {
//   try {
//     console.log(global.collection_project);
//     res.send(global.collection_project);
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server Error");
//   }
// });
// module.exports = router;
