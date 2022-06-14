import { FC } from 'react';
import './divider-title.less';

interface Props {
  title: string;
}

const DividerTitle: FC<Props> = (props: Props) => {
  return (
    <div className="section-hd">
      <span className="section-title-l section-title-divider"></span>
      <h2 className="section-title">{props.title}</h2>
      <span className="section-title-r section-title-divider"></span>
    </div>
  );
};

export default DividerTitle;
