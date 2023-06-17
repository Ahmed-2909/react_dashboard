import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const PIa = () => {
    const data = [
        {
            "id": "sass",
            "label": "sass",
            "value": 286,
            "color": "hsl(200, 70%, 50%)"
        },
        {
            "id": "elixir",
            "label": "elixir",
            "value": 246,
            "color": "hsl(179, 70%, 50%)"
        },
        {
            "id": "lisp",
            "label": "lisp",
            "value": 570,
            "color": "hsl(176, 70%, 50%)"
        },
        {
            "id": "python",
            "label": "python",
            "value": 443,
            "color": "hsl(340, 70%, 50%)"
        },
        {
            "id": "stylus",
            "label": "stylus",
            "value": 132,
            "color": "hsl(112, 70%, 50%)"
        }
    ]

    return (
        <div className=' bg-gray-800 my-3 mx-2 rounded-xl px-3 pt-3  lg:w-1/3 overflow-x-scroll sm:overflow-hidden  '>
            <div>
                <p className='text-gray-400 text-sm'>Total Language</p>
                <div className='text-xl text-blue-600 flex  items-baseline '>
                    <i class="fi fi-rr-bell"></i>
                    <h1 className='text-white text-2xl mx-2'>763,215</h1>
                </div>
            </div>
            <div className='h-80 w-[300px]    sm:w-full lg:w-full  '>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#fafafa"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabel="value"
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                2
                            ]
                        ]
                    }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'ruby'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'c'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'go'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'lisp'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'elixir'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'javascript'
                            },
                            id: 'lines'
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 61,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
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

export default PIa