const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//signup logic
// Create user model
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const User = mongoose.model('User', userSchema);

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { userId, firstName, lastName, address, contact, password } = req.body;

    // Validation checks
    if (!userId || !firstName || !lastName || !address || !contact || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ userId }, { contact }] });
    if (existingUser) {
      return res.status(400).json({ message: "User ID or Contact already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = new User({
      userId,
      firstName,
      lastName,
      address,
      contact,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error signing up user" });
  }
});

 // ...

// Login route
router.post("/login", async (req, res) => {
  try {
    const { userId, password } = req.body;

    // Validation checks
    if (!userId || !password) {
      return res.status(400).json({ message: "User ID and password are required" });
    }

    // Check if the user exists
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
});

  
// //login route
// const usersRouter = express.Router();

// usersRouter.get("/", (req, res) => {
//   // Retrieve user data from the request query parameters
//   const { firstName, lastName } = req.query;

//   // Query the MongoDB users collection to check if the user exists
//   User.findOne({ firstName, lastName })
//     .then((user) => {
//       if (user) {
//         // User exists, send a success response
//         res.status(200).json({ message: "User exists" });
//       } else {
//         // User does not exist, send a failure response
//         res.status(404).json({ message: "User not found" });
//       }
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//       res.status(500).json({ message: "Internal server error" });
//     });
// });

// // Attach the usersRouter to the "/users" endpoint
// router.use("/users", usersRouter);


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
