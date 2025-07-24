import express from "express";
import dotenv from "dotenv";
import db from "./config/connection.js";
import usersRouter from './routes/users.js'
import postRouter from './routes/post.js'
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const PROD_URL = process.env.PROD_URL;

const whitelist = ['http://localhost:3000', PROD_URL ]


const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1){
            callback(null, true)}
            else {
                callback(new Error('Not allowed by CORS'))
            }
        }
    }


app.use(cors({origin: 'http://localhost:5173'}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', usersRouter)
app.use('/api/posts', postRouter)



db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});