'use client';

import React from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  FormControl,
  Input,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { IoCalendarOutline } from 'react-icons/io5';
import { PiPrinter } from 'react-icons/pi';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import Image from 'next/image';

const InfoBox = () => {
  return (
    <Box bg={'#ffffffff'} p={5} rounded={'lg'}>
      <Box>
        <Flex gap={5}>
          <Flex gap={2} mt={2}>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              Orders ID:
            </Text>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              {' '}
              #6743
            </Text>
          </Flex>
          <Button
            bg={'#ffb759ff'}
            _hover={{
              bg: '#ffb759ff',
            }}
            borderRadius={'lg'}
          >
            Pending
          </Button>
        </Flex>
        <Flex justifyContent={'space-between'} align={'center'}>
          <Flex gap={2}>
            <IconButton
              aria-label="calendar"
              bg={'#e8e8e3ff'}
              color={'#000000ff'}
              icon={<IoCalendarOutline />}
            />

            <Text
              color={'#000000ff'}
              fontSize={'md'}
              fontWeight={'semibold'}
              mt={2}
            >
              Feb 16, 2022 - Feb 20, 2022
            </Text>
          </Flex>

          <Flex gap={5}>
            <Menu size={'lg'}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="#f5f2f2ff"
                size={'lg'}
                gap={4}
                ml={10}
                _hover={{
                  bg: '#f5f2f2ff',
                }}

                // border="1px solid black"
              >
                Change Status
              </MenuButton>
              <MenuList>
                <MenuItem
                  _hover={{
                    bg: '#f5f2f2ff',
                  }}
                >
                  Download
                </MenuItem>
                <MenuItem
                  _hover={{
                    bg: '#f5f2f2ff',
                  }}
                >
                  Create a Copy
                </MenuItem>
                <MenuItem
                  _hover={{
                    bg: '#f5f2f2ff',
                  }}
                >
                  Mark as Draft
                </MenuItem>
                <MenuItem
                  _hover={{
                    bg: '#f5f2f2ff',
                  }}
                >
                  Delete
                </MenuItem>
                <MenuItem
                  _hover={{
                    bg: '#f5f2f2ff',
                  }}
                >
                  Attend a Workshop
                </MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              aria-label="printer"
              bg={'#f5f2f2ff'}
              //   pb={3}
              _hover={{
                bg: '#f5f2f2ff',
              }}
              color={'#000000ff'}
              size={'lg'}
              icon={<PiPrinter size={25} />}
            />
            <Button
              aria-label="save"
              bg={'#f5f2f2ff'}
              _hover={{
                bg: '#f5f2f2ff',
              }}
              size={'lg'}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} mt={'8'}>
        <Box border={'1px solid #e8e8e3ff'} p={4} rounded={'lg'}>
          <Flex gap={4}>
            <IconButton
              aria-label="user"
              icon={<FaRegUser size={'20'} />}
              bg={'#4b69e3ff'}
              mt={2}
              color={'white'}
              _hover={{
                bg: '#4b69e3ff',
              }}
            />
            <Box>
              <Text mb={1} fontWeight={'bold'} fontSize={'lg'}>
                Customer
              </Text>
              <Box mb={4}>
                <Flex gap={2} mb={1}>
                  <Text color="#787875ff">Full Name:</Text>
                  <Text fontWeight="medium" color={'#787875ff'}>
                    Jane Cooper
                  </Text>
                </Flex>
                <Flex gap={2} mb={1}>
                  <Text color="#787875ff">Email:</Text>
                  <Text fontWeight="medium" color={'#787875ff'}>
                    janecooper@gmail.com
                  </Text>
                </Flex>
                <Flex gap={2} mb={1}>
                  <Text color="#787875ff">Phone:</Text>
                  <Text fontWeight="medium" color={'#787875ff'}>
                    +900 231 1212
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Button
            size="sm"
            w={'100%'}
            bg={'#242422ff'}
            _hover={{
              bg: '#242422ff',
            }}
            color={'white'}
          >
            View Profile
          </Button>
        </Box>
        <Box border={'1px solid #e8e8e3ff'} p={4} rounded={'lg'}>
          <Flex gap={4}>
            <IconButton
              aria-label="user"
              icon={<RiShoppingBag4Line size={'20'} />}
              bg={'#4b69e3ff'}
              mt={2}
              color={'white'}
              _hover={{
                bg: '#4b69e3ff',
              }}
            />
            <Box>
              <Text mb={1} fontWeight={'bold'} fontSize={'lg'}>
                Order Info
              </Text>
              <Box mb={4}>
                <Flex gap={2} mb={1}>
                  <Text color="#787875ff">Shipping:</Text>
                  <Text fontWeight="medium" color={'#787875ff'}>
                    Next express
                  </Text>
                </Flex>
                <Flex gap={2} mb={1}>
                  <Text color="#787875ff">Payment Method:</Text>
                  <Text fontWeight="medium" color={'#787875ff'}>
                    Paypal
                  </Text>
                </Flex>
                <Flex gap={2} mb={1}>
                  <Text color="#787875ff">Status:</Text>
                  <Text fontWeight="medium" color={'#787875ff'}>
                    Pending
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Button
            size="sm"
            w={'100%'}
            bg={'#242422ff'}
            _hover={{
              bg: '#242422ff',
            }}
            color={'white'}
          >
            Download Info
          </Button>
        </Box>
        <Box border={'1px solid #e8e8e3ff'} p={4} rounded={'lg'}>
          <Flex gap={4}>
            <IconButton
              aria-label="user"
              icon={<RiShoppingBag4Line size={'20'} />}
              bg={'#4b69e3ff'}
              mt={2}
              color={'white'}
              _hover={{
                bg: '#4b69e3ff',
              }}
            />
            <Box flex={1}>
              <Text mb={1} fontWeight={'bold'} fontSize={'lg'}>
                Order Info
              </Text>
              <Box mb={4}>
                <Flex gap={2}>
                  <Text color="#787875ff" flexShrink={0}>
                    Address:
                  </Text>
                  <Text fontWeight="medium" color={'#787875ff'} noOfLines={3}>
                    Santa Ana, illinois 85342 2345 Westheimer Rd. Block 9A
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Button
            size="sm"
            mt={2}
            w={'100%'}
            bg={'#242422ff'}
            _hover={{
              bg: '#242422ff',
            }}
            color={'white'}
          >
            View Profile
          </Button>
        </Box>
      </Grid>
      <Flex mt={5} justifyContent={'space-between'} w={'100%'}>
        <Box border={'1px solid #e8e8e3ff'} p={5} rounded={'lg'} w={'40%'}>
          <Text color={'#787875ff'} fontSize={'lg'} fontWeight={'bold'}>
            Payment Info
          </Text>
          <Flex gap={'2'} mt={2}>
            <Image src={'/Card.png'} alt={'card'} width={40} height={40} />
            <Text>Master Card **** **** 6557</Text>
          </Flex>
          <Flex gap={2} mt={1}>
            <Text color="#787875ff">Business Name:</Text>
            <Text fontWeight="medium" color={'#787875ff'}>
              Jane Cooper
            </Text>
          </Flex>
          <Flex gap={2} mt={1}>
            <Text color="#787875ff">Phone:</Text>
            <Text fontWeight="medium" color={'#787875ff'}>
              +900 231 1212
            </Text>
          </Flex>
        </Box>
        <FormControl w={'57%'}>
          <FormLabel>Notes</FormLabel>
          <Textarea
            h={'130px'}
            placeholder="Type some notes"
            border={'1px solid #e8e8e3ff'}
            _focus={{ borderColor: '#242422ff' }}
            _hover={{ border: '1px solid #242422ff' }}
            focusBorderColor="transparent"
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default InfoBox;
