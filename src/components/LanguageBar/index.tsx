import React, { FC, ReactElement } from 'react';
import { Row, Col } from 'antd';

import { Wrapper, ProgressBar, PureProgress } from './style';

type Props = {
  label: string;
  spokenProgress: number;
  writtenProgress: number;
};

const LanguageBar: FC<Props> = ({
  label,
  spokenProgress,
  writtenProgress
}): ReactElement => {
  return (
    <Wrapper>
      <Row
        wrap={false}
        style={{
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 'bold',
          paddingBottom: 6
        }}
      >
        <Col span={24}>{label.toUpperCase()}</Col>
      </Row>
      <Row wrap={false} gutter={10} align="middle" style={{ fontSize: 12 }}>
        <Col flex="none">SPOKEN</Col>
        <Col flex="auto">
          <Row wrap={false} align="middle">
            <Col span={12}>
              <ProgressBar $inversed>
                <PureProgress progress={spokenProgress} />
              </ProgressBar>
            </Col>
            <Col span={12}>
              <ProgressBar>
                <PureProgress progress={writtenProgress} />
              </ProgressBar>
            </Col>
          </Row>
        </Col>
        <Col flex="none">WRITTEN</Col>
      </Row>
    </Wrapper>
  );
};

export default LanguageBar;
