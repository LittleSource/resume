import { FC, CSSProperties } from 'react';
import { Layout, Row, Col, Badge } from 'antd';
import DividerTitle from '@/components/divider-title/divider-title';
import Header from '@/components/Header';
import './App.less';

import SkillData from './data/skill';

const { Content } = Layout;

const contentStyle: CSSProperties = {
  padding: '20px 30px 30px',
  backgroundColor: '#fff',
};

const App: FC = () => {
  return (
    <div>
      <div className="container">
        <Layout>
          <Header />
          <Content style={contentStyle}>
            <Row gutter={24}>
              <Col span={12}>
                <DividerTitle title="专业技能" />
                {SkillData.map((item) => {
                  return (
                    <div>
                      <div className="title">{item.title}</div>
                      {item.item.map((text) => {
                        return (
                          <div>
                            <Badge color="#01AAED" />
                            {text}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
                <DividerTitle title="实习经历①" />
                <div>
                  <div className="title">123213</div>
                  <div>
                    <Badge color="#01AAED" />
                    123123
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <DividerTitle title="实习经历②" />
                {SkillData.map((item) => {
                  return (
                    <div>
                      <div className="title">{item.title}</div>
                      {item.item.map((text) => {
                        return (
                          <div>
                            <Badge color="#01AAED" />
                            {text}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
      <div style={{ height: '30px' }}></div>
    </div>
  );
};

export default App;
