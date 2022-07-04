import { FC, ReactElement } from 'react';

import { Wrapper } from './style';

type Props = {
  icon?: ReactElement;
  projectLink?: string;
  name?: string;
};

const ProjectLink: FC<Props> = ({ icon, projectLink, name }): ReactElement => {
  return (
    <Wrapper href={projectLink} target="_blank">
      {icon}
      <div style={{ marginTop: 10, whiteSpace: 'nowrap' }}>{name}</div>
    </Wrapper>
  );
};

export default ProjectLink;
