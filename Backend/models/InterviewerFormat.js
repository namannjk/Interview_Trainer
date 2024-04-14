
import mongoose  from "mongoose"

// Define your Mongoose schema and model
const Schema = mongoose.Schema;
const objSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    currentCompany: {
        type: String,
        required: true,
    },
    experiance: {
        type: String,
        required: true,
    },
    charges: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    profileImageURL : {
       type : String,
       required : true
    }
});

// Create the Mongoose model
const Interviewer = mongoose.model('Interviewer', objSchema);

export default Interviewer;