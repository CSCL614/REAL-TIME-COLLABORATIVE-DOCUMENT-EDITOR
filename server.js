const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const documentRoutes = require("./routes/documentRoutes");
const userRoutes = require("./routes/userRoutes"); // add this

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] } });

app.use(cors());
app.use(express.json());

// Routes
app.use("/document", documentRoutes);
app.use("/api/users", userRoutes); // add this line

let documentContent = "";

io.on("connection", (socket) => {
  socket.emit("documentUpdate", documentContent);

  socket.on("documentUpdate", (updatedContent) => {
    documentContent = updatedContent;
    io.emit("documentUpdate", documentContent);
  });
});

server.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
