import React from 'react'
import Funnel from './Funnel'
import Table from './Table'


const ThirdGroup = () => {
  return (
      <div className='w-full  flex flex-col lg:flex-row  justify-around '>
          <Funnel />
          <Table />
      </div>
  )
}

export default ThirdGroup