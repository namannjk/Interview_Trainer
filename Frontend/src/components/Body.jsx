
import { Link } from "react-router-dom";
const Body = () =>{
    return (
        <div className="h-screen overflow-hidden ">
        <div className="h-full overflow-y-hidden bg-hero-pattern bg-cover flex flex-col justify-center items-center gap-5">
        <p className="font-mono text-7xl">Your Partner in growth</p>
        <div className="w-[300px] h-1 bg-blue-500"></div>
        <p className="font-sans text-3xl">Build strategies, build confidence, build your carrier</p>
        <div className="buttons">
        <button className="bg-blue-500 p-2 rounded-md shadow-lg"> <Link className = "white" to = {"/register/Interviewer"}>Sign Up as Interviewer</Link></button>
        <button className="bg-blue-500 p-2 rounded-md shadow-lg"> <Link className = "white" to = {"/register/candidate"}>Sign Up as Candidate</Link></button>
        </div>
        
        </div>
        
        </div>
    );
}

export default Body;