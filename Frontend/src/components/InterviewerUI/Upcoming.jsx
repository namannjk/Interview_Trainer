import { useEffect, useState } from "react";
import InterviewCards from "./InterviewCards";
import { useSelector } from "react-redux";
import axios from "axios";

const Upcoming = ()=>{


    const user = useSelector(store => store.userInfo);
    const id = user.id;
    const [list, setList] = useState([]);
    useEffect(()=>{
        const updateList = async ()=>{
            const response = await axios.post("http://localhost:3000/getUpcomingList",{id});
            setList(response.data);
        }
        updateList();
    },[]);
    return(
        <>
        <h1 className="text-center">Your Upcoming Interview</h1>
        <div className="w-1/2 m-auto">
            {list.map((interview)=>{
                return <InterviewCards {...interview}/>
            })}
        </div>
        </>
    );
}

export default Upcoming;