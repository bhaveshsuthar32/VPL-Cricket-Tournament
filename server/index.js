const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('./config/db');
const Route  = require('./routes/router');
const cors = require('cors')

const port = process.env.PORT || 5000

mongodb();

app.use(cors(
    {
        origin: ["https://vpl-cricket-tournament.vercel.app"]
    }
 ))

// app.use(cors()); // local server

app.use(express.json());


app.get("/checkserver", (req,res)=>{
    res.send("welcome backend page")
})

app.use('/', Route);

app.listen(port, "localhost", () =>{
    console.log(`server start : http://localhost:${port} `)
})