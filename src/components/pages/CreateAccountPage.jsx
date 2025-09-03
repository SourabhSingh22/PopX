import React, { useState } from 'react'
import FormInput from '../formInput/FormInput'
import { useNavigate } from 'react-router-dom'

const CreateAccountPage = () => {

    const [signupData, setSignupData] = useState({
        fullname: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setSignupData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/profile")
    }

    localStorage.setItem('userFullName', signupData.fullname);
    localStorage.setItem('userEmail', signupData.email);


    return (
        <div className='w-[385px] sm:w-[375px] h-[100vh] shadow-md relative bg-gray-50 px-2 py-4'>
            <div className=' w-56 mt-1 ml-4'>
                <h1 className='text-3xl font-bold '>Create your PopX account</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <div className='flex flex-col gap-7 mt-8 px-4'>
                    <FormInput
                        label={"Full Name"}
                        placeholder={"Enter full name"}
                        type={"text"}
                        id={"fullname"}
                        value={signupData.fullname}
                        onchange={handleChange}
                        isRequired={true}
                    />
                    <FormInput
                        label={"Phone number"}
                        placeholder={"Enter Phone number"}
                        type={"number"}
                        id={"phoneNumber"}
                        value={signupData.phoneNumber}
                        onchange={handleChange}
                        isRequired={true}
                    />
                    <FormInput
                        label={"Email Address"}
                        placeholder={"Enter email address"}
                        type={"text"}
                        id={"email"}
                        value={signupData.email}
                        onchange={handleChange}
                        isRequired={true}
                    />
                    <FormInput
                        label={"Password"}
                        placeholder={"Enter password"}
                        type={"password"}
                        id={"password"}
                        value={signupData.password}
                        onchange={handleChange}
                        isRequired={true}
                    />
                    <FormInput
                        label={"Company Name"}
                        placeholder={"Enter company name"}
                        type={"text"}
                        id={"companyName"}
                        onchange={handleChange}
                        value={signupData.companyName}
                    />
                </div>

                <div className='px-4 mt-4'>
                    <h1 className='text-sm text-gray-800'>Are you an Agency?<span className='text-red-500'>*</span></h1>

                    <div className='flex gap-4 text-sm mt-4'>
                        <div className='flex items-center justify-center'>
                            <input
                                type="radio"
                                id="agencyYes"
                                name="agency"
                                value="yes"
                                className='mr-2 w-4 h-4 accent-purple-600'
                            />
                            <label htmlFor="agencyYes">Yes</label>
                        </div>

                        <div className='flex items-center justify-center'>
                            <input
                                type="radio"
                                id="agencyNo"
                                name="agency"
                                value="no"
                                className='mr-2 w-4 h-4 accent-purple-600'
                            />
                            <label htmlFor="agencyNo">No</label>
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: "#6C25FF" }}
                        className="px-2 py-3 rounded-md sm:mt-8 mt-25"
                    >
                        <button className="text-center w-full text-white font-medium cursor-pointer">
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountPage