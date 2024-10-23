'use client';

import React from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  IconButton,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
          <Menu size={'lg'}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="#fafafaff"
              size={'lg'}
              gap={4}
              ml={10}

              // border="1px solid black"
            >
              Change Status
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <OrdersTable />
    </Box>
  );
};

export default page;
