'use client';

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Box, Button, ButtonGroup, Heading, Flex } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type TimeframeType = 'WEEKLY' | 'MONTHLY' | 'YEARLY';

const SalesGraph: React.FC = () => {
  const [timeframe, setTimeframe] = useState<TimeframeType>('MONTHLY');

  
  const data: Record<TimeframeType, number[]> = {
    WEEKLY: [100, 150, 200, 180, 220, 190],
    MONTHLY: [500, 800, 1000, 1200, 900, 1500],
    YEARLY: [10000, 12000, 15000, 18000, 20000, 25000],
  };

  const categories: Record<TimeframeType, string[]> = {
    WEEKLY: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    MONTHLY: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    YEARLY: ['2019', '2020', '2021', '2022', '2023', '2024'],
  };

  const options: ApexOptions = {
    chart: {
      id: 'sales-graph',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories[timeframe],
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    colors: ['#4d7df7ff'],
    stroke: {
      curve: 'smooth',
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const category = w.globals.categoryLabels[dataPointIndex];
        return `
          <div class="custom-tooltip">
            <span>${category}</span>
            <span>$${value.toLocaleString()}</span>
          </div>
        `;
      },
    },
  };

  const series = [
    {
      name: 'Sales',
      data: data[timeframe],
    },
  ];

  const handleTimeframeChange = useCallback((newTimeframe: TimeframeType) => {
    setTimeframe(newTimeframe);
  }, []);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="#fafafaff"
      w={'650px'}
      mt={'5'}
    >
      <Flex justifyContent={'space-between'}>
        <Heading size="md" mb={4}>
          Sale Graph
        </Heading>
        <Flex mb={4} gap={4}>
          <Button
            onClick={() => handleTimeframeChange('WEEKLY')}
            bg={timeframe === 'WEEKLY' ? '#141413ff' : '#fafafaff'}
            color={timeframe === 'WEEKLY' ? 'white' : 'black'}
            _hover={{
              bg: timeframe === 'WEEKLY' ? '#141413ff' : '#e6e6e6',
            }}
            border={'1px solid #141413ff'}
          >
            WEEKLY
          </Button>
          <Button
            onClick={() => handleTimeframeChange('MONTHLY')}
            bg={timeframe === 'MONTHLY' ? '#141413ff' : '#fafafaff'}
            color={timeframe === 'MONTHLY' ? 'white' : 'black'}
            _hover={{
              bg: timeframe === 'MONTHLY' ? '#141413ff' : '#e6e6e6',
            }}
            border={'1px solid #141413ff'}
          >
            MONTHLY
          </Button>
          <Button
            onClick={() => handleTimeframeChange('YEARLY')}
            bg={timeframe === 'YEARLY' ? '#141413ff' : '#fafafaff'}
            color={timeframe === 'YEARLY' ? 'white' : 'black'}
            _hover={{
              bg: timeframe === 'YEARLY' ? '#141413ff' : '#e6e6e6',
            }}
            border={'1px solid #141413ff'}
          >
            YEARLY
          </Button>
        </Flex>
      </Flex>
      <Chart options={options} series={series} type="line" height={300} />
    </Box>
  );
};

export default SalesGraph;
