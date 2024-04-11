import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const addActivity = async (req, res) => {
   const {egg_inside, user_id, egg_size} = req.body;

   try {
    const response = await prisma.activity.create({
        data : {
            egg_inside: egg_inside,
            egg_size : egg_size,
            user_id: user_id
        }
    })
    res.status(201).json(response);
   } catch (error) {
    res.status(404).json({"msg": error.message});
   }

}