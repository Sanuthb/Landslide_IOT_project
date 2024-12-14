import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export const Signin = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const existinguser = await prisma.user.findUnique({ where: { email } });
    if (existinguser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
    res
      .status(201)
      .json({
        message: "User registered successfully!",
        user: { id: newUser.id, email: newUser.email },
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
