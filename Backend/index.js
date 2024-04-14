import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import the cors middleware
import mongoose from "mongoose";
import Interviewer from "./models/InterviewerFormat.js";
import Candidate from "./models/candidateFormat.js";
import slots from "./models/Slots.js";
import BookedSlot from "./models/bookedSlot.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current file's URL
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current file
const __dirname = dirname(__filename);
const app = express();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Use original filename
  }
});

const upload = multer({ storage: storage })
// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://namankhrj:Ajain887800@interviewtrainer.mxzu5nl.mongodb.net/?retryWrites=true&w=majority&appName=InterviewTrainer",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes

app.post("/addSlot", async (req, res) => {
  try {
    const data = req.body;
  //  console.log(data);
    const newSlot = new slots(data);
    const response = await newSlot.save();
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/allSlots/:id", async (req, res) => {
    try {
        const id = req.params.id;
      //  console.log(id);
        const data = await slots.find({ id: id });
       // console.log(data);
        res.json(data); // Send the retrieved data as JSON response
    } catch (error) {
        console.error("Error fetching slots:", error);
        res.status(500).send("Internal server error"); // Send an error response
    }
});

app.post("/bookingSlot",async (req,res)=>{
 
  try{
    const slotId = req.body.slotId;
    const deletedSlot = await slots.findByIdAndDelete(slotId); // Convert slotId to ObjectId and await deleteOne
    console.log(deletedSlot);
    console.log(req.body.interviewerId);
    const interviewerData = await Interviewer.findById(req.body.interviewerId);
    console.log(interviewerData);
    const slotData = {
        candidateName : req.body.name,
        candidateEmail : req.body.email,
        candidatePhone : req.body.phone,
        candidateId : req.body.candidateId,
        interviewerId : req.body.interviewerId,
        candidateProfileImageURL : "",
        interviewerId : req.body.interviewerId,
        interviewerName : interviewerData.name,
        interviewerEmail : interviewerData.email,
        interviewerProfileImageURL : interviewerData.profileImageURL,
        purpose : req.body.purpose,
        slotId : req.body.slotId,
        date : deletedSlot.date,
        time : deletedSlot.time,
    }
   const newSlot = new BookedSlot(slotData);
   await newSlot.save();
   console.log("newSlot Details" + newSlot);
   
   res.send(newSlot)

  }
  catch{async()=>{

    res.status(500).send("Error in Booking slot")
  }}
});

app.post("/getUpcomingList",async (req,res)=>{
  console.log("inside in futire route");
    try{
      const interviewerId = req.body.id;
      console.log("interviewer ID" + interviewerId);
      var list = await BookedSlot.find({interviewerId : interviewerId});
      console.log(list);
      if(list.length==0){
        list = await BookedSlot.find({candidateId : interviewerId});
      }
      res.json(list);
    }
    catch{
      res.status(500).send("internal server error")
    }
})

app.get("/allInterviewerList",async (req,res)=>{
  try{
    const data = await Interviewer.find();
   /// console.log(data);
    res.json(data);
  }
  catch{
    res.status(500).send("failed");
  }
})



app.post("/register",upload.single("profileImage"), async (req, res) => {
   try {
    const data = req.body; // Form fields other than the image
    const profileImage = req.file; // Uploaded image file


    if (data.charges) {
      const interviewer = {
        name : data.name,
        email : data.email,
        password : data.password,
        currentCompany : data.currentCompany,
        experiance : data.experiance,
        charges : data.charges,
        description : data.description,
        profileImageURL : profileImage.path
      }
  
      console.log(interviewer); 
      const newInterviewer = new Interviewer(interviewer);
      await newInterviewer.save();
    } else {
      const newCandidate = new Candidate(data);
      await newCandidate.save();
    }

    res.send("ok");
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const id = req.body.id;

    if (id == 0) {
      const user = await Interviewer.findOne({ email: email });
      if (!user) return res.send("User not found");
      else
      {
        if (user.password == password) {
            // Passwords match
            res.send({
              user: user,
              id: 0,
            });
          } else {
            // Passwords don't match
            res.send("not ok");
          }
      }
    }
    else{
    const user = await Candidate.findOne({ email: email });
      if (!user) return res.send("User not found");
      else
      {
        if (user.password == password) {
            // Passwords match
            res.send({
              user: user,
              id: 1,
            });
          } else {
            // Passwords don't match
            res.send("not ok");
          }
      }
    }
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
