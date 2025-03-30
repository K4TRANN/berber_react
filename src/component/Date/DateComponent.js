import { useEffect, useState } from "react"
import "./DateComponent.css"
import axiosInstance from "../../api/axiosInstance"
import { RiAlarmWarningFill } from "react-icons/ri";

const DateComponent = () => {
  const [dates,setDates] = useState([]);
  const [selected,setSelected] = useState("");
  
  const now = new Date();
  const today = now.toLocaleDateString("en-CA");
  const tomorrow = new Date(now.getTime() + 24*60*60*1000).toLocaleDateString("en-CA");
  const third = new Date(now.getTime() + 2*24*60*60*1000).toLocaleDateString("en-CA");
  const fourth = new Date(now.getTime() + 3*24*60*60*1000).toLocaleDateString("en-CA");
  const fifth = new Date(now.getTime() + 4*24*60*60*1000).toLocaleDateString("en-CA");
  const sixth = new Date(now.getTime() + 5*24*60*60*1000).toLocaleDateString("en-CA");
  const seventh = new Date(now.getTime() + 6*24*60*60*1000).toLocaleDateString("en-CA");

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
      
      <div className="seanslar">
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{now.toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() % 7]}</p>
          {dates
          .filter(date => today === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.avaliable ? date.reserved : true} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" style={{color: date?.reserved ? "gray" : "black"}} htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{(new Date(now.getTime() + 24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() + 1 % 7]}</p>
          {dates
          .filter(date => tomorrow === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{(new Date(now.getTime() + 2*24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() + 2 % 7]}</p>
          {dates
          .filter(date => third === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{(new Date(now.getTime() + 3*24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() + 3 % 7]}</p>
          {dates
          .filter(date => fourth === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{(new Date(now.getTime() + 4*24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() + 4 % 7]}</p>
          {dates
          .filter(date => fifth === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{(new Date(now.getTime() + 5*24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() + 5 % 7]}</p>
          {dates
          .filter(date => sixth === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
        <form className="dateForm" onSubmit={handleSubmit}>
          <h1 className="dateCalendar">{(new Date(now.getTime() + 6*24 * 60 * 60 * 1000)).toLocaleDateString()}</h1>
          <p className="dateDay">{days[now.getDay() + 6 % 7]}</p>
          {dates
          .filter(date => seventh === date.date)
          .map(date => (
            <div className="seans" key={date.startTime}>
              <input disabled={date.reserved} type="radio" name="options" id={`options${date.startTime}`} value={date.startTime} onChange={(e) => setSelected(e.target.value)} />
              <label className="dateLabel" htmlFor={`options${date.startTime}`}>{date.startHour} - {date.endHour}</label>
            </div>
          ))}
        </form>
      </div>
    </section>
  )
}

export default DateComponent