const express = require('express');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./config/db');
const clothProductRouters = require('./routes/clothProductsRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "DELETE"]
    })
)

connectDB();
app.use('/api', clothProductRouters)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})