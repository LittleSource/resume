import { WorkHistoryItem } from '@/components/WorkHistory';

const workData: WorkHistoryItem[] = [
	{
		companyName: 'XXXX教育科技(北京)有限公司',
		time: '2022.06-至今',
		job: '前端开发工程师',
		desc: [
			'在职期间参与<strong>Polarise留学平台</strong>相关模块的开发以及生成WORD、PDF文档等功能。',
			'参与开发公司内部的自研的<strong>低代码框架Flora</strong>。',
			'自己开发了一套与之匹配的终端快速命令工具以<strong>提升开发效率</strong>。',
			'使用到的相关技术为<strong>Vue3</strong>、<strong>TS</strong>、<strong>Ant Design</strong>以及<strong>Golang</strong>。',
		],
	},
	{
		companyName: 'XXXX科技发展有限公司',
		time: '2022.02-2022.06',
		job: '前端开发',
		jobTag: '实习',
		desc: [
			'参与开发家政服务线上预约系统，<strong>独立负责</strong>XXX开发。',
			'参与后端API接口设计，产品逻辑分析以及前端页面展现设计。',
			'独立负责项目的<strong>上线部署</strong>以及后续维护。',
			'微信小程序使用<strong>UNI-APP</strong>+Vue开发。',
		],
		imgUrl: 'https://cdn.52ym.vip/qrcode/damuzhi.jpeg',
	},
];

export default workData;
