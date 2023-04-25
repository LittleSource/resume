import React from 'react';

export interface SkillData {
	// 技能标题
	title: string;
	// 技能列表
	item: string[];
}

export interface SkillProps {
	data: SkillData[];
}

const Skill: React.FC<SkillProps> = (props) => {
	return (
		<div className="flex flex-wrap justify-between">
			{props.data.map((item, index) => {
				return (
					<div className="mt-1" key={index}>
						<div className="text-base font-semibold font-title">
							{item.title}
						</div>
						{item.item.map((text, index) => {
							return (
								<div className="flex" key={index}>
									<div className="text-blue-100 text-2xl mr-1 leading-6">·</div>
									<div className="text-base">{text}</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Skill;
