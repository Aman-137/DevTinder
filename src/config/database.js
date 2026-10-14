const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kumaramansingh137_db_user:TsPn0J0Cqf0O1aRI@nodedb.hpqpxub.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
