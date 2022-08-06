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
      <div className="container font-body">
        <Layout>
          <Header />
          <Content style={contentStyle}>
            <DividerTitle title="专业技能" />
            <div className="flex flex-col">
              {SkillData.map((item, index) => {
                return (
                  <div className="mt-1 mb-1" key={index}>
                    <div className="text-base font-semibold font-title">
                      {item.title}
                    </div>
                    {item.item.map((text, index) => {
                      return (
                        <div className="text-base" key={index}>
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
      <div className="2xl:h-10"></div>
    </div>
  );
};

export default App;
