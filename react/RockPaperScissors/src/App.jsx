import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Rock from './components/Rock/Rock';
import Paper from './components/Paper/Paper';
import Scissors from './components/Scissors/Scissors';
import Choose from './components/Choose/Choose';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Choose />} />
				<Route path='/rock' element={<Rock />} />
				<Route path='/paper' element={<Paper />} />
				<Route path='/scissors' element={<Scissors />} />
			</Routes>
		</Router>
	);
};

export default App;
