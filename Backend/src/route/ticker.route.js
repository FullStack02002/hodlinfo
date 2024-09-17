import { Router } from "express";
const router=Router();
import { getAllTickers } from "../controller/ticker.controller.js";

router.route("/getAll").get(getAllTickers)






export default router