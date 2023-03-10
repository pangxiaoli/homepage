import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import useConfig from '../../hooks/useConfig';
import useThem from '../../hooks/useTheme';
import Link from '../Link';
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
			<div className="user-name">{useConfig( 'user' ).name}</div>
			<div className="socials">
				{
					useConfig( 'user' )?.social?.map(( i, index ) => <Link key={index} size='small' data={i} showTitle={false}/> )
				}
			</div>
			<div className="theme-switcher">
				<FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} onClick={handleSwitchTheme}/>
			</div>
		</div>
	);
};

export default Sider;