import { FC, ReactElement, useEffect, useState } from 'react';
import { Layout, Progress, Row, Col, Space, Menu } from 'antd';
import USER from 'constants/user';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  MailFilled,
  InfoCircleFilled,
  SignalFilled,
  StarFilled
} from '@ant-design/icons';

import { ProfileImg, ProgressWrapper, ReferenceWrapper } from './style';
import SidebarCard from 'components/SidebarCard';
import ReferenceLink from 'components/ReferenceLink';
import LanguageBar from 'components/LanguageBar';

const { Sider } = Layout;

type Props = {};

const Sidebar: FC<Props> = (): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document
      .getElementById('root')
      ?.classList[collapsed ? 'add' : 'remove']('collapsed');
  }, [collapsed]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        padding: '20px 20px 10px',
        backgroundColor: 'var(--color-5)'
      }}
      width="33%"
    >
      <Menu style={{ background: 'none' }} selectable={false} theme="dark">
        <Menu.Item
          key="0"
          onClick={() => {
            setCollapsed(val => !val);
          }}
          style={{
            background: 'transparent',
            color: 'var(--color-1)',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          icon={
            collapsed ? (
              <CaretRightOutlined />
            ) : (
              <CaretLeftOutlined style={{ fontSize: 24 }} />
            )
          }
        />
        <Menu.Item
          key="1"
          {...(collapsed && {
            icon: (
              <ProfileImg
                size={32}
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            )
          })}
          style={{ height: 'unset' }}
        >
          <ProgressWrapper>
            <Progress
              type="circle"
              percent={22}
              width={200}
              strokeColor="var(--color-2)"
              trailColor="var(--color-1)"
              strokeWidth={5}
              showInfo={false}
            />
            <ProfileImg size={170} />
          </ProgressWrapper>
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{ height: 'unset' }}
          {...(collapsed && {
            icon: <InfoCircleFilled style={{ color: 'var(--color-1)' }} />
          })}
        >
          <SidebarCard title="Personal">
            {USER.personal.map(item => (
              <Row
                key={item.id}
                wrap={false}
                style={{
                  color: 'var(--color-1)',
                  borderBottom: '1px solid var(--color-1)',
                  opacity: 0.8
                }}
              >
                <Col span={12} style={{ fontSize: '16px' }}>
                  {item.label.toUpperCase()}
                </Col>
                <Col span={12} style={{ fontSize: '14px', opacity: 0.7 }}>
                  {item.value.toUpperCase()}
                </Col>
              </Row>
            ))}
          </SidebarCard>
        </Menu.Item>
        <Menu.Item
          key="3"
          style={{ height: 'unset' }}
          {...(collapsed && {
            icon: <MailFilled style={{ color: 'var(--color-1)' }} />
          })}
        >
          <SidebarCard title="Contact">
            {USER.contact.map(item => (
              <Row
                key={item.id}
                wrap={false}
                style={{
                  color: 'var(--color-1)',
                  borderBottom: '1px solid var(--color-1)',
                  opacity: 0.8
                }}
              >
                <Col span={8} style={{ fontSize: '16px' }}>
                  {item.label.toUpperCase()}
                </Col>
                <Col
                  span={16}
                  style={{
                    fontSize: '14px',
                    opacity: 0.7,
                    ...(item.id === 0 && { fontSize: '13px' })
                  }}
                >
                  <a href={`${item.type}:${item.rawValue}`}>
                    {item.value.toUpperCase()}
                  </a>
                </Col>
              </Row>
            ))}
          </SidebarCard>
          <ReferenceWrapper size="middle" direction="vertical">
            {USER.references.map(ref => (
              <ReferenceLink key={ref.id} {...ref} />
            ))}
          </ReferenceWrapper>
        </Menu.Item>
        <Menu.Item
          key="4"
          style={{ height: 'unset' }}
          {...(collapsed && {
            icon: <SignalFilled style={{ color: 'var(--color-1)' }} />
          })}
        >
          <SidebarCard title="Language">
            {USER.languages.map(lang => (
              <LanguageBar key={lang.id} {...lang} />
            ))}
          </SidebarCard>
        </Menu.Item>
        <Menu.Item
          key="5"
          style={{ height: 'unset' }}
          {...(collapsed && {
            icon: <StarFilled style={{ color: 'var(--color-1)' }} />
          })}
        >
          <SidebarCard title="Hobbies">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {USER.hobbies.map(hobby => (
                <ReferenceLink key={hobby.id} {...hobby} uppercase />
              ))}
            </Space>
          </SidebarCard>
        </Menu.Item>
        <Menu.Item
          key="999999"
          onClick={() => {
            setCollapsed(val => !val);
          }}
          style={{
            background: 'transparent',
            color: 'var(--color-1)',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          icon={
            collapsed ? (
              <CaretRightOutlined />
            ) : (
              <CaretLeftOutlined style={{ fontSize: 24 }} />
            )
          }
        />
      </Menu>
    </Sider>
  );
};

export default Sidebar;
