import { FC } from 'react';

interface Props {
  title: string;
}

const DividerTitle: FC<Props> = (props: Props) => {
  return (
    <div className="h-8 w-full mt-1 border-b-2 border-blue-200">
      <div className="font-title font-semibold text-xl">{props.title}</div>
    </div>
  );
};

export default DividerTitle;
