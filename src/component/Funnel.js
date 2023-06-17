import React from 'react'
import { ResponsiveFunnel } from '@nivo/funnel'

const Funnel = () => {
    let data = [
        {
            "id": "step_sent",
            "value": 62122,
            "label": "Sent"
        },
        {
            "id": "step_viewed",
            "value": 43472,
            "label": "Viewed"
        },
        {
            "id": "step_clicked",
            "value": 28356,
            "label": "Clicked"
        },
        {
            "id": "step_add_to_card",
            "value": 24524,
            "label": "Add To Card"
        },
        {
            "id": "step_purchased",
            "value": 18129,
            "label": "Purchased"
        }
    ]
  return (
      <div className='bg-gray-800 my-3 rounded-xl px-3 pt-3  lg:w-1/2 mx-2 overflow-x-scroll sm:overflow-hidden h-fit '>
          <div>
              <p className='text-gray-400 text-sm'>Product market fit</p>
              <div className='text-xl text-red-600 flex  items-baseline '>
                  <i class="fi fi-sr-user"></i>
                  <h1 className='text-white text-2xl mx-2'> 18,367K</h1>
              </div>
          </div>
          <div className='h-80 w-[350px]    sm:w-full lg:w-full '>
              <ResponsiveFunnel
                  data={data}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  valueFormat=">-.4s"
                  colors={{ scheme: 'spectral' }}
                  borderWidth={20}
                  labelColor={{
                      from: 'color',
                      modifiers: [
                          [
                              'darker',
                              3
                          ]
                      ]
                  }}
                  beforeSeparatorLength={100}
                  beforeSeparatorOffset={20}
                  afterSeparatorLength={100}
                  afterSeparatorOffset={20}
                  currentPartSizeExtension={10}
                  currentBorderWidth={40}
                  motionConfig="wobbly"
              />
          </div>
      </div>
  )
}

export default Funnel