import Main from './components/main';
import Sider from './components/sider';
import Header from './components/header';
import Footer from './components/footer';
import './App.less';

const App = () => {
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