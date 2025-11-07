const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  try {
    // ✅ Add safe connection options for production
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Wait up to 10 seconds
    });

    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);

    // Optional: exit process if connection fails (important for Render)
    process.exit(1);
  }
};

module.exports = connectToDb;
