import React from 'react'
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Center,
  HStack,
  SimpleGrid,
  Grid,
  GridItem,
  Stack,
  Tag
} from '@chakra-ui/react'
import Header from './components/Header'

// const Header = ({ title }) => (
//   <Box padding={6} shadow='md'>
//     <Heading>{title}</Heading>
//   </Box>
// )
function Product ( {location} ) {
    const {state} = location
  return (
    <Box>
      <Header />
      <Box p={2} d='flex' alignItems='center' m={18}>
        <Box m={10}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image w={60} src={state.image} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Heading>{state.title}</Heading>
                <Heading>Price: ${state.price}</Heading>
                <Box mt={3}>
                  <Tag as='i'>Category: {state.taxonomy_path}</Tag>
                </Box>
                <Text mt={5} noOfLines={10}>
                  Description: {state.description}
                </Text>
                <HStack>
                  <Button w='xs' size='sm' colorScheme='linkedin'>
                    Buy now!
                  </Button>
                  <Button w='xs' size='sm'>
                    Share Product
                  </Button>
                </HStack>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
export default Product
