import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user','bloodbank']
    },
    name: {
        firstName: {type: String},
        middleName: {type: String},
        lastName: {type: String},
        bloodBankName: {type: String}
    },
    address: {type: String},
    state: {type: String},
    city: {type: String},
    phoneNumber: {type: Number},
    dob: {type: String},
    bloodGroup: {type: String},
    gender: {type: String},
    userId: {type: mongoose.SchemaTypes.ObjectId}
});

const userDetailModel = mongoose.model("userDetails", userDetailSchema);

export default userDetailModel;