import { faFigma, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faBook, faEnvelope, faPenRuler, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
	title: 'Qiubitの修行路',
	subTitle: '路漫漫其修远兮，吾将上下而求索!',

	user: {
		avater: '/img/head.jpg',
		name: 'pangxiaoli',
		social: [
			{
				icon: faGithub,
				uri: 'http://github.com/pangxiaoli',
				shape: 'circle',
				title: 'github'
			},
			{
				icon: faEnvelope,
				uri: 'mailto:qiubit@qiubit.cc',
				title: 'mailto'
			},
			{
				icon: faFigma,
				uri: 'https://figma.com/',
				title: 'figma'
			},
			{
				icon: faReddit,
				uri: 'https://reddit.com/',
				title: 'reddit'
			}
		]
	},

	site: [
		{
			icon: faBook,
			uri: 'http://ref.qiubit.cc',
			title: 'ref',
			shape: 'rect',
		},
		{
			icon: faPenRuler,
			uri: 'https://draw.qiubit.cc',
			title: 'draw',
			shape: 'rect',
		},
		{
			icon: faBlog,
			uri: 'https://blog.pangxiaoli.com',
			title: 'blog',
			shape: 'rect',
		},
	],

	footer: {
		year: 2023,
		copyRight: 'pangxiaoli',
		icp: '京ICP备2021012262号-2',
		gunan: '京公网安备11010802035180'
	}
};

export default config;