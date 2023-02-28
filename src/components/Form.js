import React, {useState} from 'react'
import '../App.css'

const Form=() =>{
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const user ={
      email: email,
      first_name: firstname,
      last_name: lastname,
      contact: contact
    }
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href='/view';
  }

  return (
    <form id="contact" onSubmit={handleSubmit}>
            <h3>Eunimart Assignment</h3>
              <input placeholder="First Name" type="text" onChange={(e)=>setFirstName(e.target.value)}  required  margin="10px" name="first_name"></input>
  
              <input placeholder="Last Name" type="text" onChange={(e)=>setLastName(e.target.value)} required  margin="10px"name="last_name" ></input>
            
              <input placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)}  required  margin="10px" name="email"></input>
            
              <input placeholder="Phone Number" type="text" onChange={(e)=>setContact(e.target.value)}  required  margin="10px" name="phone"></input>
            
              <input name="submit" type="submit" id="contact-submit" />     
    </form>
  )
}

export default Form