import { findUserByEmail, createUser, updatingPassword, createRequest, createProfile, getCompatibleBloodGroups, findRequestsByBloodGroup } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

export async function registerUser(userData) {
  try {
    const existingUser = await findUserByEmail(userData.userName);
    if (existingUser) {
      throw new Error("User already exists");
    } else {
      await createUser(userData);
      return { user: userData.userName };
    }
  } catch (err) {
    throw new Error("Unable to register!");
  }
}

export async function loginUser(userData) {
  try {
    const existingUser = await findUserByEmail(userData.userName);
    if (existingUser) {
      const storedHashedPassword = existingUser.password;
      const isPasswordCorrect = await bcrypt.compare(userData.password, storedHashedPassword);
      if (isPasswordCorrect) {
        return { message: "logged in", user: userData.userName };
      } else {
        return { message: "incorrect password." };
      }
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    throw new Error("Unable to Login!");
  }
}

export async function sendEmail(transporter, mailOptions) {
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new Error("Unable to send mail");
  }
}

export async function forgotPasswordMail(userData) {
  try {
    const existingUser = await findUserByEmail(userData.userName);
    if (existingUser) {
      const forgotPasswordOptions = {
        from: {
          name: "Rudhira",
          address: process.env.USER,
        },
        to: userData.userName,
        subject: "Reset your password",
        text: "Reset your password here",
        html: "<a href='http://localhost:3000/api/users/updatePassword'>Reset your password</a>",
      };
      await sendEmail(transporter, forgotPasswordOptions);
      return { user: userData, msg: "Mail Sent" };
    } else {
      throw new Error("User not found!");
    }
  } catch (err) {
    throw new Error("Cannot send mail");
  }
}

export async function newPassword(userData) {
  try{
    await updatingPassword(userData);
    return { user: userData, msg: "Password updated" };
  } catch (err) {
    throw new Error("Unable to update the password");
  }
}

export async function newProfile(userData) {
  try {
    await createProfile(userData);
    return {message: "Profile Created"}
  } catch (err) {
    throw new Error("Unable to create profile");
  }
}

export async function newRequest(requestData) {
  try {
    await createRequest(requestData);
    return {message: "Request Created"}
  } catch (err) {
    throw new Error("Unable to create request");
  }
}

export async function getCompatibleRequests (userData) {
  try {
    const list = await getCompatibleBloodGroups(userData.bloodGroup);
    const requests =[];
    for (let i=0; i<list.length; i++) {
      const request = await findRequestsByBloodGroup(list[i]);
      requests.push(request);
    }
    console.log(requests);
    return requests;
  } catch (err) {
    throw new Error("Unable to create request");
  }
}