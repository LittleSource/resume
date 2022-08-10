import { FC } from 'react';
import './index.less';

export interface BasicInfoProps {
  name: string;
  enName: string;
  intended: string;
  gender: string;
  birthday: string;
  universityName: string;
  universityMajor: string;
  educationalBackground: string;
  phone: string;
  mail: string;
  blogName: string;
  blogLink: string;
  github: string;
}

const Header: FC<BasicInfoProps> = (props) => {
  return (
    <div className="p-7 text-white bg-blue-100">
      <div className="first-row flex justify-between items-end relative after:border-blue-900">
        <div className="text-5xl flex items-center">
          {props.name}
          <div className="ml-1 text-2xl hidden sm:block">{props.enName}</div>
        </div>
        <div className="text-2xl">{props.intended}</div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col justify-around">
          <div className="text-lg">
            {props.gender} / {props.birthday}
          </div>
          <div className="text-lg">
            {props.universityName} · {props.universityMajor}
          </div>
          <div className="text-lg">{props.educationalBackground}</div>
        </div>
        <div>
          <a className="flex sm:flex-row-reverse items-center" href={`tel:${props.phone}`}>
            <div className="text-xl i-mdi:cellphone-charging" />

            <div className="sm:mr-1 ml-1 text-lg">{props.phone}</div>
          </a>
          <a
            className="flex sm:flex-row-reverse items-center"
            href={props.blogLink}
            target="_blank"
          >
            <div className="text-xl i-mdi:microsoft-edge-legacy" />
            <div className="sm:mr-1 ml-1 text-lg">{props.blogName}</div>
          </a>
          <a className="flex sm:flex-row-reverse items-center" href={`mailto:${props.mail}`}>
            <div className="text-xl i-mdi:email-arrow-right" />
            <div className="sm:mr-1 ml-1 text-lg">{props.mail}</div>
          </a>
          <a
            className="flex sm:flex-row-reverse items-center"
            href={props.github}
            target="_blank"
          >
            <div className="text-xl i-mdi:github" />
            <div className="sm:mr-1 ml-1 text-lg">
              {props.github.substring(8)}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
