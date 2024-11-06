const { MongoClient, ObjectId } = require("mongodb");
const readline = require('readline-sync');

const URL = "mongodb://localhost:27017/";
const client = new MongoClient(URL);

async function run() {
    try {
        const database = client.db("FirstDB");
        const collection = database.collection("Class");

        // let name = readline.question("Enter name: ");
        // let score = readline.question("Enter score: ");
        
        // await collection.insertOne({
        //     name,
        //     score
        // })

        // const classes = await collection.findOne({score: {$lt: 300}})
        // console.log(classes);
        const classes2 = await collection.find({}).project({
            _id: 0
        }).toArray();
        console.log(classes2);


        let name = readline.question("Enter name: ");

        let oid = new ObjectId('6720ab5e4f824754ce5a8cc9');

        let newOne = await collection.findOneAndUpdate({
            _id: oid, 
        }, {
            $set: {
                name: name
            }   
        })
        
        console.log(newOne)



        // const res = await collection.findOneAndDelete({name: "Name 3"});
        // console.log(res);
    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }
}

run();