import express from "express";
import * as fs from "fs"

const app = express();
const PORT = 8000;


const dateObject = new Date();
// current date
// adjust 0 before single digit date
const date = (`0 ${dateObject.getDate()}`).slice(-2);
 
// current month
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
 
// current year
const year = dateObject.getFullYear();
 
// current hours
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
 

const timestamp = `DATE : ${year}-${month}-${date}  TIME: ${hours}:${minutes}:${seconds}`;


app.get("/", (req, res) => {
    res.send("WELCOME TO EVERYONE")
})

//To create a new file with current timestamp //
app.get("/create", function (req, res) {
    res.send({ message: "/date-time.txt is created successfully, new file is created" });
    fs.writeFile("./date-time.txt", timestamp, (data, err) => {
        if (data) {
            console.log("File created successfully");
        }
        else if (err) {
            console.log("Error Occured", err);
        }
    });
});





//To enable the server//
app.listen(PORT, () => console.log("server started on the port ", PORT));
