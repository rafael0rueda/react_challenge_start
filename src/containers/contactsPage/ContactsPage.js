import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check contacts
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);
 const contacts = props.contacts;

 useEffect(() => {
  let dupli = contacts.find( obj => obj.name === name );
  if(dupli !== undefined){
    setDuplicate(true);
  }else{
    setDuplicate(false);
  }
});
 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
    props.contactInfo(name, phone, email);
    setDuplicate(false);
    setEmail('');
    setName('');
    setPhone('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={contacts} />
      </section>
    </div>
  );
};
