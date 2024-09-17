import mongoose from "mongoose";


const TickerSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    last:{
        type:String,
        required:[true,"last is required"]
    },
    buy:{
        type:String,
        required:[true,"buy is required"]
    },
    sell:{
        type:String,
        required:[true,"sell is required"]
    },
    volume:{
        type:String,
        required:[true,"volume is required"]
    },
    base_unit:{
        type:String,
        required:[true,"base_unit is required"]
    }

})

export const Ticker=mongoose.model("Ticker",TickerSchema)


