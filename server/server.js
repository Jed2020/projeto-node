require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoute = require("./routes/User");
app.use("/", userRoute);

app.get("/", (req, res) => {
    res.status(200).send("servidor rodando")
});

app.listen(3001, () => {
    console.log("rodando na porta 3001");

}); 