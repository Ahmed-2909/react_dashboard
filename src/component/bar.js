import React from 'react'
import { ResponsiveRadialBar } from '@nivo/radial-bar'

const Bar = () => {

    const data = [
        {
            "id": "Supermarket",
            "data": [

                {
                    "x": "Supermarket",
                    "y": 200
                },

            ]
        },
        {
            "id": "Combini",
            "data": [
                {
                    "x": "Combini",
                    "y": 233
                },

            ]
        },
        {
            "id": "Online",
            "data": [

                {
                    "x": "Online",
                    "y": 323
                },

            ]
        }
    ]
    const theme = {
        background: "transparent",
        axis: {
            fontSize: "14px",
            tickColor: "#eee",
            ticks: {
                line: {
                    stroke: "#555555"
                },
                text: {
                    fill: "#ffffff"
                }
            },
            legend: {
                text: {
                    fill: "#aaaaaa"
                }
            }
        },
        grid: {
            line: {
                stroke: "#555555"
            }
        }
    };
    return (
        <div className='bg-gray-800 my-3 rounded-xl mx-2 px-3 pt-3  lg:w-1/3 overflow-x-scroll sm:overflow-hidden '>
            <div>
                <p className='text-gray-400 text-sm'>Daily Sales</p>
                <div className='text-xl text-pink-600 flex  items-baseline '>
                    <i class="fi fi-rs-truck-moving"></i>
                    <h1 className='text-white text-2xl mx-2'> 3,500€</h1>
                </div>
            </div>
            <div className='h-80 w-[400px]    sm:w-full lg:w-full '>
                <ResponsiveRadialBar
                    data={data}
                    valueFormat=">-.2f"
                    padding={0.4}
                    cornerRadius={2}
                    colors={{ scheme: 'pink_yellowGreen' }}
                    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                    legends={[]}
                    theme={theme}
                />
            </div>
        </div>
    )
}

export default Bar