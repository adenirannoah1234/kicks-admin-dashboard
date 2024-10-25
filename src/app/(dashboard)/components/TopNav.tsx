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
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { PiCaretRight } from 'react-icons/pi';
import { TbLogout } from 'react-icons/tb';
import { GrFormCheckmark } from 'react-icons/gr';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import Image from 'next/image';

const TopNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const notifications = [
    {
      id: 1,
      product: 'Adidas Ultra boost',
      price: '$140',
      date: 'Sep 20,2022',
      status: 'Sold',
    },
    {
      id: 2,
      product: 'Adidas Ultra boost',
      price: '$140',
      date: 'Sep 22,2022',
      status: 'Sold',
    },
    {
      id: 3,
      product: 'Adidas Ultra boost',
      price: '$140',
      date: 'Sep 10,2022',
      status: 'Sold',
    },
    {
      id: 4,
      product: 'Adidas Ultra boost',
      price: '$140',
      date: 'Sep 10,2022',
      status: 'Sold',
    },
  ];

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
          bg="#fafafa"
          onClick={onOpen}
          _hover={{ bg: '#f5f5f5' }}
          _active={{
            bg: '#4b69e3ff',
            color: 'white',
          }}
        />

        <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
          <ModalOverlay />
          <ModalContent maxH="80vh" overflow="hidden">
            <ModalHeader
              borderBottom="1px solid"
              borderColor="gray.200"
              // justifyContent={'space-between'}
            >
              <Flex justifyContent={'space-between'}>
                <Text>Notifications</Text>
                <IconButton
                  aria-label="close"
                  onClick={onClose}
                  bg={'white'}
                  icon={<IoIosCloseCircleOutline size={25} />}
                />
              </Flex>
            </ModalHeader>

            <ModalBody p={0}>
              <VStack
                spacing={2}
                align="stretch"
                maxH="60vh"
                overflowY="auto"
                px={4}
              >
                {notifications.map((notification) => (
                  <Box
                    px={2}
                    key={notification.id}
                    // borderBottom="1px solid"
                    // borderColor="gray.100"
                    _hover={{ bg: 'gray.50' }}
                    bg={'#fafafaff'}
                  >
                    <HStack justify="space-between" align="center">
                      <HStack spacing={2}>
                        <Image
                          src="/shoe1.png"
                          alt="Shoe"
                          height={60}
                          width={60}
                        />
                        <Box>
                          <Text fontWeight="medium" color={'#3d3d3bff'}>
                            {notification.product}
                          </Text>
                          <Text color="#3d3d3bff">{notification.price}</Text>
                          <Text fontSize="sm" color="gray.500">
                            {notification.date}
                          </Text>
                        </Box>
                      </HStack>
                      {/* <HStack spacing={4}> */}
                      <Text
                        px={2}
                        py={1}
                        borderRadius="md"
                        bg="#4b69e3ff"
                        color="white"
                        fontSize="sm"
                        mb={7}
                      >
                        {notification.status}
                      </Text>

                      {/* </HStack> */}
                    </HStack>
                  </Box>
                ))}
              </VStack>

              <Box p={4} borderTop="1px solid" borderColor="gray.200">
                <HStack justify="space-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<GrFormCheckmark size={20} />}
                    justifyContent={'space-between'}
                  >
                    MARK ALL AS READ
                  </Button>
                  <Button bg={'#242422ff'} size="sm" color={'white'}>
                    VIEW ALL NOTIFICATION
                  </Button>
                </HStack>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="#fafafaff"
            border="1px solid black"
            _active={{
              bg: '#4b69e3ff',
              color: 'white',
              border: 'none',
            }}
          >
            Admin
          </MenuButton>
          <MenuList>
            <Text
              color={'#242422ff'}
              fontWeight={'bold'}
              fontSize={'1.5rem'}
              ml={3}
              _hover={{
                bg: 'white',
              }}
            >
              Admin{' '}
            </Text>
            <MenuItem mt={'2'}>
              CHANGE PASSWORD <Icon ml={9} as={PiCaretRight} />
            </MenuItem>
            <MenuItem mt={2}>
              {' '}
              LOGOUT <Icon ml={'8rem'} as={TbLogout} />
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
