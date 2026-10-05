const express = require("express");

const app = express();

app.use(
  "/user",
  [
    (req, res, next) => {
      console.log("Handling the route user!!");
      next();
      // res.send("Rounte Handler 1");
    },
    (req, res, next) => {
      console.log("Handling the route user2!!");
      // res.send("Rounte Handler 2");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Handling the route user3!!");
    // res.send("Rounte Handler 3");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user4!!");
    // res.send("Rounte Handler 4");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user5!!");
    res.send("Rounte Handler 5");
  },
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
