'use client';
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import dynamic from 'next/dynamic';

const Crumb = dynamic(() => import('./components/Crumb'), { ssr: false });
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex h="100vh" direction="row" backgroundColor="#f9f9f9" overflow="hidden">
      <Box as="nav" flex="0 0 auto">
        <Sidebar />
      </Box>
      <Flex direction="column" flex="1" overflow="hidden">
        <Box as="header" flex="0 0 auto">
          <TopNav />
        </Box>
        <Box
          as="main"
          flex="1"
          overflowY="auto"
          overflowX="hidden"
          p={4}
          maxW="100%"
          bg={'#e8e8e3ff'}
        >
          {/* <Crumb /> */}

          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
