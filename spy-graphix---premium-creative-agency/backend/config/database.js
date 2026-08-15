import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.log(
      "ℹ️ MONGODB_URI not set in environment. Running with in-memory persistence fallback.",
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(
      `⚠️ MongoDB connection error: ${error.message}. Continuing with local memory persistence fallback.`,
    );
    return false;
  }
};
