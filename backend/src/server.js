const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require("./routes/task.routes");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/",taskRoutes);//1-C

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});