import React from 'react';
import { Box, Heading, Divider, Stack } from '@chakra-ui/react';

const Evento = () => {
	return (
		<Box
			w='100vw'
			h='100vh'
			bgColor='color.verde'
			id='evento'
			scrollBehavior='smooth'
			justifyContent='space-between'
		>
			<Stack
				justifyContent='center'
				alignItems='flex-end'
				h='100vh'
				paddingRight={20}
				spacing={-5}
			>
				<Heading fontSize='7em' textAlign={'right'} color='color.cremita'>
					Evento
				</Heading>
			</Stack>
		</Box>
	);
};

export default Evento;
