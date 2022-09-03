import { ProjectProps } from '@/components/Project';

const TopSchool: ProjectProps = {
  title: 'TOP 校园',
  desc: '为在校大学生提供表白墙交友、超市外卖、兼职跑腿等综合服务平台，项目使用 UNI-APP 和 ThinkPHP， 独立负责所有前端代码编写以及部分服务端API接口。',
  githubUrl: 'https://github.com/LittleSource/top_school_uni',
};

const Resume: ProjectProps = {
  title: '开源作品 · React简历',
  desc: '用React做的简历模板，也就是您看到的这个简历。没错，它是多个组件组合成的网页，然后导出为PDF。',
  githubUrl: 'https://github.com/LittleSource/resume-react',
};
// 个人作品
export const Projects: ProjectProps[] = [TopSchool, Resume];

// 项目作品
export const MuZhiForUser: ProjectProps = {
  title: '拇指生活用户端小程序',
  desc: '为用户提供家政服务的下单、订单查询和服务通知等， 主要负责团购模块、档期模块、优惠券模块等功能的代码编写与测试。',
  imgUrl: 'https://cdn.52ym.vip/qrcode/damuzhi.jpeg',
};

export const MuZhiForWorker: ProjectProps = {
  title: '拇指生活工人端小程序',
  desc: '为公司保洁员提供的员工端小程序，实现上门通知、上门提醒、订单查看、工资记录查询等功能。主要有订单模块、资金模块、统计模块等业务代码编写与测试。',
  imgUrl: 'https://cdn.52ym.vip/qrcode/damuzhi_worker.jpg',
};
