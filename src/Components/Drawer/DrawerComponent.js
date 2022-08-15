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
				h="10vh"
				marginLeft={5}
				size='lg'
				padding={0}
				bgColor='transparent'
				_hover=''
				_focus=''
			>
				<HamburgerIcon color='color.beige' fontSize='3xl' />
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='md'>
				<DrawerOverlay />
				<DrawerContent bgColor='color.verde'>
					<DrawerBody padding={10}>
						<Link
							href='#inicio'
							onClick={onClose}
							_hover={{ textDecor: 'none' }}
						>
							<Heading marginBottom={5} color='color.cremita'>
								Inicio
							</Heading>
						</Link>
						<Link
							href='#nosotros'
							onClick={onClose}
							_hover={{ textDecor: 'none' }}
						>
							<Heading marginBottom={5} color='color.cremita'>
								Nosotros
							</Heading>
						</Link>
						<Link
							href='#evento'
							onClick={onClose}
							_hover={{ textDecor: 'none' }}
						>
							<Heading marginBottom={5} color='color.cremita'>
								Evento
							</Heading>
						</Link>
						<Link
							href='#whatsapp'
							onClick={onClose}
							_hover={{ textDecor: 'none' }}
						>
							<Heading marginBottom={5} color='color.cremita'>
								Whataspp
							</Heading>
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default DrawerComponent;
