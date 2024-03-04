import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors"; // Import the cors middleware
const app = express();


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "myDatabase",
    password: "Ajain887800@",
    port: 5000,
  });

db.connect();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;

        console.log(email);
        console.log(password);

        await db.query("insert into InterviewTrainerUsers values($1,$2)", [email, password]);

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
        console.log(password);
        const orgPass = await db.query("select password from InterviewTrainerUsers where email = ($1)", [email]);
        console.log(orgPass.rows[0].password);

        if (orgPass.rows[0].password === password) {
            res.send("correct");
        } else {
            res.send("not correct");
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).send("Internal Server Error");
    }
});



app.listen(3000,(req,res)=>{
    console.log("server is running");
});