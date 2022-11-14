const express = require("express");
const app = express()
const port = 3000

const things = require("./routes/things")

app.use(express.json());
app.use("/things", things)

app.get("/", (req,res) => {

    res.send("Hello Root")
});

app.listen(port , err => {
    if (err) 
    { return console.log("ERROR", err) }
    else {
        console.log(`Listening on port ${port}`)
    }
});
