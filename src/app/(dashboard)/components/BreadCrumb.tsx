'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface BreadcrumbProps {
  pageName?: string; // Optional custom page name
}

export const PageBreadcrumb = ({ pageName }: BreadcrumbProps) => {
  const pathname = usePathname();

  // Get current page name from pathname or use provided pageName
  const getCurrentPageName = () => {
    if (pageName) return pageName;

    // Get the last segment of the path
    const segment = pathname.split('/').pop() || '';

    // Format the segment (convert-this-format to This Format)
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Don't show breadcrumb on home page
  if (pathname === '/') return null;

  return (
    <Box>
      <Breadcrumb
        spacing="1px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            href="/"
            color="blue.500"
            _hover={{ color: 'blue.600' }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink color="gray.600" _hover={{ textDecoration: 'none' }}>
            {getCurrentPageName()}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
