import { FC } from 'react';
import DividerTitle from '@/components/DividerTitle';
import Header from '@/components/Header';
import Skill from '@/components/Skill';
import WorkHistory from '@/components/WorkHistory';
import Project from '@/components/Project';
import './App.less';

import basicInfo from './data/basicInfo';
import SkillData from './data/skill';
import workData from './data/work';
import { MuZhiForUser, MuZhiForWorker, Projects } from './data/project';

const App: FC = () => {
  return (
    <div className="container font-body">
      <Header {...basicInfo} />
      <div className="px-6 pt-3 pb-6 bg-white">
        <DividerTitle title="专业技能" />
        <Skill data={SkillData} />
        <DividerTitle title="工作经历" />
        <WorkHistory data={workData} />
        <Project {...MuZhiForUser} />
        <Project {...MuZhiForWorker} />
        <DividerTitle title="作品介绍" />
        {Projects.map((item) => (
          <Project {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
