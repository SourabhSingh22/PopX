import React from 'react'

import Profile from '../../assets/profile.png'
import Camera from '../../assets/camera.png'


const ProfilePage = () => {

    const fullName = localStorage.getItem('userFullName' || '');
    const email = localStorage.getItem('userEmail' || '');


    return (
        <div className='w-[385px] sm:w-[375px] h-[100vh] shadow-md bg-gray-50 relative'>
            <div className='bg-white w-full h-16 shadow-sm pl-6 text-lg text-gray-800 font-semibold py-4'>
                <h1>Account Settings</h1>
            </div>

            <div className='flex gap-4 my-6 px-5'>
                <div className='rounded-full bg-purple-100 ml-2 relative'>
                    <img className='w-20 h-20' src={Profile} alt="profile" />
                    <img className='absolute bottom-0 right-0 w-8 h-7 rounded-full object-scale-down' src={Camera} alt="camera" />
                </div>
                <div className='w-24'>
                    <p className='font-semibold text-lg text-gray-800'>{fullName || "userName"}</p>
                    <p className='text-gray-500'>{email || "userEmail"}</p>
                </div>
            </div>

            <div className='px-5'>
                <p className='text-[14px] text-gray-600 capatilize'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
            <div className="mt-4 mb-4 w-full">
               <p className='text-gray-300'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            </div>

            <div className="mt-4 mb-4 w-full absolute bottom-1">
               <p className='text-gray-300'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            </div>
        </div>
    )
}

export default ProfilePage