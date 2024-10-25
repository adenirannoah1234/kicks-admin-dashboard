import React from 'react';
import Image from 'next/image';
import {
  Box,
  Flex,
  Text,
  Button,
  Center,
  Divider,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Tag,
  HStack,
} from '@chakra-ui/react';
import AddProductGallery from './component/AddProductGaller';
import { PageBreadcrumb } from '../../components/BreadCrumb';

const page = () => {
  const tags = ['Adidas', 'Shoes', 'Sneakers', 'Ultraboost'];

  return (
    <Box>
      <Box py={5}>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Add Product
        </Text>
        <PageBreadcrumb />
      </Box>

      <Box bg={'#ffffffff'} p={5} rounded={'lg'}>
        <Flex gap={6}>
          <Stack spacing={5} flex={1}>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                type="text"
                border={'1px solid #adadacff'}
                _focus={{ borderColor: '#adadacff' }}
                _hover={{ border: '1px solid #adadacff' }}
                focusBorderColor="transparent"
                borderRadius="md"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                border={'1px solid #adadacff'}
                _focus={{ borderColor: '#adadacff' }}
                _hover={{ border: '1px solid #adadacff' }}
                focusBorderColor="transparent"
                borderRadius="md"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                border={'1px solid #adadacff'}
                _focus={{ borderColor: '#adadacff' }}
                _hover={{ border: '1px solid #adadacff' }}
                focusBorderColor="transparent"
                borderRadius="md"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Brand Name</FormLabel>
              <Input
                type="text"
                border={'1px solid #adadacff'}
                _focus={{ borderColor: '#adadacff' }}
                _hover={{ border: '1px solid #adadacff' }}
                focusBorderColor="transparent"
                borderRadius="md"
              />
            </FormControl>
            <Flex mb={4} flexDirection={{ base: 'column', md: 'row' }}>
              <FormControl
                isRequired
                mr={{ base: 0, md: 2 }}
                mb={{ base: 4, md: 0 }}
              >
                <FormLabel>SKU</FormLabel>
                <Input
                  name="firstName"
                  type="text"
                  border={'1px solid #adadacff'}
                  _focus={{ borderColor: '#adadacff' }}
                  _hover={{ border: '1px solid #adadacff' }}
                  focusBorderColor="transparent"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl id="lastName" isRequired ml={{ base: 0, md: 2 }}>
                <FormLabel>Stock Quantity</FormLabel>
                <Input
                  name="lastName"
                  type="text"
                  border={'1px solid #adadacff'}
                  _focus={{ borderColor: '#adadacff' }}
                  _hover={{ border: '1px solid #adadacff' }}
                  focusBorderColor="transparent"
                  borderRadius="md"
                />
              </FormControl>
            </Flex>
            <Flex mb={4} flexDirection={{ base: 'column', md: 'row' }}>
              <FormControl
                isRequired
                mr={{ base: 0, md: 2 }}
                mb={{ base: 4, md: 0 }}
              >
                <FormLabel>Regular Price</FormLabel>
                <Input
                  type="text"
                  border={'1px solid #adadacff'}
                  _focus={{ borderColor: '#adadacff' }}
                  _hover={{ border: '1px solid #adadacff' }}
                  focusBorderColor="transparent"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl id="lastName" isRequired ml={{ base: 0, md: 2 }}>
                <FormLabel>Sale Price</FormLabel>
                <Input
                  type="text"
                  border={'1px solid #adadacff'}
                  _focus={{ borderColor: '#adadacff' }}
                  _hover={{ border: '1px solid #adadacff' }}
                  focusBorderColor="transparent"
                  borderRadius="md"
                />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel>Tags</FormLabel>
              <HStack
                spacing={2}
                flexWrap="wrap"
                borderRadius={'md'}
                border={'1px solid #adadacff'}
                pt={'5 '}
                pb={'8'}
                pr={8}
                pl={5}
              >
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    size="lg"
                    borderRadius="full"
                    variant="solid"
                    backgroundColor="gray.800"
                    color="white"
                    px={4}
                    py={2}
                    _hover={{
                      backgroundColor: 'gray.700',
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </FormControl>
          </Stack>
          <Box flex={1}>
            <Image src="/Frame 15.png" height={400} alt="shoe" width={500} />
            <AddProductGallery />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default page;
