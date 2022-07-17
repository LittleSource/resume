import { FC, CSSProperties } from 'react';
import { Layout, Badge } from 'antd';
import DividerTitle from '@/components/DividerTitle';
import Header from '@/components/Header';
import WorkHistory from './components/WorkHistory';
import Project from './components/Project';
import './App.less';

import SkillData from './data/skill';
import workData from './data/work';
import {
  MuZhiForUser,
  MuZhiForWorker,
  QiYiJia,
  TopSchool,
  ZiLiao,
} from './data/project';

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
            <WorkHistory data={workData} />
            <Project {...MuZhiForUser} />
            <Project {...MuZhiForWorker} />
            <DividerTitle title="作品介绍" />
            <Project {...QiYiJia} />
            <Project {...TopSchool} />
            <Project {...ZiLiao} />
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default App;
