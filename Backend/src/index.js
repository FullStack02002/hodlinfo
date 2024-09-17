import dotenv from "dotenv"
import {app} from "./app.js"
import { Ticker } from "./model/ticker.model.js"
import axios from "axios"

import connectDB from "./db/index.js"

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})


const fetchData=async()=>{
    try {
        const response=await axios.get("https://api.wazirx.com/api/v2/tickers");
        const data=response.data;
        const top10Tickers=Object.values(data).slice(0,10);


        // clear previous data

        await Ticker.deleteMany();

        top10Tickers.forEach(async(ticker)=>{
            const newTicker=new Ticker({
                name:ticker.name,
                last:ticker.last,
                buy:ticker.buy,
                sell:ticker.sell,
                volume:ticker.volume,
                base_unit:ticker.base_unit
            })

            await newTicker.save();
        })
        
    } catch (error) {
        console.error('Error fetching data:', error);

        
    }
}

fetchData();