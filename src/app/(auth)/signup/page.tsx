'use client';

import React, { useState } from 'react';
import {
  VStack,
  Box,
  Heading,
  Text,
  Grid,
  FormControl,
  Input,
  InputRightElement,
  Button,
  Checkbox,
  Image,
  IconButton,
  Flex,
  InputGroup,
  FormHelperText,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <VStack h={'100%'} justify={'center'} bg="#FFFFFF" minH="100vh">
      <Box w={['100%', '30.25rem']} p={'2rem'} h="55rem" bg="white">
        <VStack gap={'1.5rem'} justify={'center'} h="100%" align={'stretch'}>
          <Heading size="lg">Register</Heading>
          <Text>Sign up with</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {['Icons.png', 'apple.png', 'facebook2.png'].map((icon, index) => (
              <Flex
                key={index}
                justify="center"
                align="center"
                border="1px solid #242422ff"
                borderRadius={7}
                aspectRatio={1}
                cursor={'pointer'}
                w={{ md: '8rem', base: '4.6rem' }}
                h={'50px'}
              >
                <Image
                  src={`/${icon}`}
                  alt={`${icon.split('.')[0]} image`}
                  width={10}
                  height={10}
                  objectFit="contain"
                />
              </Flex>
            ))}
          </Grid>
          <Text>OR</Text>
          <Heading size="md" as={'h2'} fontWeight={'bold'}>
            Your Name
          </Heading>
          <VStack
            spacing={4}
            align={'stretch'}
            as={'form'}
            // onSubmit={handleSubmit}
          >
            <FormControl isRequired>
              <Input
                name="firstname"
                placeholder="First name"
                border={'1px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '1px solid #242422ff' }}
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                name="lastname"
                placeholder="Last name"
                border={'1px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '1px solid #242422ff' }}
                focusBorderColor="transparent"
              />
            </FormControl>

            <Heading
              size="md"
              as={'h2'}
              fontWeight={'bold'}
              textAlign={'start'}
            >
              Login Details
            </Heading>
            <FormControl isRequired>
              <Input
                name="email"
                type="email"
                placeholder="Enter email"
                border={'1px solid #242422ff'}
                _focus={{ borderColor: '#242422ff' }}
                _hover={{ border: '1px solid #242422ff' }}
                focusBorderColor="transparent"
              />
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  border={'1px solid #242422ff'}
                  _focus={{ borderColor: '#242422ff' }}
                  _hover={{ border: '1px solid #242422ff' }}
                  focusBorderColor="transparent"
                  pr={'4.5rem'}
                />
                <InputRightElement w={'4.5rem'}>
                  <IconButton
                    h={'1.75rem'}
                    size={'lg'}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    icon={
                      showPassword ? (
                        <ViewOffIcon boxSize={'6'} />
                      ) : (
                        <ViewIcon boxSize={'6'} />
                      )
                    }
                    onClick={togglePasswordVisibility}
                    variant="ghost"
                    colorScheme="gray"
                    _hover={{ bg: 'transparent' }}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText>
                Minimum 8 characters, with at least one uppercase letter, one
                number, and one special character
              </FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <Input
                  name="con_password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  border={'1px solid #242422ff'}
                  _focus={{ borderColor: '#242422ff' }}
                  _hover={{ border: '1px solid #242422ff' }}
                  focusBorderColor="transparent"
                  pr={'4.5rem'}
                />
                <InputRightElement w={'4.5rem'}>
                  <IconButton
                    h={'1.75rem'}
                    size={'lg'}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    icon={
                      showPassword ? (
                        <ViewOffIcon boxSize={'6'} />
                      ) : (
                        <ViewIcon boxSize={'6'} />
                      )
                    }
                    onClick={togglePasswordVisibility}
                    variant="ghost"
                    colorScheme="gray"
                    _hover={{ bg: 'transparent' }}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Checkbox
              colorScheme="black"
              size="sm"
              iconColor="#242422ff"
              borderColor="#242422ff"
            >
              <Text fontSize="sm">
                By clicking &apos;Log in&apos; you agree to our website
                KicksClub
                <Link href={'#'} style={{ textDecoration: 'underline' }}>
                  Terms & Conditions, Kick Privacy Notice and Terms and
                  Conditions
                </Link>
              </Text>
            </Checkbox>
            <Checkbox
              colorScheme="black"
              size="sm"
              iconColor="#242422ff"
              borderColor="#242422ff"
            >
              Keep me logged in - applies to all log in options below.
            </Checkbox>
            <Button
              type="submit"
              color={'white'}
              bg={'#242422ff'}
              variant="solid"
              _hover={{ bg: '#242422ff' }}
              size="lg"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              rightIcon={<GoArrowRight />}
            >
              Register
            </Button>
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default page;
