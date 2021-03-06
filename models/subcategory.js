const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subcategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        imageLink: String
    },
);

module.exports = mongoose.model("Subcategory", subcategorySchema);
