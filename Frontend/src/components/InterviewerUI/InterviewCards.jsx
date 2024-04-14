import { useSelector } from "react-redux";
import store from "../../utils/store";

const InterviewCards = ({candidateName,candidateEmail,candidatePhone,candidateId,interviewerId,
    candidateProfileImageURL,interviewerName,interviewerEmail,interviewerProfileImageURL,purpose,slotId,date,time})=>{

        const user = useSelector(store => store.userInfo);
        const id = user.IorC;
        const profileImageURL = (id==1?interviewerProfileImageURL:candidateProfileImageURL);
    return(
        <>
            <div className="flex bg-white border-black rounded-md text-left m-5 w-full justify-between p-2">
                <div className="space-x-2">
                    <p className="m-0 font-serif">Name - {id==1?interviewerName:candidateName}</p>
                    <p className="m-0 font-serif">Email - {id==1?interviewerEmail:candidateEmail}</p>
                    {id==1?null:<p className="m-0 font-serif">Phone No. - {candidatePhone}</p>}
                    <p className="m-0 font-serif">Date and Time - {date.slice(0,10)} - {time}</p>
                    <p  className="m-0 font-serif"> Purpose - {purpose}</p>
                </div>
                <div>
                    <div className="w-20 m-2">
                    <img src={`http://localhost:3000/${profileImageURL}`} alt="image" />
                    </div>
                    <button className="btn btn-primary">Start Now</button>
                </div>
            </div>
        </>
    );
}

export default InterviewCards;