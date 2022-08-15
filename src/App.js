import DrawerComponent from './Components/Drawer/DrawerComponent';
import Evento from './Components/Evento/Evento';
import Home from './Components/Home/Home';
import Nosotros from './Components/Nosotros/Nosotros';
import Whatsapp from './Components/Whatsapp/Whatsapp';

const App = () => {
	return (
		<>
			<DrawerComponent />
			<Home />
			<Nosotros />
			<Evento />
			<Whatsapp />
		</>
	);
}

export default App;
