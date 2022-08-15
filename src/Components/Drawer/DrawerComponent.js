import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
	Heading,
	Box,
	Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const DrawerComponent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState('left');

	return (
		<Box position={'fixed'}>
			<Button
				onClick={onOpen}
				margin={10}
				size='lg'
				padding={0}
				bgColor='transparent'
				_hover=''
				_focus=''
			>
				<HamburgerIcon color='color.vino' fontSize='4xl' />
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='md'>
				<DrawerOverlay />
				<DrawerContent bgColor='color.verde'>
					<DrawerBody padding={10}>
						<Heading marginBottom={5} color='color.cremita'>
							Inicio
						</Heading>
						<Link href="#nosotros" onClick={onClose}>
							<Heading marginBottom={5} color='color.cremita'>
								Nosotros
							</Heading>
						</Link>
						<Heading marginBottom={5} color='color.cremita'>
							El evento
						</Heading>
						<Heading marginBottom={5} color='color.cremita'>
							Whataspp
						</Heading>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default DrawerComponent;
