import React, { useEffect, useState } from "react";
import axios from "axios";

const Calendar = ({id}) => {
  const [data, setData] = useState({
    date: "",
    time: ""
  });
  const [slots, setSlots] = useState([]);
  const [clk, setclk] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/allSlots/${id}`);
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

  }, [data]);
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      id: id,
      date: data.date,
      time: data.time
    };
    axios.post("http://localhost:3000/addSlot", userData)
      .then((response) => {
        console.log(response.status, response.data.token);
        alert("Successfully added");
        setclk(prevState => (prevState === 1 ? 0 : 1)); // Toggle the value of clk
      })
      .catch(() => { 
        alert("Internal server error");
      });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="time">
          <input className="m-2"
            type="time"
            name="time"
            value={data.time}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Add</button>
      </form>

      <div className=" mt-4">
        <h2 className="text-xl text-gray-600 font-semibold mb-2">Your Availble Slots</h2>
        {slots.map((slot)=>{
          return <p > {slot.date.slice(0,10)} - {slot.time}</p>
        })}
      </div>
    </div>
  );
};

export default Calendar;
