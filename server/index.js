const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/user");



const PORT = process.env.PORT | 3001

const app = express();

app.use(express.json());
app.use(authRouter);

const DB = "mongodb+srv://rustamovjaxongir765:Jaxongir123@cluster0.iv6vnqf.mongodb.net/?retryWrites=true&w=majority";



mongoose
    .connect(DB)
    .then(() => {
        console.log("Connection successful!");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});

