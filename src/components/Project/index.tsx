import { FC } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import './index.less';

export interface ProjectProps {
  title: string;
  desc: string;
  imgUrl?: string;
}

const Project: FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-content-title">{props.title}</div>
        <div className="project-content-desc">{props.desc}</div>
      </div>
      {
        props?.imgUrl && (
          <img className="project-qrcode" src={props.imgUrl} alt="小程序码" />
        )
        //   (
        //     <GithubOutlined className="project-icon" />
        //   )
      }
    </div>
  );
};

export default Project;
