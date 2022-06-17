import { FC, CSSProperties } from 'react';
import { Layout, Row, Col, Badge } from 'antd';
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
                  <div className="time">2022.02-至今</div>
                  <div className="company">北京句子互动科技有限公司</div>
                  <div className="three-title">identity小组</div>
                </div>
                <div className="desc">
                  全程参与公司新项目的需求评审到开发上线,
                  使用基于kratos的微服务框架开发项目,
                  负责基于wechaty微信智能客服聊天机器人的开发,
                  负责代理商系统及用户系统账号权限的相关业务开发,
                  负责相关代码的单元测试编写, 使用AWS的云服务和基础设施。
                </div>
              </div>
              <div className="work-box">
                <div className="work-title">
                  <div className="time">2021.05-2021.08</div>
                  <div className="company">大拇指(天津)科技发展有限公司</div>
                  <div className="three-title">identity小组</div>
                </div>
                <div className="desc">
                  <div>
                    拇指生活用户端小程序
                    为用户提供家政服务的下单、订单查询和服务通知等，
                    主要负责团购模块、档期模块、优惠券模块等功能的代码编写与测试。
                    小程序码
                  </div>
                  <div>
                    拇指生活工人端小程序
                    为公司保洁员提供的员工端小程序，实现上门通知、上门提醒、订单查看、工资记录查询等功能。
                    主要有订单模块、资金模块、统计模块等业务代码编写与测试。小程序码
                  </div>
                  <div>
                    拇指生活管理后台
                    为公司运营人员提供后台管理系统，方便管理保洁员、配置小程序、管理订单等操作。
                    本人主要负责菜单结构，订单处理、退款操作等模块等业务代码的编写与测试。
                  </div>
                </div>
              </div>
              <DividerTitle title="作品介绍" />
            </div>
          </Content>
        </Layout>
      </div>
      <div style={{ height: '30px' }}></div>
    </div>
  );
};

export default App;
