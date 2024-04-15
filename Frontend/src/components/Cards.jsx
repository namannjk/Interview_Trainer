import { Link } from "react-router-dom";


const Cards = ({_id,profileUrl,name,currentCompany,experiance,charges,description}) => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center gap-y-2" style={{width : "18rem"}}>
        <img src="/public/images/naman.png" className="card-img-top" alt="..." />
        <div className="flex flex-col gap-y-1">
          <h5 className="card-title">Name - {name}</h5>
          <h5 className="card-title">Current Company - {currentCompany}</h5>
          <h5 className="card-title">Experiance - {experiance}</h5>
          <h5 className="card-title">Charges - Rs. {charges}</h5>
          <p className="card-text">
            {description}
          </p>
          <Link className = "btn btn-primary" to={`/schedule/${_id}`}> Schedule Now</Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
