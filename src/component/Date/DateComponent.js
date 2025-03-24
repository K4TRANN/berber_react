import { useEffect, useState } from "react"
import "./DateComponent.css"
import axiosInstance from "../../api/axiosInstance"
import { RiAlarmWarningFill } from "react-icons/ri";

const DateComponent = () => {
  const [dates,setDates] = useState([]);
  const [selected,setSelected] = useState("");
  
  const now = new Date();
  const today = now.toLocaleDateString();

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
      
      <div className="seanslar">
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{today}</h1>
          <p className="dateDay">Salı</p>
          {dates.map(date => (
            <div className="seans" key={date.time}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.time}`} value={date.time} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.time}`}>{date.time}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{today}</h1>
          <p className="dateDay">Salı</p>
          {dates.map(date => (
            <div className="seans" key={date.time}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.time}`} value={date.time} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.time}`}>{date.time}</label>
            </div>
          ))}
        </form>
      </div>
    </section>
  )
}

export default DateComponent