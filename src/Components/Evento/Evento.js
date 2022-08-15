import React from 'react';
import { Heading, Divider, Stack, Flex } from '@chakra-ui/react';

const Evento = () => {
	return (
		<Flex
			w='100vw'
			h='100vh'
			bgColor='color.verde'
			id='nosotros'
			justifyContent='flex-end'
		>
			<Flex h='10vh' alignItems='center' justifyContent='flex-end'>
				<Flex paddingInlineEnd={10}>
					<Divider borderColor='color.cremita' w='72vw' />
				</Flex>
				<Flex w='fit-content' justifyContent='flex-end'>
					<Heading color='color.cremita'>Evento</Heading>
				</Flex>
			</Flex>
			<Flex margin={10}>
				<Divider orientation='vertical' borderColor='color.cremita' />
			</Flex>
		</Flex>
	);
};

export default Evento;
