import React from 'react';
import './index.less';
const Footer: React.FC = () => {
	return (
		<div className="footer w-full mt-3 flex items-center justify-center">
			<a
				className="text-2xl i-mdi:github"
				target="_blank"
				href="https://github.com/LittleSource/resume-react" rel="noreferrer"
			></a>
			<a
				className="text-2xl ml-2 i-mdi:file-pdf-box"
				onClick={() => window.print()}
			></a>
		</div>
	);
};

export default Footer;
