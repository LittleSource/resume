import { FC } from 'react';
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

const App: FC = () => {
  return (
    <div className="container font-body">
      <Header />
      <div className="px-6 pt-3 pb-6 bg-white">
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
                    <div className="text-base flex items-center" key={index}>
                      <div className="w-1 h-1 bg-blue-100 mr-1 rounded-full"></div>
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
      </div>
    </div>
  );
};

export default App;
