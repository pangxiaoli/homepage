import Main from './components/main';
import Sider from './components/sider';
import Header from './components/header';
import Footer from './components/footer';
import { useEffect } from 'react';
import useConfig from './hooks/useConfig';
import './App.less';

const App = () => {
	useEffect( () => {
		console.log( useConfig() );
	}, [] );
	return (
		<div className="App">
			<Sider/>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	);
};

export default App;