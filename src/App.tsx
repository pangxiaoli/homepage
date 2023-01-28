import Main from './components/main';
import Sider from './components/sider';
import Footer from './components/footer';
import './App.less';

const App = () => {
	return (
		<div className="App">
			<Sider/>
			<Main/>
			<Footer/>
		</div>
	);
};

export default App;