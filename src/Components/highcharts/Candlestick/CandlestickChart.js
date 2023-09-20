// import React, { useEffect, useState } from 'react';
// import Highcharts from 'highcharts/highstock';
// import HighchartsReact from 'highcharts-react-official';

// const CandlestickChart = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState('year');

//   useEffect(() => {
//     // Sample data for the Candlestick chart
//     const rawData = [
//       [1628784000000, 148.64, 150.29, 147.42, 149.31],
//       [1628870400000, 149.0, 149.92, 147.91, 149.8],
//       [1628956800000, 149.67, 150.84, 149.22, 150.19],
//       // Add more data points here
//     ];

//     // Function to filter data based on the selected filter
//     const filterData = (rawData, filter) => {
//       const now = new Date();
//       const oneYearAgo = new Date(now);
//       oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

//       const oneMonthAgo = new Date(now);
//       oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

//       switch (filter) {
//         case 'day':
//           return rawData.filter(([timestamp]) => timestamp >= oneMonthAgo.getTime());
//         case 'month':
//           return rawData.filter(([timestamp]) => timestamp >= oneYearAgo.getTime());
//         case 'year':
//           return rawData;
//         default:
//           return rawData;
//       }
//     };

//     // Set the filtered data based on the selected filter
//     const filteredData = filterData(rawData, filter);

//     // Create the Highcharts configuration options
//     const options = {
//       title: {
//         text: 'Candlestick Chart Example',
//       },
//       xAxis: {
//         type: 'datetime',
//       },
//       yAxis: {
//         title: {
//           text: 'Price',
//         },
//       },
//       series: [
//         {
//           type: 'candlestick',
//           name: 'AAPL',
//           data: filteredData,
//           color: getColorForFilter(filter),
//         },
//       ],
//     };

//     // Update the chart data
//     setData(filteredData);

//     // Render the chart using HighchartsReact
//     Highcharts.chart('candlestick-chart', options);
//   }, [filter]);

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const getColorForFilter = (filter) => {
//     switch (filter) {
//       case 'day':
//         return 'green';
//       case 'month':
//         return 'blue';
//       case 'year':
//         return 'orange';
//       default:
//         return 'red';
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label>Filter by:</label>
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="day">Day (Green)</option>
//           <option value="month">Month (Blue)</option>
//           <option value="year">Year (Orange)</option>
//         </select>
//       </div>
//       <div id="candlestick-chart" style={{ height: '400px', margin: '0 auto' }}></div>
//     </div>
//   );
// };

// export default CandlestickChart;
