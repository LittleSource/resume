import { WorkHistoryItem } from '@/components/WorkHistory';

const workData: WorkHistoryItem[] = [
  {
    companyName: 'XX教育科技(北京)有限公司',
    time: '2022.06-至今',
    job: '全栈开发',
    desc: [
      '在职期间参与开发公司内部的自研的低代码框架以及业务功能的实现。',
      '负责项目的相关前端组件的开发以及部分后端功能代码的编写。',
      '使用到的相关技术为TypeScript ,Ant Design以及Golang。',
    ],
  },
  {
    companyName: '北京XXXX科技有限公司',
    time: '2021.09-2022.06',
    job: '全栈开发',
    desc: [
      '全程参与公司新项目的需求评审到开发上线。',
      '使用基于kratos的微服务开发后端项目。',
      '负责代理商系统及用户系统的前端业务开发。',
    ],
  },
  {
    companyName: '天津XXX科技发展有限公司',
    time: '2020.05-2021.09',
    job: '前端开发',
    desc: [
      '公司主要做的是家政服务线上预约系统，本人负责小程序及后台管理相关业务的开发。',
      '使用UNI-APP+Vue.js开发微信小程序应用以及thinkPHP开发部分API接口。',
    ],
  },
];

export default workData;
