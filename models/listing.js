const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        // default: "https://unsplash.com/photos/trees-under-cloudy-sky-during-sunset--G3rw6Y02D0",
        // set : (v) => v === "" ? "https://unsplash.com/photos/trees-under-cloudy-sky-during-sunset--G3rw6Y02D0" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;