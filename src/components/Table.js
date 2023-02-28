import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'



export default function Table() {
  const [userdata, setUserdata] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  const navigate = useNavigate();
    var obj;
  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
    obj = data;
    setUserdata(obj.data);

   })
  .then(() => {
    console.log(obj);
   });
  }, []);

  const logout =(e)=>{
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      {user ? (
        <div>
            <input type="submit" onClick={logout} value='Logout'/>
        <table className='table table-dark' id='userTable'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Image</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((item, index) => 
              <tr key={index} className="text-center font-semibold hover:bg-slate-200">
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} /></td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      ) : (
        navigate('/')
      )}
    </div>
  );
}