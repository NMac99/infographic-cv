import { FC, ReactElement } from 'react';
import { Layout, Col, Row } from 'antd';
import USER from 'constants/user';

import MainbarCard from 'components/MainbarCard';
import ReferenceLink from 'components/ReferenceLink';
import PieChart from 'components/PieChart';
import ProjectLink from 'components/ProjectLink';
import ToolExperience from 'components/ToolExperience';
import Timeline from 'components/Timeline';
import Reviews from 'components/Reviews';

const { Content } = Layout;

type Props = {};

const Mainbar: FC<Props> = (): ReactElement => {
  return (
    <Layout>
      <Content
        style={{
          padding: 20,
          color: 'var(--color-5)',
          background: 'var(--color-1)'
        }}
      >
        <MainbarCard title="About Me">
          <div style={{ textAlign: 'justify' }}>{USER.aboutMe}</div>
        </MainbarCard>
        <Row wrap={false} justify="space-between" gutter={20}>
          <Col span={12} style={{ display: 'flex' }}>
            <MainbarCard title="I ...">
              {USER.advantages.map(item => (
                <Row
                  key={item.id}
                  style={{ marginBottom: 10, justifyContent: 'center' }}
                >
                  <Col
                    span={3}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: 'var(--color-3)',
                      fontSize: 20
                    }}
                  >
                    ⇒
                  </Col>
                  <Col
                    span={21}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {item.value}
                  </Col>
                </Row>
              ))}
            </MainbarCard>
          </Col>
          <Col span={12} style={{ marginRight: 10 }}>
            <MainbarCard
              title="SWIFT"
              style={{ position: 'relative', height: '100%' }}
            >
              <PieChart data={USER.skills.swift} />
            </MainbarCard>
          </Col>
        </Row>
        <MainbarCard title="Built from scratch" style={{ minHeight: 210 }}>
          <Row
            style={{ paddingTop: 20, justifyContent: 'center' }}
            wrap={true}
            gutter={[0, 40]}
          >
            {USER.experience.map(item => (
              <Col
                key={item.id}
                span={6}
                style={{ height: '120px', position: 'relative' }}
              >
                <ProjectLink {...item} />
              </Col>
            ))}
          </Row>
        </MainbarCard>
        <MainbarCard title="Education">
          <Timeline />
        </MainbarCard>
        {/*<Row wrap={false} justify="space-between" gutter={20}>*/}
        {/*  <Col span={18} style={{ display: 'flex' }}>*/}
        <MainbarCard title="Upwork Reviews">
          <Reviews />
        </MainbarCard>
        {/*</Col>*/}
        <Row wrap={false} justify="space-between" gutter={20}>
          <Col span={10} style={{ display: 'flex' }}>
            <MainbarCard title="Environments">
              <div
                style={{
                  marginTop: 40,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                  gap: 25
                }}
              >
                {USER.skills.os.map(item => (
                  <ReferenceLink key={item.id} {...item} inverted />
                ))}
              </div>
            </MainbarCard>
          </Col>
          <Col span={14} style={{ display: 'flex' }}>
            <MainbarCard title="Experience &nbsp;with">
              <div style={{ marginTop: 30, position: 'relative', left: -80 }}>
                {USER.tools.map(item => (
                  <ToolExperience key={item.id} {...item} />
                ))}
              </div>
            </MainbarCard>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Mainbar;
