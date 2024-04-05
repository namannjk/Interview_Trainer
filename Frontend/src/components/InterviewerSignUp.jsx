const InterviewerSignUp = () => {
  return (
    <>
      <form
        className="signup"
        action="http://localhost:3000/register"
        method="POST"
      >
        <h1>Fill Your Details</h1>
        <input type="text" id="name" name="name" placeholder="Full Name" />
        <input type="text" placeholder="Enter Your email Id" id="email" name = "email"/>
        <input type="password" placeholder="Password" id="password" name = "password" />
        <input
          type="text"
          id="currentCompany"
          name="currentCompany"
          placeholder="Your Current Company"
        />

        <input
          type="text"
          id="experiance"
          name="experiance"
          placeholder="Your Experiance in years"
        />

        <input
          type="text"
          id="charges"
          name="charges"
          placeholder="Your Charges (Give as a range)"
        />

        <textarea
          name="description"
          id="description"
          cols="46"
          rows="3"
          placeholder="Write Something about you"
        ></textarea>

        {/* <div className="inputimage">
          <label style={{ fontSize: "22px" }} for="imageInput">
            <span> Choose an image:</span>
          </label>
          <input
            type="file"
            id="imageInput"
            name="image"
            accept="image/*"
          ></input>
        </div> */}

        <button className="btn btn-dark " type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default InterviewerSignUp;
