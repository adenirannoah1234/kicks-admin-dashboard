import React from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  HStack,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import { FaShoppingBag } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiShoppingBag4Line } from 'react-icons/ri';

const OrderBox = () => {
  return (
    <Box
      bg="#fafafaff"
      borderRadius="xl"
      px={4}
      py={6}
      boxShadow="sm"
      width="100%"
      maxWidth="350px"
    >
      <Flex justifyContent="space-between" alignItems="flex-start">
        <Text fontSize="md" fontWeight="bold" color={'#000000ff'}>
          Total Orders
        </Text>
        <Icon as={BsThreeDotsVertical} />
      </Flex>
      <Flex justifyContent={'space-between'} alignItems="center">
        <Flex alignItems="center" mb={6} mt={3}>
          <IconButton
            aria-label="bag icon"
            icon={<RiShoppingBag4Line size={'18px'} />}
            borderRadius="lg"
            bg={'#4b69e3ff'}
            color={'white'}
            size="sm"
            _hover={{
              bg: '#4b69e3ff',
            }}
            p={3}
            mr={4}
          />

          <Text fontSize="md" fontWeight="bold" color={'#000000ff'}>
            $126,500
          </Text>
        </Flex>

        <Box>
          <HStack ml={'90px'}>
            <Icon as={FiArrowUp} />
            <Text fontWeight="bold" color={'#000000ff'}>
              34.7%
            </Text>
          </HStack>
          <Text mt={3} color={'#4a4a4aff'}>
            Compared to Jan 2022
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const TotalOrdersBox = () => {
  return (
    <HStack>
      <OrderBox />
      <OrderBox />
      <OrderBox />
    </HStack>
  );
};

export default TotalOrdersBox;
