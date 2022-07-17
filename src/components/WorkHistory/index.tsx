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
      {props.data.map((company) => {
        return (
          <div className="work">
            <div className="work-box">
              <div className="work-title">
                <div className="time">{company.time}</div>
                <div className="company">{company.companyName}</div>
                <div className="three-title">{company.job}</div>
              </div>
              <div className="desc">
                {company.desc.map((item) => {
                  return <div>{item}</div>;
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
