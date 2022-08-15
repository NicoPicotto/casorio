import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
	Heading,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const DrawerComponent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = React.useState('left');

	return (
		<>
			<Button
				onClick={onOpen}
				margin={5}
				size='lg'
				padding={0}
				bgColor='transparent'
			>
				<HamburgerIcon color='color.primario' fontSize='2xl' />
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="md">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody padding={10}>
						<Heading marginBottom={5}>Nosotros</Heading>
                        <Heading>Sobre el evento</Heading>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerComponent;
