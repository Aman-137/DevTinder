const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getUserData", (req, res) => {
  // try {
  //   throw new Error("gfhtgfh");
  // } catch (err) {
  //   res.status(500).send("something went wrong");
  // }
  throw new Error("gfhtgfh");
  res.send("User data sent");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
