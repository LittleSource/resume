import { FC } from 'react';
import './index.less';

interface Props {
  title: string;
}

const DividerTitle: FC<Props> = (props: Props) => {
  return (
    <div className="section-hd">
      <h2 className="section-title">{props.title}</h2>
    </div>
  );
};

export default DividerTitle;
