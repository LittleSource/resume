import { FC, CSSProperties } from 'react';
import { Layout } from 'antd';
import {
  MailFilled,
  GithubOutlined,
  PhoneFilled,
  ChromeFilled,
} from '@ant-design/icons';

import './index.less';

const LayoutHeader = Layout.Header;

const headerStyle: CSSProperties = {
  height: 'auto',
  padding: '30px',
  color: '#FFF',
};

interface Props {}

const Header: FC<Props> = (props: Props) => {
  return (
    <LayoutHeader style={headerStyle} className="bg-blue">
      <div className="first-row flex justify-between items-end relative">
        <div className="text-5xl flex items-center">
          俞旭源
          <div className="ml-1 text-2xl hidden md:block">LittleSource</div>
        </div>
        <div className="text-2xl">前端工程师</div>
      </div>
      <div className="mt-5 flex flex-col 2xl:flex-row justify-between">
        <div className="flex flex-col justify-around">
          <div className="text-lg">男 / 1998.09</div>
          <div className="text-lg">天津农学院 · 计算机科学与技术</div>
          <div className="text-lg">本科 · 2022年毕业</div>
        </div>
        <div>
          <a className="flex 2xl:flex-row-reverse" href="tel:17320285191">
            <PhoneFilled className="text-lg" />
            <div className="2xl:mr-1 ml-1 text-lg">17320285191</div>
          </a>
          <a
            className="flex 2xl:flex-row-reverse"
            href="https://juejin.cn/user/2840793779030478"
            target="_blank"
          >
            <ChromeFilled className="text-lg" />
            <div className="2xl:mr-1 ml-1 text-lg">blog.52ym.vip</div>
          </a>
          <a className="flex 2xl:flex-row-reverse" href="mailto:kmvip8@163.com">
            <MailFilled className="text-lg" />
            <div className="2xl:mr-1 ml-1 text-lg">kmvip8@163.com</div>
          </a>
          <a
            className="flex 2xl:flex-row-reverse"
            href="https://github.com/LittleSource"
            target="_blank"
          >
            <GithubOutlined className="text-lg" />
            <div className="2xl:mr-1 ml-1 text-lg">github.com/LittleSource</div>
          </a>
        </div>
      </div>
    </LayoutHeader>
  );
};

export default Header;
