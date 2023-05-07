import React, { useState } from 'react';
import ApexCharts from 'apexcharts';
import { _analyticTraffic } from 'src/_mock/arrays';
import ReactApexChart from 'react-apexcharts';

const Activities = () => {
  const [area, setArea] = useState({
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
    },
  });
  const [values, setValues] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div>
      <ReactApexChart
        series={area.series}
        type='donut'
        options={{
          chart: {
            width: 320,
            type: 'donut',
          },
          // other options...
        }}
        height={350}
      />
      <ReactApexChart series={values.series} options={values.options} type="line" height={350} />
      <ReactApexChart series={values.series} options={values.options} type="bar" height={350} />
    </div>
  );
};

export default Activities;
