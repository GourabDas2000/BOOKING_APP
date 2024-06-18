import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const [name ,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const RegisterUser = async (e) => {
        e.preventDefault();
        try{
            const responst = await axios.get("https://booking-app-server-f24zi0c4b-gourab-das-projects.vercel.app/");
            console.log(responst);
        }catch(error){
            console.log(error);
        }
        
    }
  return (
      <div className='mt-4 grow flex items-center justify-around'>
          <div className='mb-64'>
              <h1 className='text-4xl text-center'>Register</h1>
              <form className='max-w-md mx-auto border' onSubmit={RegisterUser}>
                  <input type='text' placeholder='username' value={name} onChange={ev => setname(ev.target.value)} />
                  <input type='email' placeholder='your@email.com' value={email} onChange={ev => setemail(ev.target.value)} />
                  <input type='password' placeholder='password' value={password} onChange={ev => setpassword(ev.target.value)} />
                  <button className='primary'>Login</button>
                  <div className='text-center py-2 text-gray-500'>
                      Already have an account?<Link className='underline text-black' to="/login">SignIn</Link>
                  </div>
              </form>
          </div>

      </div>
  )
}

export default Register