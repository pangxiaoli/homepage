import config from '../../config';

/**
 * 用于读取配置
 * @param attribute 
 * @returns 
 */
const useConfig = ( attribute?: string ) => {
	if ( !attribute ) {
		return config;
	}

	// TODO
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return config[attribute];
};

export default useConfig;