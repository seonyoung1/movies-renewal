import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie';
import Popular from './pages/Popular';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Movie />} />
					<Route path="/popular" element={<Popular />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
