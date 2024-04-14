import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InterviewerSignUp = () => {
  const [image, setImage] = useState(null); // State to store the selected image file

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Update the image state with the selected file
  };

  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Create FormData object to send form data including the image file
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("password", e.target.password.value);
    formData.append("currentCompany", e.target.currentCompany.value);
    formData.append("experiance", e.target.experiance.value);
    formData.append("charges", e.target.charges.value);
    formData.append("description", e.target.description.value);
    formData.append("profileImage", image);

    try {
      const response = await axios.post("http://localhost:3000/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
      } 
    );
    navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className="signup text-black text-pretty" onSubmit={handleSignUp}>
        <h1>Fill Your Details</h1>
        <input type="text" id="name" name="name" placeholder="Full Name" />
        <input type="text" placeholder="Enter Your email Id" id="email" name="email" />
        <input type="password" placeholder="Password" id="password" name="password" />
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
          placeholder="Your Experience in years"
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

        <input
          type="file"
          id="imageInput"
          name="profileImage"
          accept="image/*"
          onChange={handleImageChange} // Handle image file selection
        />

        {image && <img src={URL.createObjectURL(image)} style={{ width: "50px", height: "50px" }} />}

        <button className="btn btn-dark" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default InterviewerSignUp;
