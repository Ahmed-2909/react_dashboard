import React from 'react'

const SmallNavbar = () => {
    return (
        <div >
            <div className=' my-2  p-2 text-xs bg-blue-600 rounded-xl text-white w-full grid grid-cols-2 sm:grid-cols-3 lg:hidden'>
                <div className='flex my-5 items-baseline cursor-pointer' >
                    <i class="fi fi-rr-chart-histogram "></i>
                    <p className='ml-4'>DASHBOARD</p>
                </div>
                <div className='flex my-5 items-center cursor-pointer' >
                    <i class="fi fi-brands-atom"></i>
                    <p className='ml-4'>ICONS</p>
                </div>
                <div className='flex my-5 cursor-pointer' >
                    <i class="fi fi-rr-thumbtack"></i>
                    <p className='ml-4'>MAP</p>
                </div>
                <div className='flex my-5 cursor-pointer' >
                    <i class="fi fi-rr-bell"></i>
                    <p className='ml-4'>NOTIFICATION</p>
                </div>
                <div className='flex my-5 cursor-pointer' >
                    <i class="fi fi-rr-user"></i>
                    <p className='ml-4'>USER PROFILE</p>
                </div>
                <div className='flex my-5 cursor-pointer' >
                    <i class="fi fi-rs-puzzle-piece"></i>
                    <p className='ml-4'>TABLE LIST</p>
                </div>
                <div className='flex my-5 cursor-pointer' >
                    <i class="fi fi-rs-document-signed"></i>
                    <p className='ml-4'>TYPOGRAPHY</p>
                </div>
                <div className='flex my-5 cursor-pointer' >
                    <i class="fi fi-rs-world"></i>
                    <p className='ml-4'>RTL SUPPORT</p>
                </div>
                <div className='flex my-5  cursor-pointer' >
                    <i class="fi fi-rs-rocket-lunch"></i>
                    <p className='ml-4'>UPGRADE TO PRO</p>
                </div>
            </div>

        </div>
    )
}

export default SmallNavbar