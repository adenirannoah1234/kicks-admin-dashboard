'use client';
import {
  HStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';

const TopNav = () => {
  return (
    <Box bg="#fafafaff" w="100%" p={5}>
      <HStack justifyContent="flex-end" w="100%" spacing={4}>
        <IconButton
          aria-label="notifications"
          icon={<FiSearch fontSize={'1rem'} />}
          bg={'#fafafaff'}
          _hover={{}}
        />
        <IconButton
          aria-label="notifications"
          icon={<IoMdNotifications />}
          bg={'#fafafaff'}
        />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="#fafafaff"
            border="1px solid black"
          >
            Admin
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
