'use client';

import React from 'react';
import InfoBox from '../components/InfoBox';
import { Box, Text } from '@chakra-ui/react';
import { PageBreadcrumb } from '../../components/BreadCrumb';
import ProductTable from '../components/ProductOrderTable';

const page = () => {
  return (
    <Box>
      <Box py={5}>
        <Text size="lg" fontWeight={'bold'}>
          Order Details
        </Text>
        <PageBreadcrumb />
      </Box>
      <InfoBox />
      <ProductTable />
    </Box>
  );
};

export default page;
