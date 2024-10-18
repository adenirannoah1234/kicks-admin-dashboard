'use client';
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import SalesGraph from './components/Charts';
import TotalOrdersBox from './components/OrdersBox';

export default function Dashboard() {
  return (
    <Box>
      <TotalOrdersBox />
      <SalesGraph />
    </Box>
  );
}
