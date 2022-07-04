import React, { FC, ReactElement } from 'react';
import { Rate } from 'antd';

import { Wrapper } from './style';

type Props = {
  name: string;
  progress: number;
};

const ToolExperience: FC<Props> = ({ name, progress }): ReactElement => {
  return (
    <Wrapper>
      {name.toUpperCase()}
      <Rate
        count={10}
        defaultValue={progress}
        character="•"
        style={{
          fontSize: 50,
          lineHeight: '18px',
          whiteSpace: 'nowrap',
          color: 'var(--color-3)'
        }}
        disabled
      />
    </Wrapper>
  );
};

export default ToolExperience;
