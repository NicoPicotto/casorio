import React from 'react';
import { Box, Heading, Flex, Stack } from '@chakra-ui/react';

const Home = () => {
	return (
		<Box w='100vw' h='100vh' bgColor='color.cremita' id='inicio'>
			<Stack
				justifyContent='center'
				alignItems='flex-end'
				h='100vh'
				paddingRight={20}
				spacing={-5}
			>
				<Heading fontSize='7em' textAlign={'right'} color='color.beige'>
					Casorio
				</Heading>
				<Flex>
					<Heading
						fontSize='7em'
						textAlign={'right'}
						color='color.vino'
						marginRight={8}
					>
						Rocilda
					</Heading>
					<Heading fontSize='7em' textAlign={'right'} color='color.beige'>
						&
					</Heading>
				</Flex>
				<Heading fontSize='7em' textAlign={'right'} color='color.vino'>
					Picotto
				</Heading>
			</Stack>
		</Box>
	);
};

export default Home;
