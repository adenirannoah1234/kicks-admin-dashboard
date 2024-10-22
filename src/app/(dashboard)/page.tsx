'use client';
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Flex,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import SalesGraph from './components/Charts';
import TotalOrdersBox from './components/OrdersBox';
import BestSeller from './components/BestSeller';
import DashboardTable from './components/DashboardTable';
import { PageBreadcrumb } from './components/BreadCrumb';
import { IoCalendarOutline } from 'react-icons/io5';

export default function Dashboard() {
  return (
    <Box>
      <Flex justifyContent={'space-between'} alignItems={'center'} py={6}>
        <Heading fontSize={'xl'} fontWeight={'bold'}>
          Dashboard
        </Heading>
        <Box>
          <Flex>
            <IconButton
              aria-label="calendar"
              bg={'#e8e8e3ff'}
              pb={3}
              color={'#000000ff'}
              icon={<IoCalendarOutline />}
            />

            <Text color={'#000000ff'} fontSize={'md'} fontWeight={'semibold'}>
              Feb 16, 2022 - Feb 20, 2022
            </Text>
          </Flex>
        </Box>
      </Flex>
      <TotalOrdersBox />
      <Flex gap={2}>
        <SalesGraph />
        <BestSeller />
      </Flex>
      <DashboardTable />
    </Box>
  );
}
