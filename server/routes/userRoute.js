import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: "Alvin",
            email: "alvin@gmail.com",
            password: "password",
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(newUser);
    } catch (err) {
        res.send({ msg: err.message });
    }
});

export default router;