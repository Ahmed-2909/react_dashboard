import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

const Rader = () => {
    const data = [
        {
            "taste": "easy",
            "chardonay": 84,
            "carmenere": 75,
            "syrah": 24
        },
        {
            "taste": "easy-mid",
            "chardonay": 91,
            "carmenere": 33,
            "syrah": 54
        },
        {
            "taste": "medium",
            "chardonay": 45,
            "carmenere": 28,
            "syrah": 83
        },
        {
            "taste": "mid-hard",
            "chardonay": 84,
            "carmenere": 115,
            "syrah": 70
        },
        {
            "taste": "hard",
            "chardonay": 91,
            "carmenere": 70,
            "syrah": 82
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
      <div className='bg-gray-800 my-3 rounded-xl px-3 pt-3  lg:w-1/3 mx-2 overflow-x-scroll sm:overflow-hidden '>
          <div>
              <p className='text-gray-400 text-sm'>Completed Tasks</p>
              <div className='text-xl text-green-400 flex  items-baseline '>
                  <i class="fi fi-rs-paper-plane"></i>
                  <h1 className='text-white text-2xl mx-2'> 12,100K</h1>
              </div>
          </div>
          <div className='h-80 w-[350px]    sm:w-full lg:w-full '>
              <ResponsiveRadar
                  data={data}
                  keys={['chardonay', 'carmenere', 'syrah']}
                  indexBy="taste"
                  valueFormat=">-.2f"
                  margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                  borderColor="#121111"
                  gridLevels={4}
                  gridShape="linear"
                  gridLabelOffset={36}
                  dotSize={10}
                  dotColor={{ from: 'color', modifiers: [] }}
                  dotBorderWidth={2}
                  dotBorderColor={{ from: 'color', modifiers: [] }}
                  colors={{ scheme: 'category10' }}
                  fillOpacity={0.45}
                  blendMode="screen"
                  motionConfig="wobbly"
                  theme={theme}
                  legends={[
                      {
                          anchor: 'top-left',
                          direction: 'column',
                          translateX: -50,
                          translateY: -40,
                          itemWidth: 80,
                          itemHeight: 20,
                          itemTextColor: '#999',
                          symbolSize: 12,
                          symbolShape: 'circle',
                          effects: [
                              {
                                  on: 'hover',
                                  style: {
                                      itemTextColor: 'green'
                                  }
                              }
                          ]
                      }
                  ]}
              />
          </div>
      </div>
  )
}

export default Rader