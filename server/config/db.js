// connecting mongoose
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

// IN OTHER TO USE THIS DB CONNECTION IN OUR APPLICATION WE NEED TO EXPORT IT

module.exports = connectDB;

/**
 * THEN WE NEED TO INCLUDE THIS CONNECTION IN OUR app.js FILE BY ADDING THE FOLLOWING CODE
 * const connectDB = require('/server/config/db') and then call the connectDB() function
 */
