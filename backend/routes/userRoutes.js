import express from "express";
import { register, login, forgotPassword, updatePassword, makeRequest, makeProfile, getRequests } from "../controllers/userController.js";

export const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/forgotPassword', forgotPassword);

router.post('/updatePassword', updatePassword);

router.post('/makeProfile', makeProfile);

router.post('/makeRequest', makeRequest);

router.get('/getRequests', getRequests);