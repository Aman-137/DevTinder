const express = require("express");

const app = express();

app.post("/user", (req, res) => {
  res.send("Data is saved to database successfully!!");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Aman", lastName: "Kumar" });
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully!!");
});

app.put("/user", (req, res) => {
  res.send("User updated successfully!!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
