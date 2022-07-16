import { FC, CSSProperties } from 'react';
import { Layout, Badge } from 'antd';
import DividerTitle from '@/components/DividerTitle';
import Header from '@/components/Header';
import './App.less';

import SkillData from './data/skill';

const { Content } = Layout;

const contentStyle: CSSProperties = {
  padding: '10px 30px 30px',
  backgroundColor: '#fff',
};

const App: FC = () => {
  return (
    <div>
      <div className="container">
        <Layout>
          <Header />
          <Content style={contentStyle}>
            <DividerTitle title="专业技能" />
            <div className="skill">
              {SkillData.map((item) => {
                return (
                  <div className="skill-box">
                    <div className="title">{item.title}</div>
                    {item.item.map((text) => {
                      return (
                        <div className="desc">
                          <Badge color="#01AAED" />
                          {text}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <DividerTitle title="工作经历" />
            <div className="work">
              <div className="work-box">
                <div className="work-title">
                  <div className="time">2022.02-2022.06</div>
                  <div className="company">北京句子互动科技有限公司</div>
                  <div className="three-title">前端开发</div>
                </div>
                <div className="desc">
                  在职期间参与开发公司内部后台管理系统，项目是一套完整的公司内部运维人员管理代理商与客户的系统。
                  <br />
                  使用到的相关技术为React,TypeScript ,Ant Design。
                  <br />
                  负责项目的相关组件实现以及部分后端代码的编写。
                </div>
              </div>
              <div className="work-box">
                <div className="work-title">
                  <div className="time">2021.05-2021.08</div>
                  <div className="company">天津大拇指科技发展有限公司</div>
                  <div className="three-title">全栈开发</div>
                </div>
                <div className="desc">
                  公司主要做的是家政服务线上预约系统，本人独立负责所有小程序相关业务的开发。
                  <br />
                  使用UNI-APP+VUE.js开发夸端应用。
                  <div className="project">
                    <div className="project-content">
                      <div className="project-content-title">
                        拇指生活用户端小程序
                      </div>
                      <div className="project-content-desc">
                        为用户提供家政服务的下单、订单查询和服务通知等，
                        主要负责团购模块、档期模块、优惠券模块等功能的代码编写与测试。
                      </div>
                    </div>
                    <img
                      className="project-qrcode"
                      src="https://cdn.52ym.vip/qrcode/damuzhi.jpeg"
                      alt="小程序码"
                    />
                  </div>
                  <div className="project">
                    <div className="project-content">
                      <div className="project-content-title">
                        拇指生活工人端小程序
                      </div>
                      <div className="project-content-desc">
                        为公司保洁员提供的员工端小程序，实现上门通知、上门提醒、订单查看、工资记录查询等功能。
                        主要有订单模块、资金模块、统计模块等业务代码编写与测试。
                      </div>
                    </div>
                    <img
                      className="project-qrcode"
                      src="https://cdn.52ym.vip/qrcode/damuzhi_worker.jpg"
                      alt="小程序码"
                    />
                  </div>
                </div>
              </div>
              <DividerTitle title="作品介绍" />
              <div className="work-box">
                <div className="desc">
                  <div className="project">
                    <div className="project-content">
                      <div className="project-content-title">
                        外包项目·麒亿家小程序
                      </div>
                      <div className="project-content-desc">
                        一个小型的外卖平台，前端使用原生微信小程序开发，整个项目前后端自己独立完成。
                        主要功能:
                        登录注册、购物车、下单支付、订单查询、商家管理、平台管理等。
                        使用ThinkPHP开发API 接口。
                      </div>
                    </div>
                    <img
                      className="project-qrcode"
                      src="https://cdn.52ym.vip/qrcode/qiyijia.jpg"
                      alt="小程序码"
                    />
                  </div>
                  <div className="project">
                    <div className="project-content">
                      <div className="project-content-title">TOP 校园</div>
                      <div className="project-content-desc">
                        为在校大学生提供表白墙交友、超市外卖、兼职跑腿等综合服务平台，
                        项目使用 UNI-APP 和 ThinkPHP 框架， 负责整个项目前端 VUE
                        代码编写测试以及后端功能模块的实现、参与数据库表设计。
                      </div>
                      <div className="project-content-title">
                        学习作品 · 共享资料源
                      </div>
                      <div className="project-content-desc">
                        在学校萌生的一个想法，一个资料共享平台，比如说考研和考证的
                        资料人人可以共享发布。
                        使用vue.js开发前端界面，vuex做状态管理。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default App;
