import { registerUser, loginUser, forgotPasswordMail, newPassword, newRequest, newProfile, getCompatibleRequests } from "../services/userService.js";
import { ApiError } from "../errors/ApiError.js";

export async function register (req,res,next) {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
};

export async function login (req,res,next) {
    try {
        const user = await loginUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
};

export async function forgotPassword (req,res,next) {
    try {
        const user = await forgotPasswordMail(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
};

export async function updatePassword (req,res,next) {
    try {
        const user = await newPassword(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
}

export async function makeProfile (req,res,next) {
    try {
        const user = await newProfile(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
}

export async function makeRequest (req,res,next) {
    try {
        const user = await newRequest(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
}

export async function getRequests (req,res,next) {
    try {
        const user = await getCompatibleRequests(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(ApiError.badRequest(err.message));
    }
}