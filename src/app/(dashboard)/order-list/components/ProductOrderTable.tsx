import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Image,
  Text,
  Stack,
  Flex,
  Divider,
  Center,
  Icon,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ProductTable = () => {
  const products = [
    {
      id: '#25421',
      name: 'Adidas ultra boost',
      quantity: 2,
      price: 800.4,
      image: '/shoe1.png',
    },
    {
      id: '#25421',
      name: 'Adidas ultra boost',
      quantity: 2,
      price: 800.4,
      image: '/shoe2.png',
    },
    {
      id: '#25421',
      name: 'Adidas ultra boost',
      quantity: 2,
      price: 800.4,
      image: '/shoe3.png',
    },
    {
      id: '#25421',
      name: 'Adidas ultra boost',
      quantity: 2,
      price: 800.4,
      image: '/shoe1.png',
    },
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const tax = subtotal * 0.2;
  const discount = 0;
  const total = subtotal + tax - discount;

  return (
    <Box bg="white" borderRadius="lg" shadow="sm" mt={'10'} py={8}>
      <Box width="100%" px={'13px'}>
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Text fontWeight="bold" fontSize="xl">
            Products
          </Text>
          <Icon as={BsThreeDotsVertical} />
        </Flex>
      </Box>
      <Center>
        <Divider border={'1px solid #e3e3e3ff'} width={'97%'} my={3} />
      </Center>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th
              //
              py={4}
              px={4}
              color="#737372ff"
              fontSize="0.938rem"
              fontWeight="medium"
            >
              Product Name
            </Th>
            <Th
              textAlign={'center'}
              color="#737372ff"
              fontSize="0.938rem"
              fontWeight="medium"
            >
              Order ID
            </Th>
            <Th
              textAlign={'center'}
              color="#737372ff"
              fontSize="0.938rem"
              fontWeight="medium"
            >
              Quantity
            </Th>
            <Th
              textAlign={'center'}
              color="#737372ff"
              fontSize="0.938rem"
              fontWeight="medium"
              isNumeric
            >
              Total
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td py={4} px={4}>
                <Flex align="center" gap={3}>
                  <Checkbox
                    colorScheme="#545452ff"
                    borderColor={'#545452ff'}
                    iconColor="#545452ff"
                  />
                  <Image
                    src={product.image}
                    alt={product.name}
                    boxSize="40px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Text>{product.name}</Text>
                </Flex>
              </Td>
              <Td textAlign={'center'}>{product.id}</Td>
              <Td textAlign={'center'}>{product.quantity}</Td>
              <Td textAlign={'center'} isNumeric>
                ${product.price.toFixed(2)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Stack spacing={3} mt={6} align="flex-end" mr={5}>
        <Flex justify="space-between" w="250px">
          <Text color="#212121ff">Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </Flex>
        <Flex justify="space-between" w="250px">
          <Text color="#212121ff">Tax (20%)</Text>
          <Text>${tax.toFixed(2)}</Text>
        </Flex>
        <Flex justify="space-between" w="250px">
          <Text color="#212121ff">Discount</Text>
          <Text>${discount.toFixed(2)}</Text>
        </Flex>
        <Divider />
        <Flex justify="space-between" w="250px" fontWeight="bold">
          <Text>Total</Text>
          <Text>${total.toFixed(2)}</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ProductTable;
