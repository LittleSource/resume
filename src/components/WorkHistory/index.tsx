import React from 'react';
interface Props {
	data: WorkHistoryItem[];
}

export interface WorkHistoryItem {
	companyName: string;
	time: string;
	job: string;
	jobTag?: string;
	desc: string[];
	imgUrl?: string;
}
const WorkHistory: React.FC<Props> = (props: Props) => {
	return (
		<>
			{props.data.map((company, index) => {
				return (
					<div className="mt-2" key={index}>
						<div className="flex flex-col sm:flex-row justify-between text-base font-semibold font-title">
							<div>{company.time}</div>
							<div>{company.companyName}</div>
							<div>
								{company.job}
								{company.jobTag && (
									<div className="inline-block bg-gray-100 ml-1 px-1 rounded border-1 border-gray-300 text-gray-500 text-sm font-normal">
										{company.jobTag}
									</div>
								)}
							</div>
						</div>
						<div className='flex justify-between'>
							<div className="text-base mt-1">
								{company.desc.map((item, index) => {
									return <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>;
								})}
							</div>
							{company?.imgUrl && (
								<img
									className="flex-shrink h-20 w-20 pt-2"
									src={company.imgUrl}
									alt="公司图片"
								/>
							)}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default WorkHistory;
