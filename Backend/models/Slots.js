
import mongoose  from "mongoose"

// Define your Mongoose schema and model
const Schema = mongoose.Schema;
const slotSchema = new Schema({
    id : {
        type : String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

// Create the Mongoose model
const slots = mongoose.model('slots', slotSchema);

export default slots;