import React from 'react';
import { Heading, Flex, Stack, Divider } from '@chakra-ui/react';

const Nosotros = () => {
	return (
		<Flex
			w='100vw'
			h='100vh'
			bgColor='color.vino'
			id='nosotros'
			justifyContent='flex-end'
		>
			<Flex h='10vh' alignItems='center' justifyContent='flex-end'>
				<Flex paddingInlineEnd={10}>
					<Divider borderColor='color.cremita' w='72vw' />
				</Flex>
				<Flex w='fit-content' justifyContent='flex-end'>
					<Heading color='color.cremita'>Nosotros</Heading>
				</Flex>
			</Flex>
			<Flex margin={10}>
				<Divider orientation='vertical' borderColor='color.cremita' />
			</Flex>
		</Flex>
	);
};

export default Nosotros;
