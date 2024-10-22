import React from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import OrdersTable from './components/OrdersTable';
import { PageBreadcrumb } from '../components/BreadCrumb';
import { IoCalendarOutline } from 'react-icons/io5';

const page = () => {
  return (
    <Box pos={'relative'} width={'100%'}>
      <Flex justifyContent={'space-between'} alignItems={'center'} py={6}>
        <Box>
          <Heading fontSize={'xl'} fontWeight={'bold'}>
            Orders List
          </Heading>
          <PageBreadcrumb />
        </Box>

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
      </Flex>
      <OrdersTable />
    </Box>
  );
};

export default page;
