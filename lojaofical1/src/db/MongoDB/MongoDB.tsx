import React from "react";
import { Document, MongoClient, ServerApiVersion, WithId } from "mongodb";
import Link from "next/link";

const KEYUSER = process.env.KEY;
const PASSWORD = process.env.PASSWORD;

const uri = `mongodb+srv://${KEYUSER}:${PASSWORD}@cluster0.edxeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
interface CollectionList {
  name: string;
  price: number;
  img: string;
  description: string;
}
function isItemProducts(doc: Document): doc is WithId<CollectionList> {
  return (
    typeof doc.name === "string" &&
    typeof doc.img === "string" &&
    typeof doc.price === "number" &&
    typeof doc.description === "string"
  );
}

export default async function MongoDBproducts() {
  let success = true;
  let list: WithId<CollectionList>[] = [];
  while (success) {
    try {
      const connection = await client.connect();
      const db = connection.db("RedFlower");
      const collection = await db.collection("Products");
      const docs = await collection.find({}).toArray();

      list = docs.filter(isItemProducts);
      console.log(docs);
      success = false;
    } catch (error) {
      console.error(error);
    }
  }
  console.log(list);
  return list.map((item) => (
    <Link className="border flex-grow" key={item._id.toString()} href={`/home?${item._id}`}>
        <li className="border border-green-500 w-[200px]">
          <h2>{item.name}</h2>
          <img width={200} src={item.img} alt={item.name} />
          <p>{item.description}</p>
          <p>{item.price}</p>
        </li>
    </Link>
  ));
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
