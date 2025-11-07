const express = require("express");
const cors = require("cors");
const connectToDb = require("./configs/db");
const contactRouter = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// ✅ Connect to database first, then start the server
connectToDb().then(() => {
  // test route
  app.get("/test", (req, res) => {
    res.status(200).json({ message: "Test Route is Working" });
  });

  // contact routes
  app.use("/contact", contactRouter);

  // unhandled route
  app.use((req, res) => {
    res.status(404).json({ message: "404, Route not found" });
  });

  // start server after DB is ready
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
