// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const Collection = await mongoose.connection.db.collection("collection_project");
//             Collection.find({}).toArray(async function (err, data) {
//               if (err) console.log(err);
//                 else{
//                   global.collection_project=data;
//                   console.log(global.collection_project);
//                 }
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };

// // const { MongoClient } = require('mongodb');

// // const uri = 'mongodb+srv://bhawsarmadhavi:H6dHoeejJmm4Im5Q@cluster0.0cdsgi1.mongodb.net/?retryWrites=true&w=majority';

// // async function connect() {
// //   const client = new MongoClient(uri);
// //   await client.connect();
// //   const db = client.db('arena');
// //   return db;
// // }

// // module.exports = connect;