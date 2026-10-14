const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Aman",
    lastName: "Kumar",
    email: "kumaramansingh137@gmail.com",
    password: "Aman123",
  });

  try {
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(500).send("Error creating user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
