let mongoose = require("mongoose");
mongoose.pluralize(null);

// create the schema   
let chatSchema = mongoose.Schema({
    name: String,
    message: String,
});

//Define model with the help of schema
let ChatModel = mongoose.model('Message', chatSchema);

module.exports = ChatModel;

 
