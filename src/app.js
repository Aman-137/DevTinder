const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/user/login", (req, res) => {
  res.send("User login page");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User data sent");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
