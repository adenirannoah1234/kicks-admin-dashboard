'use client';

import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  useColorModeValue,
  Input,
  Image,
  Icon,
  Flex,
  ButtonGroup,
  Stack,
  Progress,
} from '@chakra-ui/react';
import { Image as ImageIcon, CheckCircle } from 'lucide-react';
import { GrImage } from 'react-icons/gr';
import { GoCheckCircleFill } from 'react-icons/go';

const ProductGallery = () => {
  const [selectedFiles, setSelectedFiles] = useState([
    { id: 1, name: 'Product thumbnail.png', preview: '/shoe1.png' },
    { id: 2, name: 'Product thumbnail.png', preview: '/shoe1.png' },
    { id: 3, name: 'Product thumbnail.png', preview: '/shoe1.png' },
    { id: 4, name: 'Product thumbnail.png', preview: '/shoe1.png' },
  ]);

  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={6} maxW="xl">
      <Text fontSize="lg" fontWeight="medium" mb={4}>
        Product Gallery
      </Text>

      {/* Upload Area */}
      <Box
        border="2px"
        borderStyle="dashed"
        borderColor={borderColor}
        borderRadius="md"
        p={8}
        mb={6}
        textAlign="center"
      >
        <VStack spacing={2}>
          <Icon as={GrImage} w={20} h={10} color="blue.500" />
          <Text color="gray.600">Drop your images here, or browse</Text>
          <Text fontSize="sm" color="gray.500">
            Jpeg, png are allowed
          </Text>
        </VStack>
      </Box>

      {/* File List */}
      <VStack spacing={3} align="stretch">
        {selectedFiles.map((file) => (
          <Flex
            key={file.id}
            p={3}
            bg={'#fafafaff'}
            // borderWidth="1px"
            // borderColor={borderColor}
            borderRadius="md"
            align="center"
          >
            <Image
              src={file.preview}
              alt={file.name}
              boxSize="40px"
              objectFit="cover"
              borderRadius="md"
              mr={3}
            />
            <Stack w={'80%'}>
              <Text>{file.name}</Text>
              <Progress
                color={'#4b69e3ff'}
                value={100}
                borderRadius={'full'}
                h={'1'}
              />
            </Stack>
            <Icon
              as={GoCheckCircleFill}
              w={5}
              h={5}
              size={25}
              color="white"
              fill={'#4b69e3ff'}
              ml={2}
            />
          </Flex>
        ))}
      </VStack>

      {/* Action Buttons */}
      <ButtonGroup spacing={3} mt={6} width="full">
        <Button
          colorScheme="blackAlpha"
          bg="black"
          color="white"
          _hover={{ bg: 'gray.800' }}
          flex={1}
          size={'lg'}
        >
          UPDATE
        </Button>
        <Button colorScheme="red" flex={1} size={'lg'}>
          DELETE
        </Button>
        <Button
          variant="outline"
          flex={1}
          border={'1px solid #595957ff'}
          size={'lg'}
        >
          CANCEL
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ProductGallery;
