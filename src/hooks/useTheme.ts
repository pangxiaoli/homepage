const useThem = ( toTheme: 'light' | 'dark' ) => {
	const root = document.documentElement;
	root.setAttribute( 'theme', toTheme );
};

export default useThem;