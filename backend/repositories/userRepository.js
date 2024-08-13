import userModel from "../models/userModel.js";
import requestModel from "../models/requestModel.js";
import bcrypt from "bcrypt";
import userDetailModel from "../models/userDetailModel.js";
import bloodGroupCompatibility from "../const.js";

const saltRounds = 10;

export async function findUserByEmail (email) {
    return await userModel.findOne({userName: email});
};

export async function createUser (userData) {
    bcrypt.hash(userData.password, saltRounds, async (err, hash) => {
        if (err) {
          throw new Error("Unable to hash the password");
        } else {
          return await userModel.create({userName:userData.userName, password:hash});
        }
      });
};

export async function updatingPassword (userData) {
  bcrypt.hash(userData.password, saltRounds, async (err, hash) => {
    if (err) {
      throw new Error("Unable to hash the password");
    } else {
      return await userModel.findOneAndUpdate({userName:userData.userName},{password:hash});
    }
  });
};

export async function createProfile (userData) {
  try {
    console.log(userData);
    const newProfile = {
      role: userData.role,
      name: {
        firstName: userData.firstName,
        middleName: userData.role==="user" ? userData.middleName : null,
        lastName: userData.lastName,
        bloodBankName: userData.role==="user" ? null : userData.bloodBankName
      },
      address: userData.address,
      state: userData.state,
      city: userData.city,
      phoneNumber: userData.role==="bloodbank" ? userData.phoneNumber : null,
      bloodGroup: userData.role==="user" ? userData.bloodGroup : null,
      gender: userData.role==="user" ? userData.gender : null,
      userId: userData.userId
    }
    const createdProfile = await userDetailModel.create(newProfile);
    return createdProfile;
  } catch (err) {
    throw new Error("Unable to create profile");
}
}

export async function createRequest (requestData) {
  try {
    const isDonationCamp = requestData.isDonationCamp === 'true' || requestData.isDonationCamp === true;

    const newRequest ={
      name: {
          recipientName: isDonationCamp ? null : requestData.recipientName,
          bloodBankName: isDonationCamp ? requestData.bloodBankName : null
      },
      date: {
          publishDate: requestData.publishDate,
          endDate: isDonationCamp ? requestData.endDate : null  
      },
      phoneNumber: requestData.phoneNumber,
      state: requestData.state,
      city: requestData.city,
      bloodGroup: requestData.bloodGroup,
      userId: requestData.userId,
      isDonationCamp: requestData.isDonationCamp
  }
  const createdRequest = await requestModel.create(newRequest);
  return createdRequest;  
  } catch (err) {
    throw new Error("Unable to create profile");
}  
}

export async function getCompatibleBloodGroups(userBloodGroup) {
  if (!bloodGroupCompatibility[userBloodGroup]) {
    throw new Error('Invalid blood group');
  }
  return bloodGroupCompatibility[userBloodGroup];
}

export async function findRequestsByBloodGroup(userBloodGroup) {
  return await requestModel.find({bloodGroup: userBloodGroup, isDonationCamp: false});
}