import useConfig from '../../hooks/useConfig';
import Link from '../Link';
import './index.less';

const Main = () => {
	return (
		<div className="main">
			<p className="title">{useConfig( 'title' )}</p>
			<p className="sub-title">{useConfig( 'subTitle' )}</p>
			<div className="sites">
				{
					useConfig( 'site' )?.map(( i, index ) => <Link key={index} data={i} size='big' showTitle={true}/> )
				}
			</div>
		</div>
	);
};

export default Main;