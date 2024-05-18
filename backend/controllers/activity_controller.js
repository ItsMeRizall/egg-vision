import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const addActivity = async (req, res) => {
  const { egg_inside, user_id, egg_width, egg_length, grade } = req.body;

  try {
    const response = await prisma.activity.create({
      data: {
        egg_inside: egg_inside,
        egg_width: egg_width,
        user_id: user_id,
        egg_length: egg_length,
        grade: grade,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getActivityId = async (req, res) => {
  try {
    const response = await prisma.activity.findMany({
      where: {
        user_id: parseInt(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getAllActivity = async (req, res) => {
  try {
    const response = await prisma.activity.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getCountActivityUsers = async (req, res) => {
  try {
    const usersHistoryWithCount = await prisma.users.findMany({
      select: {
        username: true,
        _count: {
          select: {
            activity: true,
          },
        },
      },
      where : {
        role: "pegawai"
      }
    });
    res.status(200).json(usersHistoryWithCount);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getAllActivityWithUsername = async (req, res) => {
    try {
        const response = await prisma.users.findMany(
            {
                select: {
                    activity: true
                },
                where: {
                    username: req.params.username
                }
            }
        )
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}
