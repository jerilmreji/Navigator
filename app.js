const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Navigator";

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hi, I'm root");
});

app.get("/testlisting", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        desciption: "By the valley",
        price: 1200,
        location: "punjab",
        country: "India",
    });

    await sampleListing.save();
    console.log("Sample was saved");
    res.send("succesful testing");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});