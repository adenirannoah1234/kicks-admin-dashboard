'use client';
import { Box, Button, Center, Heading, Text, Flex } from '@chakra-ui/react';
import SalesGraph from './components/Charts';
import TotalOrdersBox from './components/OrdersBox';
import BestSeller from './components/BestSeller';
import DashboardTable from './components/DashboardTable';

export default function Dashboard() {
  return (
    <Box>
      <TotalOrdersBox />
      <Flex gap={2}>
        <SalesGraph />
        <BestSeller />
      </Flex>
      <DashboardTable />
    </Box>
  );
}
