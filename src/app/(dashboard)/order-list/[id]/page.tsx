'use client';

import React from 'react';
import InfoBox from '../components/InfoBox';
import { Box } from '@chakra-ui/react';
import { PageBreadcrumb } from '../../components/BreadCrumb';
import ProductTable from '../components/ProductOrderTable';

const page = () => {
  return (
    <Box>
      <Box>
        <PageBreadcrumb />
      </Box>
      <InfoBox />
      <ProductTable />
    </Box>
  );
};

export default page;
