import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ILink {
	icon?: IconDefinition,
	title?: string,
	uri: string,
	shape?: 'rect' | 'circle',
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
		social: [
			{
				icon: faGithub,
				uri: 'http://github.com/pangxiaoli',
				shape: 'circle'
			},
			{
				icon: faEnvelope,
				uri: 'mailto:qiubit@qiubit.cc',
			},
			{
				icon: faFigma,
				uri: 'https://figma.com/',
			}
		]
	},

	footer: {
		year: 2023,
		copyRight: 'pangxiaoli',
		icp: '京ICP备2021012262号-2',
		gunan: '京公网安备11010802035180'
	}
};

export default config;