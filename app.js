let express = require("express");
let app = express();
let http = require("http").createServer(app);
let cors = require("cors");
let mongoose = require("mongoose");

let PORT = process.env.PORT || 9090

http.listen(PORT, () => {
   console.log(`Server Listening on port ${PORT}`)
})

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let chatRouter = require("./router/chat.router");

//database URL
let url = "mongodb://localhost:27017/meanbatch1";

//all middleware
app.use(cors());
app.use(express.json())

//connect the database
mongoose.connect(url).then(res => console.log("Mongoose Connected")).catch(err => console.log(err));
//http://localhost:9090/api/chat/*
app.use("/api/chat",chatRouter);

//socket

let io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on('disconnect', () => {
    console.log('user disconnected');

  })

  socket.on("message",(msg) => {
    socket.broadcast.emit("message",msg);
  })

})

