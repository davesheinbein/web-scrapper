import './App.css';
import BackTop from './components/BackTop';
import Example from './components/Example';
import Navbar from './components/Navbar';
import Scraper from './components/Scraper';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Example />
			<Scraper />
			<BackTop />
		</div>
	);
}

export default App;
