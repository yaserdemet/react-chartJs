import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { _analyticTraffic } from 'src/_mock/arrays';
import { Grid, Card, Typography, Stack, Icon } from '@mui/material';
import Chart from 'react-apexcharts';
import Iconify from 'src/components/iconify/Iconify';
import { alpha } from '@mui/material/styles';
import { useSnackbar } from '../../components/snackbar';

const Activities = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setTimeout(() => {
      enqueueSnackbar(
        <>
          <Iconify sx={{ mr: 1 }} icon="emojione:cookie" /> We use cookies to improve your browsing
          experience,{' '}
        </>,
        { variant: 'info' }
      );
    }, 4096);
  });
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

  const trending = [
    {
      id: 1,
      title: 'Total Active Users',
      percentage: '2.6',
      numbers: 18.765,
      icon: 'skill-icons:react-dark',
      chartId: 55,
    },
    {
      id: 1,
      title: 'Total Installed',
      percentage: '1.6',
      numbers: 4.876,
      icon: 'logos:typescript-icon',
      chartId: 76,
    },
    {
      id: 1,
      title: 'Total Downloads',
      percentage: '-0.6',
      numbers: 678,
      icon: 'skill-icons:javascript',
      chartId: 23,
    },
  ];
  const optionsBar = {
    chart: {
      height: 280,
      type: 'radialBar',
    },

    series: [67],

    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '70%',
        },

        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '13px',
          },
          value: {
            color: '#111',
            fontSize: '30px',
            show: true,
          },
        },
      },
    },

    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  };
  return (
    <Grid container spacing={4}>
      {trending.map((item: any) => (
        <Grid item xs={12} md={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
            <Stack>
              <Stack
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                spacing={4}
                display="flex"
              >
                <Stack display="flex" spacing={2} direction="column">
                  <Stack>
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Iconify
                        icon={
                          parseFloat(item.percentage) < 0
                            ? 'eva:trending-down-fill'
                            : 'eva:trending-up-fill'
                        }
                        sx={{
                          mr: 1,
                          p: 0.5,
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          color: 'success.main',
                          bgcolor: (theme) => alpha(theme.palette.success.main, 0.16),
                          ...(parseFloat(item.percentage) < 0 && {
                            color: 'error.main',
                            bgcolor: (theme) => alpha(theme.palette.error.main, 0.16),
                          }),
                        }}
                      />
                      <Typography variant="subtitle2">{item.percentage} % </Typography>
                    </Stack>
                    <Typography variant="h3">{item.numbers}</Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Iconify width={48} icon={item.icon} />
                </Stack>
              </Stack>
              <Chart
                series={[item.chartId]}
                type="radialBar"
                options={{
                  chart: {
                    width: 20,
                    type: 'radialBar',
                  },
                  stroke: {
                    lineCap: 'round',
                  },
                  labels: ['Progress'],
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shade: 'dark',
                      type: 'vertical',
                      gradientToColors: ['#87D4F9'],
                      stops: [0, 100],
                    },
                  },
                  colors: ['#20E647'],
                  plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 15,
                        size: '75%',
                        background: '#293450',
                      },
                      track: {
                        dropShadow: {
                          enabled: true,
                          top: 2,
                          left: 0,
                          blur: 4,
                          opacity: 0.15,
                        },
                      },

                      dataLabels: {
                        name: {
                          offsetY: -10,
                          color: '#fff',
                          fontSize: '13px',
                        },
                        value: {
                          color: '#fff',
                          fontSize: '30px',
                          show: true,
                        },
                      },
                    },
                  },
                }}
              />
            </Stack>
          </Card>
        </Grid>
      ))}

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
