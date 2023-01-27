import config, { IConfig } from '../../config';

/**
 * 用于读取配置
 * @param attribute 
 * @returns 
 */
const useConfig = <T extends keyof IConfig>( attribute: T ): IConfig[T] => {
	return config[attribute];
};

export default useConfig;