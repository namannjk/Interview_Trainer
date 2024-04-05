


import mongoose  from "mongoose"

// Define your Mongoose schema and model
const Schema = mongoose.Schema;
const slotScheme = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    purpose:{
        type: String,
        required : true
    },
    slotId:{
        type: String,
        required : true
    },
    interviewerId:{
        type: String,
        required : true
    },
    candidateId : {
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
