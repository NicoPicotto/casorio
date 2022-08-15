import React from 'react';
import { Box, Heading, Flex, Stack } from '@chakra-ui/react';

const Nosotros = () => {
	return (
		<Box w='100vw' h='100vh' bgColor='color.vino' id='nosotros' scrollBehavior="smooth">
			<Stack
				justifyContent='center'
				alignItems='flex-end'
				h='100vh'
				paddingRight={20}
				spacing={-5}
			>
				<Heading fontSize='10em' textAlign={'right'} color='color.cremita'>
					Nosotros
				</Heading>
			</Stack>
		</Box>
	);
};

export default Nosotros;
