import useConfig from '../../hooks/useConfig';
import beianIcon from '../../static/img/beian.png';
import './index.less';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-item">©{useConfig( 'footer' )?.year} {useConfig( 'footer' )?.copyRight}</div>
			<div className="footer-item">
				<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
					{useConfig( 'footer' )?.icp}
				</a>
			</div>
			<div className="footer-item">
				<a href={'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode='} target="_blank" rel="noopener noreferrer">
					<img src={beianIcon} alt="beian" />
					{useConfig( 'footer' )?.gunan}
				</a>
			</div>
		</div>
	);
};

export default Footer;