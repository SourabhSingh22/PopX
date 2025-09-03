import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='w-[375px] h-[100vh] sm:h-[100vh] shadow-md relative'>
            <div className='align-left w-[242px] sm:h-[48px] absolute top-[330px] left-[20px]'>
                <h1 className='text-[28px] font-bold mb-2'>Welcome to PopX</h1>
                <p className='text-[18px] text-gray-500'>Loream ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>

            <div className='flex flex-col gap-3 absolute bottom-[20px] left-[20px] w-[335px] mt-4 font-semibold text-center'>
                <Link to={"/create-account"} className='bg-indigo-600 text-white font-semibold py-3 rounded-lg text-[16px] cursor-pointer hover:bg-indigo-500'>
                    Create Account
                </Link>

                <Link to={'login'} className='bg-purple-300 py-3 rounded-lg font-semibold text-[16px] cursor-pointer hover:bg-purple-200'>
                    Already Registered? Login
                </Link>
            </div>

        </div>
    )
}

export default HomePage