//importing modules
const express = require("express");
const bodyparser = require("body-parser");
  
// stores the express module into the app variable!
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
  
//sends index.html
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/" + "utsbmicici.html");
});
  
//this is used to post the data on the specific route
app.post("/bmicalculator", function (req, res) {
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    bmi = weigh / (heigh * heigh);
  
    //number to string format
    bmi = bmi.toFixed();
  
    req_name = req.body.Name;
  
    // CONDITION FOR BMI
    if (bmi < 18.5) {
        res.send("<h3>Hello! " + req_name +
                 " BMI Anda adalah: " + bmi +
                 "<centre><h1>Anda Kurus!");
    } else if (18.5 <= bmi && bmi < 25) {
        res.send("<h3>Hello! " + req_name +
                 " BMI Anda adalah: " + bmi +
                 "<centre><h1>Anda Ideal!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>Hello! " + req_name +
                 " BMI Anda adalah: " + bmi +
                 "<centre><h1>Anda Gemuk!");
    } else if (30<= bmi && bmi >30){
        res.send("<h3>Hello! " + req_name +
                 " BMI Anda adalah: " + bmi +
                 "<centre><h1>Anda Obesitas!");
    }
});
  
//this is used to listen a specific port!
app.listen(3000, function () {
    console.log("port active at 3000");
});