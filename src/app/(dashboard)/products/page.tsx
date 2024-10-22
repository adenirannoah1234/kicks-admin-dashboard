'use client';

import React from 'react';
import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import ProductCard from './components/ProductCard';
import { PageBreadcrumb } from '../components/BreadCrumb';
import { IoIosAddCircleOutline } from 'react-icons/io';

const page = () => {
  return (
    <Box height="100%" position="relative">
      <Flex py={6} justifyContent="space-between" alignItems="center">
        <Box>
          <Heading size="lg">All Products</Heading>
          <PageBreadcrumb />
        </Box>
        <Button
          leftIcon={<IoIosAddCircleOutline />}
          size="lg"
          color={'white'}
          bg={'#242422ff'}
          variant="solid"
          _hover={{ bg: '#242422ff' }}
          onClick={() => alert('Add Product')}
        >
          Add Product
        </Button>
      </Flex>
      <ProductCard />
    </Box>
  );
};

export default page;
