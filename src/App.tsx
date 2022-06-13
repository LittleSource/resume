import { FC, CSSProperties } from 'react'
import { Layout, Row, Col, Badge } from 'antd';
import DividerTitle from '@/components/divider-title/divider-title'
import {
  FolderOpenFilled,
  GithubOutlined,
  PhoneFilled,
  ChromeFilled
} from '@ant-design/icons';
import './App.less'

import SkillData from './data/skill';

const { Header, Content } = Layout;

const headerStyle: CSSProperties = {
  height: '230px',
  backgroundColor: "#01AAED",
  padding: '30px',
  color: '#FFF'
}

const contentStyle: CSSProperties = {
  padding: '20px 30px 30px', backgroundColor: '#fff'
}

const App: FC = () => {
  return (
    <div>
      <div className='container'>
        <Layout>
          <Header style={headerStyle}>
            <div className='row first-row'>
              <div className='name row'>俞旭源
                <div className='small'>LittleSource</div>
              </div>
              <div className='job'>
                Golang后端开发
              </div>
            </div>
            <div className='row person-info'>
              <div>
                <div className='person-info-text'>男 / 1998.09</div>
                <div className='person-info-text'>天津农学院 · 计算机科学与技术</div>
                <div className='person-info-text'>本科 · 2022年毕业</div>
              </div>
              <div>
                <div className='right-text'><div className='mrg-5'>17320285191</div><PhoneFilled /></div>
                <div className='right-text'><div className='mrg-5'>blog.52ym.vip</div><ChromeFilled /></div>
                <div className='right-text'><div className='mrg-5'>kmvip8@163.com</div><FolderOpenFilled /></div>
                <div className='right-text'><div className='mrg-5'>github.com/LittleSource</div><GithubOutlined /></div>
              </div>
            </div>
          </Header>
          <Content style={contentStyle}>
            <Row gutter={24}>
              <Col span={12}>
                <DividerTitle title='专业技能' />
                {
                  SkillData.map((item) => {
                    return (
                      <div>
                        <div className='title'>{item.title}</div>
                        {
                          item.item.map((text) => {
                            return (
                              <div>
                                <Badge color="#01AAED" />{text}
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
                <DividerTitle title='实习经历①' />
                <div>
                  <div className='title'>123213</div>
                  <div>
                    <Badge color="#01AAED" />123123
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <DividerTitle title='实习经历②' />
                {
                  SkillData.map((item) => {
                    return (
                      <div>
                        <div className='title'>{item.title}</div>
                        {
                          item.item.map((text) => {
                            return (
                              <div>
                                <Badge color="#01AAED" />{text}
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
      <div style={{ height: '30px' }}></div>
    </div>
  )
}

export default App
