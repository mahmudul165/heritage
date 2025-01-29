// import {
//     Stack,
//     Flex,
//     Button,
//     Text,
//     VStack,
//     useBreakpointValue,
//   } from '@chakra-ui/react';

//   export default function Banner() {
//     return (
//       <div className='container my-3'>
//       <Flex

//         w={'full'}
//         h={'100vh'}
//         backgroundImage={
//           'url(https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/9880772_largest%20tea%20gardens%20Bangladesh.jpg)'
//         }
//         backgroundSize={'cover'}
//         backgroundPosition={'center center'}>
//         <VStack
//           w={'full'}
//           justify={'center'}
//           px={useBreakpointValue({ base: 4, md: 8 })}
//           bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
//           <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
//             <Text
//               color={'white'}
//               fontWeight={700}
//               lineHeight={1.2}
//               fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
//              We guarantee the freshness and quality of all our produce
//             </Text>
//             {/* <Stack direction={'row'}>
//               <Button
//                 bg={'blue.400'}
//                 rounded={'full'}
//                 color={'white'}
//                 _hover={{ bg: 'blue.500' }}>
//                 Show me more
//               </Button>
//               <Button
//                 bg={'whiteAlpha.300'}
//                 rounded={'full'}
//                 color={'white'}
//                 _hover={{ bg: 'whiteAlpha.500' }}>
//                 Show me more
//               </Button>
//             </Stack> */}
//           </Stack>
//         </VStack>
//       </Flex>
//       </div>
//     );
//   }

import React from "react";
import { Card } from "react-bootstrap";

function Banner() {
  return (
    <div>
      {/* <img height="450px" src="/banner.png" /> */}
      <img
        src="/guarantee.png"
        className="card-img-top img-fluid  "
        alt="Your Image"
      ></img>
    </div>
  );
}

export default Banner;
