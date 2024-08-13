import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createServer as createLocalServer } from "http";
import { connectDB } from "./config/db.js";
import { router } from "./routes/userRoutes.js";
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
connectDB();

app.use(express.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version, device-id, env, User-IP, x-api-key',
    );
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

app.use('/api/users',router);

const server = createLocalServer(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

