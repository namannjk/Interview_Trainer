
import mongoose  from "mongoose"

// Define your Mongoose schema and model
const Schema = mongoose.Schema;
const objSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

// Create the Mongoose model
const Candidate = mongoose.model('Candidate', objSchema);

export default Candidate;