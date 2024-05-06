import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users_routes from "../routes/users_routes.js"
import activity_routes from "../routes/activity_routes.js"
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())
app.use(users_routes)
app.use(activity_routes)


app.listen(3000, ()=> {
    console.log("runnn di port {3000}")
})