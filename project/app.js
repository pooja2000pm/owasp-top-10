require("dotenv").config();

const express = require("express");
const app = express();


app.get("/api", (req, res) => {
    res.json({
      sucess: 1,
      message: "hello"

})

});


app.listen(process.env.APP_PORT, () => {
 console.log("server up and running on port: " , process.env.APP_PORT);
})

