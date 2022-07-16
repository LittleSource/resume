import { FC, CSSProperties } from 'react';
import { Layout } from 'antd';
import {
  FolderOpenFilled,
  GithubOutlined,
  PhoneFilled,
  ChromeFilled,
} from '@ant-design/icons';

import './index.less';

const LayoutHeader = Layout.Header;

const headerStyle: CSSProperties = {
  height: '245px',
  backgroundColor: '#01AAED',
  padding: '30px',
  color: '#FFF',
};

interface Props {}

const Header: FC<Props> = (props: Props) => {
  return (
    <LayoutHeader style={headerStyle}>
      <div className="row first-row">
        <div className="name row">
          俞旭源
          <div className="small">LittleSource</div>
        </div>
        <div className="job">前端工程师</div>
      </div>
      <div className="row person-info">
        <div>
          <div className="person-info-text">男 / 1998.09</div>
          <div className="person-info-text">天津农学院 · 计算机科学与技术</div>
          <div className="person-info-text">本科 · 2022年毕业</div>
        </div>
        <div>
          <a className="right-text" href="tel:17320285191">
            <div className="mrg-5">17320285191</div>
            <PhoneFilled />
          </a>
          <a
            className="right-text"
            href="https://juejin.cn/user/2840793779030478"
            target="_blank"
          >
            <div className="mrg-5">blog.52ym.vip</div>
            <ChromeFilled />
          </a>
          <a className="right-text" href="mailto:kmvip8@163.com">
            <div className="mrg-5">kmvip8@163.com</div>
            <FolderOpenFilled />
          </a>
          <a
            className="right-text"
            href="https://github.com/LittleSource"
            target="_blank"
          >
            <div className="mrg-5">github.com/LittleSource</div>
            <GithubOutlined />
          </a>
        </div>
      </div>
    </LayoutHeader>
  );
};

export default Header;
