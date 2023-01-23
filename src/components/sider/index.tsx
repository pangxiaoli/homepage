import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import useConfig from '../../hooks/useConfig';
import useThem from '../../hooks/useTheme';
import './index.less';

const Sider = () => {
	const [theme, setTheme] = useState( 'light' );
	
	const handleSwitchTheme = () => {
		const toTheme = theme === 'light' ? 'dark' : 'light';
		setTheme( toTheme );
		useThem( toTheme );
	};
	return (
		<div className="sider">
			<div className="avater">
				<img src={useConfig( 'user' ).avater} alt="avater" />
			</div>
			<div className="theme-switcher" onClick={handleSwitchTheme}>
				<FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
			</div>
		</div>
	) ;
};

export default Sider;