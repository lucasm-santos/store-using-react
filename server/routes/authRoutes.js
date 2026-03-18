import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import { connectionToDatabase } from '../lib/db.js';

const router = express.Router()

router.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const db = await connectionToDatabase()
        const [rows] = await db.query('SELECT * FROM user WHERE email = ?', [email])
        if(rows.length > 0) {
            return res.status(409).json({message: "user already existed"})
        }

        const hashPassword = await bcrypt.hash(password, 10)
        await db.query("INSERT INTO user     (username, email, password) VALUES (?, ?, ?)", [username, email, hashPassword])
        res.status(201).json({message:"user created sucessfully"})
        console.log(username, email, hashPassword)
    }catch(err){
        res.status(500).json({err})
        console.log(err)
    }
})

router.post('/login', async (req, res) => {
    console.log("LOGIN BODY:", req.body);
    const {username, password} = req.body;
    try {
        const db = await connectionToDatabase()
        const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username])
        if(rows.length === 0) {
            return res.status(404).json({message: "user not existed"})
        }

        const isMacth = await bcrypt.compare(password, rows[0].password)
        if(!isMacth) {
            return res.status(401).json({message: "wrong password"})
        }
        const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})

        res.status(200).json({token: token})
    }catch(err){
        res.status(500).json({err})
    }
})

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(403).json({ message: "no token provided" });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        req.userId = decoded.id;
        next();

    } catch (err) {
        console.log("VERIFY TOKEN ERROR:", err);
        return res.status(401).json({ message: "invalid token" });
    }
};

router.get('/home', verifyToken, async (req, res) => {
    try {
        const db = await connectionToDatabase()
        const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [req.userId])
        if(rows.length === 0) {
            return res.status(404).json({message: "user not existed"})
        }
        return res.status(201).json({user: rows[0]})
    }catch(err){
        return res.status(500).json({message: "server error"})
    }
})


export default router;