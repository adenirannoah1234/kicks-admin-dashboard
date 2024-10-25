'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react';

interface BreadcrumbProps {
  pageName?: string; // Optional override for current page name
  customNames?: Record<string, string>; // Optional mapping for custom segment names
}

export const PageBreadcrumb = ({
  pageName,
  customNames = {},
}: BreadcrumbProps) => {
  const pathname = usePathname();

  const formatSegmentName = (segment: string) => {
    // Check if there's a custom name mapping for this segment
    if (customNames[segment]) {
      return customNames[segment];
    }

    // Default formatting: convert-this-format to This Format
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const generateBreadcrumbItems = () => {
    // Split the pathname and remove empty segments
    const pathSegments = pathname.split('/').filter((segment) => segment);
    let currentPath = '';

    // Generate breadcrumb items for each path segment
    const items = pathSegments.map((segment, index) => {
      currentPath += `/${segment}`;

      // If it's the last segment and a custom page name is provided
      const name =
        index === pathSegments.length - 1 && pageName
          ? pageName
          : formatSegmentName(segment);

      return {
        name,
        path: currentPath,
        isLast: index === pathSegments.length - 1,
      };
    });

    return items;
  };

  // Don't show breadcrumb on home page
  if (pathname === '/') return null;

  const breadcrumbItems = generateBreadcrumbItems();

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

        {breadcrumbItems.map((item, index) => (
          <BreadcrumbItem key={item.path} isCurrentPage={item.isLast}>
            <BreadcrumbLink
              as={item.isLast ? 'span' : Link}
              href={item.isLast ? undefined : item.path}
              color={item.isLast ? 'gray.600' : 'blue.500'}
              _hover={
                item.isLast ? { textDecoration: 'none' } : { color: 'blue.600' }
              }
            >
              {item.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};
