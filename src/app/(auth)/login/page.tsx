'use client';
import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Button,
  Grid,
  Flex,
  Box,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <VStack h={'100%'} justify={'center'} bg="#FFFFFF" minH="100vh">
      <Box w={['100%', '27.25rem']} p={'2rem'} h="33rem" bg="white">
        <VStack gap={'1.5rem'} justify={'center'} h="100%" align={'stretch'}>
          <Heading size="lg" textAlign={'left'}>
            Login
          </Heading>
          <Text textDecoration="underline">Forgot your password?</Text>
          <VStack spacing={4} as="form">
            <FormControl id="email" isRequired>
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
            <FormControl id="password" isRequired>
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
            </FormControl>
            <Checkbox
              colorScheme="black"
              size="sm"
              iconColor="#242422ff"
              borderColor="#242422ff"
            >
              Keep me logged in - applies to all log in options below.
              <Link href="/">More info</Link>
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
              Email Login
            </Button>
          </VStack>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {['Icons.png', 'apple.png', 'facebook2.png'].map((icon, index) => (
              <Flex
                key={index}
                justify="center"
                align="center"
                border="1px solid #242422ff"
                borderRadius={7}
                aspectRatio={1}
                w={{ md: '7.1rem', base: '4.6rem' }}
                h={'50px'}
              >
                <Image
                  src={`/${icon}`}
                  alt={`${icon.split('.')[0]} image`}
                  width={20}
                  height={10}
                  objectFit="contain"
                />
              </Flex>
            ))}
          </Grid>
          <Text fontSize="sm" w={'100%'}>
            By clicking &apos;Log in&apos; you agree to our website KicksClub
            <Link href={'#'}>
              Terms & Conditions, Kick Privacy Notice and Terms and Conditions
            </Link>
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default page;
