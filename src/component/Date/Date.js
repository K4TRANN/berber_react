import { useEffect, useState } from "react"
import "./Date.css"
import axiosInstance from "../../api/axiosInstance"

const Date = () => {
  const [dates,setDates] = useState([]);
  const [selected,setSelected] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const result = await axiosInstance.post("/date",{selectedHour:selected});
  }

  return (
    <section>
      <form className="dateForm" onSubmit={handleSubmit}>
        <h1 className="dateCalendar">11/3/2025</h1>
        <p>Salı</p>
        <div className="seans" >
          <input type="radio" name="options" id="options10" value={"10.00-10.30"} onChange={(e) => setSelected(e.target.value)} />
          <label className="dateLabel" htmlFor="options10">10.00-10.30</label>
        </div>  
        <div className="seans" >
          <input type="radio" name="options" id="options1030" value={"10.30-11.00"} onChange={(e) => setSelected(e.target.value)} />
          <label className="dateLabel" htmlFor="options1030">10.30-11.00</label>
        </div>  
        <div className="seans" >
          <input type="radio" name="options" id="options11" value={"11.00-11.30"} onChange={(e) => setSelected(e.target.value)} />
          <label className="dateLabel" htmlFor="options11">11.00-11.30</label>
        </div>  
        <div className="seans" >
          <input type="radio" name="options" id="options1130" value={"11.30-12.00"} onChange={(e) => setSelected(e.target.value)} />
          <label className="dateLabel" htmlFor="options1130">11.30-12.00</label>
        </div>  
        <div className="seans" >
          <input type="radio" name="options" id="options12" value={"12.00-12.30"} onChange={(e) => setSelected(e.target.value)} />
          <label className="dateLabel" htmlFor="options12">12.00-12.30</label>
        </div>  
        <div className="seans" >
          <input type="radio" name="options" id="options1230" value={"12.30-13.00"} onChange={(e) => setSelected(e.target.value)} />
          <label className="dateLabel" htmlFor="options1230">12.30-13.00</label>
        </div>  
        <button className="dateButton" type="submit">Submit</button>

      </form>

    </section>
  )
}

export default Date