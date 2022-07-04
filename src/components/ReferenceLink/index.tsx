import { FC, ReactElement } from 'react';

import { Wrapper } from './style';

type Props = {
  icon?: ReactElement;
  linkValue?: string;
  value?: string;
  inverted?: boolean;
  uppercase?: boolean;
};

const ReferenceLink: FC<Props> = ({
  icon,
  linkValue,
  value,
  inverted = false,
  uppercase = false
}): ReactElement => {
  return (
    <Wrapper
      href={linkValue}
      target="_blank"
      $inverted={inverted}
      $uppercase={uppercase}
    >
      <div style={{ display: 'inline-block', lineHeight: 0 }}>{icon}</div>
      <div style={{ marginLeft: inverted ? 20 : 12 }}>{value}</div>
    </Wrapper>
  );
};

export default ReferenceLink;
