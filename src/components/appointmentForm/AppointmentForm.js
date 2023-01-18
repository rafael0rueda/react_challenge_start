import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    //AppointmentForm
    <form onSubmit={handleSubmit} >
      <input type="text" 
             value={title}
             onChange={ (e) => setTitle(e.target.value)} ></input>
      <input type="date" 
             value={date}
             onChange={ (e) => setDate(e.target.value)} ></input>
      <input type="time" 
             value={time}
             onChange={ (e) => setTime(e.target.value)}
             min={getTodayString()} ></input>
      <ContactPicker contacts={contacts}
                     contact={contact} 
                     setContact={setContact}
                     onChange={(e) => setContact(e.target.value)} />
      <input type="submit" ></input>
    </form>
  );
};
