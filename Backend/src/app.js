import express from "express";
import cors from "cors"

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

import tickerRouter from "./route/ticker.route.js"


app.use("/api/v1/tickers",tickerRouter)

app.get('/',(req,res)=>{
    res.send("Api Running")
})

export {app};