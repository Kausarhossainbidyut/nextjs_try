import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) throw new Error("Please add your Mongo URI to .env");

let client;
let clientPromise;

// Function to create a new MongoClient and connect
const connectMongo = async () => {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  await clientPromise;
  return client;
};

// Initial connection
connectMongo()
  .then(() => console.log("✅ Initial MongoDB connection successful"))
  .catch((err) => console.error("❌ Initial MongoDB connection failed:", err));

// Continuous check every 1 second
const interval = setInterval(async () => {
  try {
    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB is connected");
  } catch (err) {
    console.log("⚠️ MongoDB client not connected. Reconnecting...");
    await connectMongo();
    console.log("✅ MongoDB reconnected successfully");
  }
}, 1000);

// Graceful shutdown
process.on("SIGINT", async () => {
  clearInterval(interval);
  if (client) await client.close();
  console.log("🛑 MongoDB connection closed. Exiting...");
  process.exit(0);
});

export default clientPromise;
