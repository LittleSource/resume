import { FC } from 'react';
import DividerTitle from '@/components/DividerTitle';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skill from '@/components/Skill';
import WorkHistory from '@/components/WorkHistory';
import Project from '@/components/Project';
import './App.less';

import basicInfo from './data/basicInfo';
import { selfEvaluation } from './data/basicInfo';
import SkillData from './data/skill';
import workData from './data/work';
import { Projects } from './data/project';

const App: FC = () => {
  return (
    <div>
      <div className="cistern font-body">
        <Header {...basicInfo} />
        <div className="px-6 pt-1 pb-6 bg-white">
          <DividerTitle title="专业技能" />
          <Skill data={SkillData} />
          <DividerTitle title="工作经历" />
          <WorkHistory data={workData} />
          <DividerTitle title="作品介绍" />
          {Projects.map((item) => (
            <Project {...item} />
          ))}
          <DividerTitle title="自我评价" />
          <div className="mt-1">{selfEvaluation}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
