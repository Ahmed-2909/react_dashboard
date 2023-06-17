import React from 'react'
import { ResponsiveLine } from '@nivo/line'
const Line = ({ api }) => {
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
        <div className='h-80 w-[400px] sm:w-full lg:w-full   '>
            <ResponsiveLine
                data={api}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                colors={"blue"}

                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'month',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    tickLine: {
                        stroke: '#5e1aff', // Set the color of the bottom axis ticks
                    },
                    tickText: {
                        fill: '#5e1aff', // Set the color of the bottom axis tick labels
                    },

                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'

                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                theme={theme}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                areaBaselineValue={70}
                areaOpacity={0.1}
                useMesh={true}
                legends={[]}
            />
        </div>
    )
}

export default Line