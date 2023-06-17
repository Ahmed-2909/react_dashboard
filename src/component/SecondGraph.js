import React from 'react'
import PIa from './PIa'
import Bar from './bar'
import Rader from './Rader'

const SecondGraph = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row  justify-around '>
            <PIa />
            <Bar />
            <Rader />
        </div>
    )
}

export default SecondGraph