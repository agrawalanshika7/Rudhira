import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    name: {
        recipientName: {type: String},
        bloodBankName: {type: String}
    },
    date: {
        publishDate: {type: String},
        endDate: {type:String}
    },
    phoneNumber: {type: Number},
    address: {type: String},
    state: {type: String},
    city: {type: String},
    bloodGroup: {type: String},
    userId: {type: mongoose.SchemaTypes.ObjectId},
    isDonationCamp: {type: Boolean}
})

const requestModel = mongoose.model("requests",requestSchema);

export default requestModel;