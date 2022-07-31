import { FC } from 'react';
import './index.less';
interface Props {
  data: WorkHistoryItem[];
}

export interface WorkHistoryItem {
  companyName: string;
  time: string;
  job: string;
  desc: string[];
}
const WorkHistory: FC<Props> = (props: Props) => {
  return (
    <>
      {props.data.map((company, index) => {
        return (
          <div className="work" key={index}>
            <div className="work-box">
              <div className="work-title">
                <div className="time">{company.time}</div>
                <div className="company">{company.companyName}</div>
                <div className="three-title">{company.job}</div>
              </div>
              <div className="desc">
                {company.desc.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorkHistory;
