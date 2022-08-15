import React from 'react';
import { Box, Heading, Flex, Stack } from '@chakra-ui/react';

const Whatsapp = () => {
	return (
		<Box w='100vw' h='100vh' bgColor='color.cremita' id='whatsapp'>
			<Stack
				justifyContent='center'
				alignItems='flex-end'
				h='100vh'
				paddingRight={20}
				spacing={-5}
			>
				<Heading fontSize='7em' textAlign={'right'} color='color.vino'>
					Whatsapp
				</Heading>
			</Stack>
		</Box>
	);
};

export default Whatsapp;
