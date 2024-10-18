import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react';
const Crumb = () => {
  return (
    <Breadcrumb
      bg={'#e8e8e3ff'}
      p={4}
      borderBottomWidth={1}
      borderBottomColor={'#e8e8e3'}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Crumb;
