import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Schedule = () => {
  const { id } = useParams();
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();
   const user = useSelector(store => store.userInfo);
    const handleSubmit =async (e) => {
        e.preventDefault(); // Corrected method name to preventDefault()
      
        const slotData = {
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          phone: e.target.elements.phone.value,
          purpose: e.target.elements.purpose.value,
          slotId: e.target.elements.slot.value,
          interviewerId : id,
          candidateId : user.id
        };
      
        const response = await axios.post("http://localhost:3000/bookingSlot",slotData);
        if(response.status==200){
            alert("Booking Successfull");
            navigate(`/book/${user.id}`);
        }
        else{
            alert("Booking is unsuccessfull! Please try again");
        }
      
        // You can perform additional actions, such as making an Axios POST request with the form data
      };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/allSlots/${id}`
        );
        console.log(response.data); // This will log the entire response data object
        const dataArray = response.data; // Assuming response.data is an array of objects
        console.log(dataArray); // This will log the array of objects
        // Now you can use the dataArray as needed, e.g., set it to state
        setSlots(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function to fetch data when the component mounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-semibold mb-8">Book Now</h2>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id = "name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id = "email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="tel"
            id = "phone"
            placeholder="Phone No."
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            id = "purpose"
            placeholder="Purpose for Interview"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className = "m-2" for="slot">Choose a Slot: </label>
          <select id="slot" name="slot">
            {slots.map((slot) => {
              return (
                <option value={slot._id} key={slot._id}>
                  {slot.date.slice(0, 10)} - {slot.time}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Schedule;
