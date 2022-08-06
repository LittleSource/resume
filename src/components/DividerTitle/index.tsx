import { FC } from 'react';

interface Props {
  title: string;
}

const DividerTitle: FC<Props> = (props: Props) => {
  return (
    <div className="h-8 w-full mt-1 border-b-2 border-solid border-blue">
      <h2 className="font-title font-semibold text-xl">{props.title}</h2>
    </div>
  );
};

export default DividerTitle;
