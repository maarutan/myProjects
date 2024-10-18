import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Cards from './Components/Cards/Cards';
import Girl from './Components/Girl/Girl';
import Boy from './Components/Boy/Boy';
import BoySize from './Components/BoySize/BoySize';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Cards />}></Route>
				<Route path='/boy' element={<Boy />}></Route>
				<Route path='/boySize' element={<BoySize />} />
				<Route path='/girl' element={<Girl />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
