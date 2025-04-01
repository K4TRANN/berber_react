import { useEffect, useState } from "react"
import "./DateComponent.css"
import axiosInstance from "../../api/axiosInstance"
import { RiAlarmWarningFill } from "react-icons/ri";

const DateComponent = () => {
  const [dates,setDates] = useState([]);
  const [selected,setSelected] = useState("");
  
  const now = new Date();

  const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  useEffect(() => {
    const fetchDates = async() => {
      try {
        const result = await axiosInstance.get("/date");
        setDates(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDates();
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const result = await axiosInstance.post("/date",{selectedHour:selected});      
    } catch (error) {
      console.log("BEKLENMEDİK BİR HATA OLUŞTUR: ", error.response);
    }
    window.location.reload();
  };


  return (
    <section className="datePlat">
      <div className="dateHeader">
        <button className="dateButton" type="submit" form="dateForm">Gönder</button>
        <RiAlarmWarningFill className="dateIcon" />
        <p className="dateWarning">Randevu saatinden en geç 1 saat öncesine kadar randevunuzu iptal edebilirsiniz!</p>
      </div>
      
        <form id="dateForm" onSubmit={handleSubmit}>
          {days.map((day,i) => (
          <div className="formPlat">
          <h1 className="dateCalendar">{(new Date(now.getTime() + i * 24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[(now.getDay() + i) % 7]}</p>
          {dates
          .filter(date => new Date(now.getTime() + i*24*60*60*1000).toLocaleDateString("en-CA") === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.avaliable ? date.reserved : true} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" style={{color: date?.reserved ? "gray" : "black"}} htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))} 
          </div>       
        ))}
        </form> 
    </section>
  )
}

export default DateComponent