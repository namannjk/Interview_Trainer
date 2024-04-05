
const InterviewCards = ({name, email, phone, date, time, purpose, candidateId})=>{
    return(
        <>
            <div className="flex bg-white border-black rounded-md text-left m-5 w-full justify-between p-2">
                <div className="space-x-2">
                    <p className="m-0 font-serif">Name - {name}</p>
                    <p className="m-0 font-serif">Email - {email}</p>
                    <p className="m-0 font-serif">Phone No. - {phone}</p>
                    <p className="m-0 font-serif">Date and Time - {date.slice(0,10)} - {time}</p>
                    <p  className="m-0 font-serif"> Purpose - {purpose}</p>
                </div>
                <div>
                    <div className="w-20 m-2">
                    <img src="images/naman.png" alt="image" />
                    </div>
                    <button className="btn btn-primary">Start Now</button>
                </div>
            </div>
        </>
    );
}

export default InterviewCards;