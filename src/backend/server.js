
//server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect("mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/arena")

//require route
app.use("/", require("./Routes/routemodels"));

app.listen(3002, function(){
    console.log("express server is running on port 3002");
})


// // server.js

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3001;

// // Connect to MongoDB Atlas
// // mongoose
// //   .connect('mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => {
// //     console.log('Connected to MongoDB Atlas');
// //   })
// //   .catch((error) => {
// //     console.error('Error connecting to MongoDB Atlas:', error);
// //   });

// //   global.collectiondata = require('./db');
// const api = require('./Routes/api');
// app.use('/api', api);
// app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })
// // Define the route for fetching data
// // app.get('/api/data', async (req, res) => {
// //   try {
// //     const data = await Project.find();
// //     res.json(data);
// //   } catch (error) {
// //     console.error('Error:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



// // server.js

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3001;

// // Connect to MongoDB Atlas
// mongoose
//   .connect('mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });

// // Define the Schema
// const projectSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// // Define the Model
// const Project = mongoose.model('Project', projectSchema);

// // Define the route for fetching data
// app.get('/api/data', async (req, res) => {
//   try {
//     const data = await Project.find();
//     res.json(data);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const mongoose = require('mongoose');

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB Atlas');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB Atlas:', error);
// });

// // Define the Schema
// const projectSchema = new mongoose.Schema({
//   name: String,
//   description: String,
// });

// // Define the Model
// const Project = mongoose.model('Project', projectSchema);

// // Fetch data from MongoDB
// Project.find()
//   .then((data) => {
//     console.log('Data from Collection:');
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });



// // server.js

// const express = require('express');
// const app = express();
// const { MongoClient } = require('mongodb');

// const connectionString = 'mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority';

// app.get('/api/data', async (req, res) => {
//   try {
//     const client = new MongoClient(connectionString);
//     await client.connect();

//     const db = client.db('arena');
//     const collection = db.collection('collection_project');

//     const data = await collection.find().toArray();
//     res.json(data);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     client.close();
//   }
// });

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
