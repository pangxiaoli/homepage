interface ILink {
	icon?: string,
	title: string,
	uri?: string,	
}

export interface IConfig {
	title: string,
	subTitle?: string,

	user: {
		avater: string,
		name?: string,

		social?: Array<ILink>
	},

	site?: Array<ILink>

	footer?: {
		year: number,
		copyRight?: string,
		icp?: string,
		gunan?: string, 
	}
}


const config: IConfig = {
	title: 'title',
	subTitle: 'subtitle',

	user: {
		avater: '/img/head.jpg',
		name: 'pangxiaoli',
	},

	footer: {
		year: 2023,
		copyRight: 'pangxiaoli',
		icp: '京ICP备2021012262号-2',
		gunan: '京公网安备11010802035180'
	}
};

export default config;