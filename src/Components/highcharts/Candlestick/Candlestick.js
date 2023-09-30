import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
// import HighchartsReact from 'highcharts-react-official';

const Candlestick = () => {


    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(response => setData(response))
        //    .then(response => console.log(JSON.stringify(response))

    }, [])
    useEffect(() => {
        const options = {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                type: 'candlestick',
                name: 'AAPL Stock Price',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]
                    ]
                }
            }]
        };
        // const options = {
        //     rangeSelector: {
        //         selected: 1
        //     },
        //     title: {
        //         text: 'Candlestick Chart Example',
        //     },
        //     xAxis: {
        //         type: 'datetime',
        //     },
        //     yAxis: {
        //         title: {
        //             text: 'Price',
        //         },
        //     },
        //     series: [
        //         {
        //             type: 'candlestick',
        //             name: 'AAPL',
        //             data: data,
        //         },
        //     ],
        // };

        // Render the chart using HighchartsReact
        Highcharts.chart('candlestick-chart', options);

    }, [data])
    console.log(data)

    // function HighChart(data) {

    //     // create the chart
    //     data.stockChart('container', {
    //         rangeSelector: {
    //             selected: 1
    //         },

    //         title: {
    //             text: 'AAPL Stock Price'
    //         },

    //         series: [{
    //             type: 'candlestick',
    //             name: 'AAPL Stock Price',
    //             data: data,
    //             dataGrouping: {
    //                 units: [
    //                     [
    //                         'week', // unit name
    //                         [1] // allowed multiples
    //                     ], [
    //                         'month',
    //                         [1, 2, 3, 4, 6]
    //                     ]
    //                 ]
    //             }
    //         }]
    //     });
    // }







    return (
        <div>
            <div id="candlestick-chart" style={{ height: '400px', margin: '0 auto' }}></div>
            {/* <div id="container"></div> */}
        </div>
    );
};

export default Candlestick;

