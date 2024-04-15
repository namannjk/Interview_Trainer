
import { useParams } from "react-router-dom";
import InterviewCards from "./InterviewCards";
import Calendar from "./Calender";
import { useEffect, useState } from "react";
import axios from "axios";
// const InterviewList = [{
//     name: 'aman jain',
//     email: 'amankhrj@gmaul.com',
//     phone: '567581885',
//     purpose: 'jkhuhu hu',
//     slotId: '66026c2dc671ee7940d41e2a',
//     interviewerId: '65f9e9df6e1b662a01fe1d70',
//     candidateId: '65fd4f17a46e3bf29d03fdb9',
//     date: '2024-03-22T00:00:00.000Z',
//     time: '14:11',

// }]
const InterviewerInterface = ()=>{
    const {id} = useParams();
    const [interviewList, setInterviewList] = useState([]);
    useEffect(()=>{
        const handleUpdate = async ()=>{
            const slotData = await axios.post("http://localhost:3000/getUpcomingList",{id});
            setInterviewList(slotData.data);
        }
        handleUpdate();
    },[id]);
    return(
        <div className="bg-hero-pattern bg-cover h-screen flex justify-center">
            <div className="flex w-[90%] bg-gray-300 h-screen">
            <div className="w-1/2 text-center  mt-5">
                <h1 className="text-3xl font-semibold text-gray-600">Your Upcoming Interview</h1>
                {interviewList.map((Interview)=>{
                    return <InterviewCards key ={Interview.slotId} {...Interview}/>
                })}
            </div>
            <div className="w-1/2 text-center mt-5">
            <div className="h-1/2">
                <h2 className="text-3xl font-semibold text-gray-600">Update Your availbility</h2>
                <div className="mt-5">
                    <Calendar id = {id} />
                </div>
            </div>
            {/* <div className="h-1/2 p-5 m-2">
                <h2>Completed Interview</h2>
                {InterviewList.map((Interview)=>{
                    return <InterviewCards {...Interview}/>
                })}
            </div> */}
            </div>
        </div>
        </div>
    );
}

export default InterviewerInterface;