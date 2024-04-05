
import { Link } from "react-router-dom";
const Body = () =>{
    return (
        <>
        <div className="tagLine">
        <p className="primaryHeading">Your Partner in growth</p>
        <p className="secondaryHeading">Build strategies, build confidence, build your carrer</p>
        <div className="buttons">
        <button className="btn btn-dark"> <Link className = "white" to = {"/register/Interviewer"}>Sign Up as Interviewer</Link></button>
        <button className="btn btn-dark"> <Link className = "white" to = {"/register/candidate"}>Sign Up as Candidate</Link></button>
        </div>
        
        </div>
        
        </>
    );
}

export default Body;