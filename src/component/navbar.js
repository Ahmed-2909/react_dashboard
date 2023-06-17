import React from 'react'


const Navbar = () => {
    return (
        <div className='hidden lg:block text-white  '>
            <div className='flex items-center m-4   border-b-2 border-white p-2'>
                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="react logo" className='w-1/5' />
                <p className='mx-2  text-xl'>React Js</p>
            </div>
            <div className='my-2 mx-5 p-2  flex flex-col justify-between h-[75vh]  '>
                <div>
                    <div className='flex my-5 items-baseline cursor-pointer' >
                        <i class="fi fi-rr-chart-histogram "></i>
                        <p className='ml-8'>DASHBOARD</p>
                    </div>
                    <div className='flex my-5 items-center cursor-pointer' >
                        <i class="fi fi-brands-atom"></i>
                        <p className='ml-8'>ICONS</p>
                    </div>
                    <div className='flex my-5 cursor-pointer' >
                        <i class="fi fi-rr-thumbtack"></i>
                        <p className='ml-8'>MAP</p>
                    </div>
                    <div className='flex my-5 cursor-pointer' >
                        <i class="fi fi-rr-bell"></i>
                        <p className='ml-8'>NOTIFICATION</p>
                    </div>
                    <div className='flex my-5 cursor-pointer' >
                        <i class="fi fi-rr-user"></i>
                        <p className='ml-8'>USER PROFILE</p>
                    </div>
                    <div className='flex my-5 cursor-pointer' >
                        <i class="fi fi-rs-puzzle-piece"></i>
                        <p className='ml-8'>TABLE LIST</p>
                    </div>
                    <div className='flex my-5 cursor-pointer' >
                        <i class="fi fi-rs-document-signed"></i>
                        <p className='ml-8'>TYPOGRAPHY</p>
                    </div>
                    <div className='flex my-5 cursor-pointer' >
                        <i class="fi fi-rs-world"></i>
                        <p className='ml-8'>RTL SUPPORT</p>
                    </div>
                </div>
                <div className='flex items-center pb-5 cursor-pointer' >
                    <i class="fi fi-rs-rocket-lunch"></i>
                    <p className='ml-8'>UPGRADE TO PRO</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar