const InterviewerSignUp = () => {
  return (
    <div className="bg-hero-pattern bg-cover h-screen flex justify-center items-center">
      <form
        className="flex flex-col p-5 bg-gray-300 gap-y-3 rounded-xl border-2 border-blue-300"
        action="http://localhost:3000/register"
        method="POST"
      >
        <h1 className="text-center text-3xl text-blue-400 font-semibold">Fill Your Details</h1>
        <input className="p-2 rounded-md text-center" type="text" id="name" name="name" placeholder="Full Name" />
        <input className="p-2 rounded-md text-center" type="text" placeholder="Enter Your email Id" id="email" name = "email"/>
        <input className="p-2 rounded-md text-center" type="password" placeholder="Password" id="password" name = "password" />
        <input className="p-2 rounded-md text-center"
          type="text"
          id="currentCompany"
          name="currentCompany"
          placeholder="Your Current Company"
        />

        <input className="p-2 rounded-md text-center"
          type="text"
          id="experiance"
          name="experiance"
          placeholder="Your Experiance in years"
        />

        <input className="p-2 rounded-md text-center"
          type="text" 
          id="charges"
          name="charges"
          placeholder="Your Charges (Give as a range)"
        />

        <textarea className="p-2 rounded-md text-center"
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

        <button className="w-full p-2 bg-blue-500 text-center border-2 border-blue-600 text-xl font-semibold rounded-lg text-white hover:bg-blue-700" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default InterviewerSignUp;
