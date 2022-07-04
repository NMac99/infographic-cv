import { CSSProperties, FC, ReactElement, ReactNode } from 'react';

import { CardHeader, CardWrapper } from './style';

type Props = {
  title: string;
  children?: ReactNode;
  style?: CSSProperties;
};

const MainbarCard: FC<Props> = ({ title, children, style }): ReactElement => {
  return (
    <CardWrapper style={style || {}}>
      <CardHeader>{title.toUpperCase()}</CardHeader>
      <br />
      {children}
    </CardWrapper>
  );
};

export default MainbarCard;
