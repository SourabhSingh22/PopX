import React, { useState } from 'react'
import FormInput from '../formInput/FormInput'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setLoginData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        navigate("/profile")
    }

  return (
    <div className='w-[375px] h-[100vh] shadow-md'>
        <div className='align-left w-[200px] mt-4 ml-5'>
            <h1 className='text-3xl font-bold'>Signin to your PopX account</h1>
        </div>
        <div className='mt-4 ml-5 text-gray-500 text-lg font-semibold'>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit,</p>
        </div>

        <div className='flex flex-col gap-6 mt-10 px-5'>
            <FormInput
                label={"Email Address"}
                type={"email"}
                placeholder={"Enter email address"}
                id={"email"}
                isRequired={true}
                value={loginData.email}
                onchange={handleChange}
             />
            <FormInput
                label={"Password"}
                type={"password"}
                placeholder={"Enter your password"}
                id={"password"}
                isRequired={true}
                value={loginData.password}
                onchange={handleChange}
             />


             <Link onClick={handleSubmit}
            type="submit"
            className={`w-full py-3 rounded-md font-medium text-center ${
              loginData.email && loginData.password
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={!loginData.email || !loginData.password}
          >
            Login
          </Link>
        </div>
    </div>
  )
}

export default LoginPage