'use client';
import React from 'react';
import { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Flex,
  Icon,
  Link,
  HStack,
  Center,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import Image from 'next/image';
import { SidebarLinks } from '@/app/constants/SidebarLinks';

const Sidebar = () => {
  const pathname = usePathname();
  const categories = [
    'Sneakers',
    'Runners',
    'Golf',
    'Hiking',
    'Football',
    'Baseball',
  ];
  const sizes = ['21', '32', '13', '14', '06', '76', '87', '98'];
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveButton((prevState) => (prevState === index ? null : index));
  };

  return (
    <Box bg="#fafafaff" minW="250px" minH="100vh" boxShadow="lg" p={4}>
      <Center mb={'3rem'} mt={'1rem'}>
        <Image src="/kicks1.png" alt="logo" width={150} height={200} />
      </Center>
      <VStack spacing={2} align="stretch">
        {SidebarLinks.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <Link
              as={NextLink}
              href={link.path}
              key={link.name}
              _hover={{
                textDecoration: 'none',
                bg: '#4b69e3',
                color: 'white',
              }}
              bg={isActive ? '#4b69e3' : 'transparent'}
              color={isActive ? 'white' : 'gray.700'}
              p={3}
              borderRadius="md"
              transition="all 0.2s"
            >
              <Flex align="center">
                <Icon
                  as={link.icon}
                  boxSize={6}
                  mr={3}
                  color={isActive ? 'white' : 'gray.500'}
                  _hover={{
                    color: 'white',
                  }}
                />
                <Text fontWeight={isActive ? 'bold' : 'normal'}>
                  {link.name}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </VStack>

      <Accordion
        allowMultiple
        defaultIndex={[0]}
        // allowToggle
        border={'none'}
        mt={'10'}
      >
        <AccordionItem border={'none'}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Categories
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex direction="column" w="100%">
              {categories.map((category, index) => (
                <Flex
                  key={category}
                  justify="space-between"
                  align="center"
                  mb={2}
                >
                  <Text>{category}</Text>
                  <Button
                    size="sm"
                    bg={activeButton === index ? '#4b69e3ff' : '#e8e8e3ff'}
                    color={activeButton === index ? 'white' : 'black'}
                    width="30px"
                    height="30px"
                    onClick={() => handleButtonClick(index)}
                  >
                    {sizes[index]}
                  </Button>
                </Flex>
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
