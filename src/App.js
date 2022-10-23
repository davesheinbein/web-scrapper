import './App.css';
import BackTop from './components/BackTop';
import Navbar from './components/Navbar';
import Scraper from './components/Scraper';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Scraper />
			<BackTop />
		</div>
	);
}

export default App;
