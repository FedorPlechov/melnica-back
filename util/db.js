const {MongoClient,ObjectID} = require("mongodb");
// Connection URI
const uri =
    "mongodb://localhost:27017/";
// Create a new MongoClient
const client = new MongoClient(uri);
module.exports.run = async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("dispatches").command({ping: 1});
        console.log("Connected successfully to server");
    } catch (e) {
        console.log(e);
        await client.close();
    }
    // finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    // }
}

exports.insertOne = async function createListOfProducts(newProducts) {
        const result = await client.db("dispatches").collection("products").insertOne(newProducts);
        console.log(`New products created with the following id: ${result.insertedId}`);
}
exports.findAllDispatches = async function getDispatches() {
    const cursor = await client.db("dispatches").collection("products").find()

    if ((await cursor.count()) === 0) {
        console.log("No documents found!");
        await cursor.forEach(console.dir);
    }
    return await cursor.toArray()
}
exports.findDispatchById = async (id) => {
    const _id = new ObjectID(id);
    const result = await client.db("dispatches").collection("products").findOne({_id} )

    if (await result === 0) {
        console.log("No documents found!");
    }
    return   result;
}
