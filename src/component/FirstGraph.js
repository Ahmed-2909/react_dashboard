import React from 'react'
import { useState, useEffect } from 'react';
import Line from './line';
// import { ResponsiveLine } from '@nivo/line';

const FirstGraph = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [apiData, setApiData] = useState([{ id: "japan", color: "rgb(37, 99, 235)", data: [{ x: "Jan", y: 81 }, { x: "Feb", y: 253 }, { x: "Mar", y: 240 }, { x: "Apr", y: 74 }, { x: "May", y: 71 }, { x: "Jun", y: 279 }, { x: "Jul", y: 147 }, { x: "Aug", y: 149 }, { x: "Sep", y: 141 }, { x: "Oct", y: 105 }, { x: "Nov", y: 117 }, { x: "Dec", y: 45 }] }]);

  const fetchData = async (buttonNumber) => {
    try {
      let apiUrl;
      if (buttonNumber === 1) {
        apiUrl = 'https://mocki.io/v1/8b8245c6-fe39-4ead-a355-6c58666a744a';
      } else if (buttonNumber === 2) {
        apiUrl = 'https://mocki.io/v1/5dda784c-9d11-43c6-b601-181b4712dd3d';
      } else if (buttonNumber === 3) {
        apiUrl = 'https://mocki.io/v1/8c3301e4-acdc-47ec-9acf-9781ffd0abc2';
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log('Error fetching API:', error);
    }
  };

  useEffect(() => {
    fetchData(selectedButton);
  }, [selectedButton]);

  const handleButtonClick = async (buttonNumber) => {
    setSelectedButton(buttonNumber);
    fetchData(buttonNumber);
  }
  // const {data} = apiData[0];
  console.log(apiData);
  return (
    <div className='bg-gray-800 my-3 rounded-xl p-3 overflow-x-scroll  lg:overflow-hidden '>
      <div className='flex justify-between flex-col sm:flex-row '>
        <div >
          <p className='text-gray-400 text-sm'>Total Shipments</p>
          <h1 className='text-white text-4xl'>Performance</h1>
        </div>
        <div className=' text-blue-600 my-2  '>
          <button
            className={selectedButton === 1 ? 'bg-blue-600 text-white py-1 px-1 sm:px-3 hover:bottom-2 hover:transition-transform hover:relative border-2 border-blue-600 ' : 'border-2 border-blue-600 hover:bottom-1 py-1 px-3 hover:transition-transform hover:relative'}
            onClick={() => handleButtonClick(1)}
          >
            Year 1
          </button>
          <button
            className={selectedButton === 2 ? 'bg-blue-600 text-white py-1 px-1 sm:px-3 hover:bottom-2 hover:transition-transform hover:relative border-2 border-blue-600' : 'border-2 border-blue-600  py-1 px-3 hover:bottom-1 hover:transition-transform hover:relative'}
            onClick={() => handleButtonClick(2)}
          >
            Year 2
          </button>
          <button
            className={selectedButton === 3 ? 'bg-blue-600 text-white py-1 px-1 sm:px-3 hover:bottom-2 hover:transition-transform hover:relative border-2 border-blue-600' : 'border-2 border-blue-600  py-1 px-3 hover:bottom-1 hover:transition-transform hover:relative'}
            onClick={() => handleButtonClick(3)}
          >
            Year 3
          </button>
        </div>
      </div>
      <div>
        <Line api={apiData} />
      </div>
    </div>
  )

}
export default FirstGraph 