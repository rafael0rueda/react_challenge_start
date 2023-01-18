import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const regexPhone = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}";
  return (
    
    //ContactForm
    <form onSubmit={handleSubmit}>
      <input type='text'
             value={name} 
             onChange={ (e) => setName(e.target.value)}
             placeholder="Name" >
      </input>
      <input type='tel' 
             value={phone}
             onChange={(e) => setPhone(e.target.value)} 
             pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
             placeholder="800-555-5555" >
      </input>
      <input type='email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="example@mail.com" >
      </input>
      <input type='submit' ></input>
    </form>
  );
};
