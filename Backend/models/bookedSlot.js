


import mongoose  from "mongoose"

// Define your Mongoose schema and model
const Schema = mongoose.Schema;
const slotScheme = new Schema({
    candidateName: {
        type: String,
        required: true
    },
    candidateEmail: {
        type: String,
        required: true,
        unique: true
    },
    candidatePhone: {
        type: Number,
        required: true,
    },
    candidateId : {
        type: String,
        required : true
    },
    candidateProfileImageURL : {
        type : String
        
    },
    interviewerId : {
        type: String,
        required : true
    },
    interviewerName : {
        type: String,
        required : true
    },
    interviewerEmail : {
        type: String,
        required : true
    },
    interviewerProfileImageURL:{
        type: String,
        required : true
    },
    purpose:{
        type: String,
        required : true
    },
    slotId:{
        type: String,
        required : true
    },
    date:{
        type : Date,
        required : true
    },
    time:{
        type : String,
        required : true
    }
});

// Create the Mongoose model
const BookedSlot = mongoose.model('BookedSlot', slotScheme);

export default BookedSlot;
