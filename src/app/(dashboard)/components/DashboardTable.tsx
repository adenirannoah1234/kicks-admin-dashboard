'use client';
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableContainer,
  Flex,
  Spacer,
  Box,
  Avatar,
  Text,
  Checkbox,
  Icon,
  HStack,
  Divider,
  Center,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import React from 'react';

const DashboardTable = () => {
  const data = [
    {
      product: 'Adidas Ultra boost',
      orderId: '#25426',
      date: 'Jan 8th,2024',
      customerName: 'Leo Gouse',
      status: 'Delivered',
      amount: '$200.00',
    },
    {
      product: 'Adidas Ultra boost',
      orderId: '#25425',
      date: 'Jan 7th,2024',
      customerName: 'Jaxson korsgaard',
      status: 'Canceled',
      amount: '$200.00',
    },
    {
      product: 'Adidas Ultra boost',
      orderId: '#25424',
      date: 'Jan 6th,2024',
      customerName: 'Talan Botosh',
      status: 'Canceled',
      amount: '$200.00',
    },
    {
      product: 'Adidas Ultra boost',
      orderId: '#25423',
      date: 'Jan 6th,2024',
      customerName: 'Ryan Philips',
      status: 'Delivered',
      amount: '$200.00',
    },
    {
      product: 'Adidas Ultra boost',
      orderId: '#25422',
      date: 'Jan 5th,2024',
      customerName: 'Emerson Baptista',
      status: 'Delivered',
      amount: '$200.00',
    },
    {
      product: 'Adidas Ultra boost',
      orderId: '#25421',
      date: 'Jan 4th,2024',
      customerName: 'Jaxson Calzoni',
      status: 'Canceled',
      amount: '$200.00',
    },
  ];

  return (
    <TableContainer bg="#f7f7f7ff" mt={'5'} borderRadius={'lg'}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w={'100%'}
        px={'13px'}
        mt={5}
      >
        <Text fontWeight="bold" fontSize="xl">
          Recent Orders
        </Text>
        <Icon as={BsThreeDotsVertical} />
      </Flex>
      <Center>
        <Divider border={'1px solid #e3e3e3ff'} width={'97%'} my={3} />
      </Center>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Checkbox
                colorScheme="#545452ff"
                borderColor={'#545452ff'}
                iconColor="#545452ff"
              />
            </Th>
            <Th color={'#70706eff'} fontSize="0.938rem" textAlign={'center'}>
              Product
            </Th>
            <Th color={'#70706eff'} fontSize="0.938rem" textAlign={'center'}>
              Order ID
            </Th>
            <Th color={'#70706eff'} fontSize="0.938rem" textAlign={'center'}>
              Date
            </Th>
            <Th color={'#70706eff'} fontSize="0.938rem" textAlign={'center'}>
              Customer Name
            </Th>
            <Th color={'#70706eff'} fontSize="0.938rem" textAlign={'center'}>
              Status
            </Th>
            <Th
              color={'#70706eff'}
              fontSize="0.938rem"
              isNumeric
              textAlign={'center'}
            >
              Amount
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((order, index) => (
            <Tr key={index}>
              <Td>
                {' '}
                <Checkbox
                  colorScheme="#545452ff"
                  borderColor={'#545452ff'}
                  iconColor="#545452ff"
                />
              </Td>
              <Td
                color="#000000ff"
                fontSize="0.938rem"
                fontWeight={400}
                textAlign={'center'}
              >
                {order.product}
              </Td>
              <Td
                color="#000000ff"
                fontSize="0.938rem"
                fontWeight={400}
                textAlign={'center'}
              >
                {order.orderId}
              </Td>
              <Td
                color="#000000ff"
                fontSize="0.938rem"
                fontWeight={400}
                textAlign={'center'}
              >
                {order.date}
              </Td>
              <Td>
                <Flex align="center">
                  <Avatar size="sm" name={order.customerName} />
                  <Spacer />
                  <Text
                    color="#000000ff"
                    fontSize="0.938rem"
                    fontWeight={400}
                    textAlign={'center'}
                  >
                    {order.customerName}
                  </Text>
                </Flex>
              </Td>
              <Td textAlign={'center'}>
                <Flex>
                  <Box
                    height="10px"
                    width="10px"
                    borderRadius="full"
                    backgroundColor={
                      order.status === 'Delivered' ? '#4b69e3ff' : '#ffa42eff'
                    }
                    mt={'0.4rem'}
                    mr={1}
                  />

                  <Text color="#000000ff" fontSize="0.938rem" fontWeight={400}>
                    {' '}
                    {order.status}
                  </Text>
                </Flex>
              </Td>
              <Td
                isNumeric
                color="#000000ff"
                fontSize="0.938rem"
                fontWeight={400}
                textAlign={'center'}
              >
                {order.amount}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
