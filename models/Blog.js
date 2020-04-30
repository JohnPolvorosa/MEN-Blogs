const mongoose = require("mongoose");

// Initialize Schema
const blogsSchema = new mongoose.Schema({
    title: String,
    content: String
  });
  
// Export Model
module.exports = mongoose.model("Blog", blogsSchema);