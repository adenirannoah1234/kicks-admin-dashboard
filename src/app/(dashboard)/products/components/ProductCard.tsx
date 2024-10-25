import React from 'react';
import {
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Stack,
  Divider,
  HStack,
  Grid,
  Progress,
  Menu,
  Icon,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { IoIosMore } from 'react-icons/io';
// import { HStack, Tag } from '@/components/ui/tag';
import { FiArrowUp } from 'react-icons/fi';
import Image from 'next/image';
import Pagination from '../../components/Pagination';

const ProductCard = () => {
  const router = useRouter();
  const products = [
    {
      name: 'Adidas Ultra boost',
      category: 'Sneaker',
      price: 110.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },

    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 110.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 800.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Sneaker',
      price: 64.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },

    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 800.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 74.0,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Sneaker',
      price: 110.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },

    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 100.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 800.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Sneaker',
      price: 64.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },

    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 800.4,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
    {
      name: 'Adidas Ultra boost',
      category: 'Running',
      price: 74.0,
      image: '/shoe1.png',
      summary: 'Long distance running requires a lot from athletes.',
      sales: 1269,
      remaining: 1269,
    },
  ];

  return (
    <Box position="relative">
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {products.map((product, index) => (
          <Box
            key={index}
            bg="#fafafaff"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
          >
            <Flex p={4} justify="space-between" align="start">
              <Flex gap={4}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  //   boxSize="80px"
                  objectFit="cover"
                  //   borderRadius="md"
                />
                <Box>
                  <Text fontWeight="semibold" fontSize="md" color={'#242422ff'}>
                    {product.name}
                  </Text>
                  <Text color="#636363ff" fontSize="sm" mb={2}>
                    {product.category}
                  </Text>
                  <Text fontWeight="semibold" fontSize="md" color={'#242422ff'}>
                    ${product.price}
                  </Text>
                </Box>
              </Flex>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<IoIosMore size={25} />}
                  variant="ghost"
                  bg={'#f0f0f0ff'}
                  color={'#8a8a88ff'}
                  //   colorScheme="ghost"
                  size="sm"
                />
                <MenuList>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem onClick={() => router.push(`/products/id`)}>
                    View
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <Box p={4} pt={0}>
              <Text color={'#242422ff'} fontSize={'md'} fontWeight="semibold">
                Summary
              </Text>
              <Text color="#787877ff" fontSize="sm" mb={4}>
                {product.summary}
              </Text>

              <Box
                border={'1px'}
                borderColor={'#d9d9d9ff'}
                p={4}
                borderRadius={'lg'}
              >
                <Flex justifyContent={'space-between'}>
                  <Text
                    color={'#242422ff'}
                    fontSize={'md'}
                    fontWeight="semibold"
                  >
                    Sales
                  </Text>

                  <Flex>
                    <IconButton
                      aria-label="up arrow"
                      icon={<FiArrowUp />}
                      bg="#fafafaff"
                      color={'#ffa42eff'}
                      pb={'3'}
                      _hover={{
                        bg: '#fafafaff',
                      }}
                    />
                    <Text
                      color={'#242422ff'}
                      fontSize={'md'}
                      fontWeight="semibold"
                    >
                      1269
                    </Text>
                  </Flex>
                </Flex>
                <Center>
                  <Divider
                    border={'1px solid'}
                    borderColor={'#d9d9d9ff'}
                    mb={'3'}
                  />
                </Center>
                <Flex justifyContent={'space-between'}>
                  <Text
                    color={'#242422ff'}
                    fontSize={'md'}
                    fontWeight="semibold"
                  >
                    Remaining Products
                  </Text>

                  <Flex>
                    <Box w="40px" mt={'3'} mr={'2'}>
                      <Progress
                        value={50}
                        size="xs"
                        colorScheme="orange"
                        borderRadius="full"
                      />
                    </Box>

                    <Text
                      color={'#242422ff'}
                      fontSize={'md'}
                      fontWeight="semibold"
                    >
                      1269
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      <Box>
        <Pagination />
      </Box>
    </Box>
  );
};

export default ProductCard;
