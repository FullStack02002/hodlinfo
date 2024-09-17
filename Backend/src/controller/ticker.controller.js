import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Ticker } from "../model/ticker.model.js"



const getAllTickers=asyncHandler(async(req,res)=>{
    const ticker=await Ticker.find();

    if(!ticker){
        throw new ApiError(404,"No tickers found")
    }

    return res.status(200).json(new ApiResponse(200,ticker,"Tickers Fetched Succesfully"))
})



export {getAllTickers}