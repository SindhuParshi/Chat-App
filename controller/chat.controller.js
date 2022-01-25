let ChatModel = require("../model/chat.model");

let storeChat = (req,res) => {
    let chat =req.body;
    ChatModel.insertMany(chat,(err,result) => {
        if (!err) {
            res.json({"msg" :"Message Stored Successfully"});
          }else {
              res.json({"msg":"Message didn't store"})
          }
    })
}

module.exports={storeChat}