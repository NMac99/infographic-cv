import { FC, ReactElement, ReactNode } from 'react';

import { CardHeader, CardWrapper } from './style';

type Props = {
  title: string;
  children?: ReactNode;
};

const SidebarCard: FC<Props> = ({ title, children }): ReactElement => {
  return (
    <CardWrapper>
      <CardHeader>{title.toUpperCase()}</CardHeader>
      {children}
    </CardWrapper>
  );
};

export default SidebarCard;
