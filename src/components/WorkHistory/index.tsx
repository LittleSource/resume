import { FC } from 'react';
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
          <div className="mt-2" key={index}>
            <div className="flex flex-col sm:flex-row justify-around text-base font-semibold font-title">
              <div>{company.time}</div>
              <div>{company.companyName}</div>
              <div>{company.job}</div>
            </div>
            <div className="text-base mt-1">
              {company.desc.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorkHistory;
