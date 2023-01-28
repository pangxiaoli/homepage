import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ILink } from '../../../config';
import './index.less';

export interface ILinkProps {
    data: ILink,
    size?: 'small' | 'normal' | 'big';
}

const Link = ( props: ILinkProps ) => {
	const { data, size = 'normal' } = props;
	const { icon, shape = 'circle', uri, title } = data;

	return (
		<a className="link" href={uri}>
			<div className={ `link-icon shape-${shape} size-${size}`}>
				<FontAwesomeIcon icon={icon as IconProp ?? faTree}/>
			</div>
			<p>{title}</p>
		</a>
	);
};

export default Link;