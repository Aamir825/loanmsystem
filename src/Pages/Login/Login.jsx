import React from 'react'

const Login = () => {
    return (
        <>
            <div>
                <div className=' flex gap-2 bg-white bg-opacity-5 h-1/3'>
                    <div className=' w-full'>
                        <img className=' w-full h-[500px] object-cover' src="https://cdn.pixabay.com/photo/2022/06/23/17/13/ball-7280265_1280.jpg" alt="" />
                    </div>
                    <div className=' w-full p-4'>
                        <h1>Sign in</h1>
                        <form action="">
                            <div className=' flex flex-col gap-2'>
                                <input type="text" placeholder='Username' />
                                <input type="password" placeholder='Password' />
                                <input type="submit" className=' bg-white text-black py-2'/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login