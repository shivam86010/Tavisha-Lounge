import React, { useState } from 'react'

function LoginSign() {
    const [inputData, setInputData]=useState({
        email : "",
        password : "",
    })

    const handleChange = (e)=>{

    }
  return (
    <div>
      <div></div>
      <div>
        <form>
            <div>
                <label>Email</label>
                <input 
                  type='email'
                  name='email'
                  value={inputData.email}
                  onChange={handleChange}
                  className='w-full rounded-md'
                />
            </div>
            <div>
                <label>PassWord</label>
                <input 
                   type='password'
                   name='password'
                   value={inputData.password}
                   onChange={handleChange}
                   className='w-full rounded-md'
                />
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSign
