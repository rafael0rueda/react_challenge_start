import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
 function contactInfo(name, phone, email){
  const newContact = {
    name: name,
    phone: phone,
    email: email
  };

  setContacts(contacts => [...contacts, newContact]);
 };

 function bookAppointment(title, contact, date, time){
  const newAppoimtment = {
    title: title,
    contact: contact, //objet type contact
    date: date,
    time: time
  };

  setAppointments(appointments => [...appointments, newAppoimtment]);
 }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contactInfo={contactInfo}
             contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage bookAppointment={bookAppointment}
             appointments={appointments}
              contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
