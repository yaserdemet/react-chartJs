import React, { useState } from 'react';
import ApexCharts from 'apexcharts';
import { _analyticTraffic } from 'src/_mock/arrays';
import { Grid, Card } from '@mui/material';
import Chart from 'react-apexcharts';

const Activities = () => {
  const options = {
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  };
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: 'series-2',
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: 'series-3',
      data: [24, 20, 5, 75, 42, 79, 72, 35],
    },
  ];
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
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <Chart
            series={area.series}
            type="donut"
            options={{
              chart: {
                width: 320,
                type: 'donut',
              },
              // other options...
            }}
            height={350}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Chart series={values.series} options={values.options} type="bar" height={350} />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Chart series={values.series} options={values.options} type="line" height={350} />
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <Chart options={options} series={series} type="area" />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Activities;
