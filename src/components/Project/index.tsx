import { FC } from 'react';
//import { GithubOutlined } from '@ant-design/icons';

export interface ProjectProps {
  title: string;
  desc: string;
  imgUrl?: string;
}

const Project: FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div className="flex justify-between items-center mt-2 2xl:mt-1">
      <div className="2xl:w-10/12">
        <div className="text-base font-semibold font-title">{props.title}</div>
        <div className="text-base">{props.desc}</div>
      </div>
      {
        props?.imgUrl && (
          <img
            className="flex-shrink h-20 w-20"
            src={props.imgUrl}
            alt="小程序码"
          />
        )
        //   (
        //     <GithubOutlined className="project-icon" />
        //   )
      }
    </div>
  );
};

export default Project;
