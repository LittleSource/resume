import { FC } from 'react';

export interface SkillData {
  // 技能标题
  title: string;
  // 技能列表
  item: string[];
}

export interface SkillProps {
  data: SkillData[];
}

const Skill: FC<SkillProps> = (props) => {
  return (
    <div className="flex flex-wrap justify-between">
      {
        props.data.map((item, index) => {
          return (
            <div className="mt-1" key={index}>
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
        })
      }
    </div >
  );
};

export default Skill;
