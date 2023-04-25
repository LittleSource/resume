import React from 'react';
// 传入imgUrl则展示项目右侧图片
// 传入githubUrl则展示项目右侧github的icon
// 两者不能同时存在
export interface ProjectProps {
	title: string;
	desc: string;
	imgUrl?: string;
	githubUrl?: string;
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
	return (
		<div className="flex justify-between items-center mt-2 2xl:mt-1">
			<div className="w-11/12">
				<div className="text-base font-semibold font-title">{props.title}</div>
				<div className="text-base">{props.desc}</div>
			</div>
			{props?.imgUrl && (
				<img
					className="flex-shrink h-20 w-20"
					src={props.imgUrl}
					alt="小程序码"
				/>
			)}
			{props?.githubUrl && (
				<a
					className="w-10 text-2xl text-blue-100 i-mdi:github"
					target="_blank"
					href={props.githubUrl} rel="noreferrer"
				></a>
			)}
		</div>
	);
};

export default Project;
