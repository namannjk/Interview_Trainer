
import { useSelector } from "react-redux";
import Cards from "./Cards";
import store from "../utils/store";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const InterviewerList = [
    {
     id : "123",
      profileUrl: "../public/images/naman.png",
      name: "Naman Jain",
      currentCompany: "Google",
      experiance: "2 years",
      charges: "500-1000",
      description: "A Passionate software develper with 2 years of experiance",
    },
    {
        id : "123",
        profileUrl: "../public/images/naman.png",
        name: "Naman Jain",
        currentCompany: "Google",
        experiance: "2 years",
        charges: "500-1000",
        description: "A Passionate software develper with 2 years of experiance",
      },
      {
        id : "123",
        profileUrl: "../public/images/naman.png",
        name: "Naman Jain",
        currentCompany: "Google",
        experiance: "2 years",
        charges: "500-1000",
        description: "A Passionate software develper with 2 years of experiance",
      },

      {
        id : "123",
        profileUrl: "../public/images/naman.png",
        name: "Naman Jain",
        currentCompany: "Google",
        experiance: "2 years",
        charges: "500-1000",
        description: "A Passionate software develper with 2 years of experiance",
      },
      {
       
        id : "123",
        profileUrl: "../public/images/naman.png",
        name: "Naman Jain",
        currentCompany: "Google",
        experiance: "2 years",
        charges: "500-1000",
        description: "A Passionate software develper with 2 years of experiance",
      },
      {
        id : "123",
        profileUrl: "../public/images/naman.png",
        name: "Naman Jain",
        currentCompany: "Google",
        experiance: "2 years",
        charges: "500-1000",
        description: "A Passionate software develper with 2 years of experiance",
      },

      

  ];


const Interviewer = ()=>{

  const {id} = useParams();

  const [interviewList, setInterviewerList] = useState(InterviewerList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/allInterviewerList");
        console.log(response.data); // This will log the entire response data object
        const dataArray = response.data; // Assuming response.data is an array of objects
        console.log(dataArray); // This will log the array of objects
        // Now you can use the dataArray as needed, e.g., set it to state
        setInterviewerList(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function to fetch data when the component mounts

  },[]);

  console.log(id);
  const user = useSelector(store => store.userInfo);
  console.log(user);
    return(
        <div className="bg-hero-pattern bg-cover h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-gray-700 p-3 mb-5 font-bold">Choice The Interviewer Of Your Match</h1>
        
        <div className="container interviewList">

            {interviewList.map((Interviewer)=>{
                return <Cards {...Interviewer}/>
            })}
        </div>
        </div>
    );
};

export default Interviewer;