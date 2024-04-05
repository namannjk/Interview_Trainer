import { Link } from "react-router-dom";


const Cards = ({_id,profileUrl,name,currentCompany,experiance,charges,description}) => {
  return (
    <>
      <div className="card" style={{width : "18rem"}}>
        <img src="/public/images/naman.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name - {name}</h5>
          <h5 className="card-title">Current Company - {currentCompany}</h5>
          <h5 className="card-title">Experiance - {experiance}</h5>
          <h5 className="card-title">Charges - {charges}</h5>
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
