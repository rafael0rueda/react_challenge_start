import React from "react";

export const ContactPicker = (props) => {
  const {contacts, contact, onChange} = props;

  return (
    //ContactPicker
    <select onChange={onChange} value={contact}>
      <option defaultValue="selected" >Select contact</option>
      {contacts.map((contact, index) => (
      <option key={index} value={contact.name}>
        {contact.name}
        </option>
    ))}
    </select>
    
  );
};
