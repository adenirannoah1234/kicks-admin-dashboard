import React from 'react';
import {
  HStack,
  Text,
  Flex,
  Box,
  Center,
  Icon,
  Divider,
  Button,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';

interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: string;
  sales: number;
}

const BestSeller: React.FC = () => {
  const products: ProductProps[] = [
    {
      id: 1,
      image: '/shoe1.png',
      name: 'Adidas Ultra Boost',
      price: '$126.50',
      sales: 999,
    },
    {
      id: 2,
      image: '/shoe2.png',
      name: 'Adidas Ultra Boost',
      price: '$126.50',
      sales: 999,
    },
    {
      id: 3,
      image: '/shoe3.png',
      name: 'Adidas Ultra Boost',
      price: '$126.50',
      sales: 999,
    },
  ];

  return (
    <Box bg="#fafafaff" w={'400px'} p={4} mt={5} borderRadius={'lg'}>
      <Flex justifyContent="space-between" alignItems="center" w={'100%'}>
        <Text fontWeight="bold" fontSize="2xl">
          Best Seller
        </Text>
        <Icon as={BsThreeDotsVertical} />
      </Flex>
      <Center mt={5}>
        <Divider border={'1px solid #242422ff'} />
      </Center>
      <Flex gap={4} direction={'column'} mt={5}>
        {products.map((product) => (
          <Flex
            key={product.id}
            justifyContent="space-between"
            alignItems="center"
            w={'100%'}
          >
            <Flex alignItems="center" gap={2}>
              <Image
                src={product.image}
                alt="bestseller"
                width={80}
                height={80}
              />
              <Box ml={2}>
                <Text fontWeight="bold" fontSize="sm">
                  {product.name}
                </Text>
                <Text mt={1} fontSize={'0.8rem'}>
                  {product.price}
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text fontWeight="bold" fontSize="sm">
                {product.price}
              </Text>
              <Text mt={1} fontSize={'0.8rem'}>
                {product.sales} sales
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Button
        bg={'#242422ff'}
        color={'white'}
        fontWeight={'bold'}
        fontSize={'sm'}
        _hover={{ bg: '#242422ff' }}
        mt={3}
      >
        REPORT
      </Button>
    </Box>
  );
};

export default BestSeller;
