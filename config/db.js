//require('.env').config();
const mongoose = require("mongoose");

//const config = require("config");
//dotenv.config({path:'./config/.env'})
//MONGO_URI = mongodb+srv://Kashish:K12345@cluster0.gpmpii6.mongodb.net/?retryWrites=true&w=majority
console.log(process.env.MONGO_URI);
//const db = config.get(process.env.MONGO_URI);
//const db = mongoose.connect(process.env.MONGO_URI);
//Kashish Password : K12345

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("The database is connected.");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;