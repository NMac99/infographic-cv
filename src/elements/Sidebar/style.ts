import styled from 'styled-components';
import { Space } from 'antd';
import { Profile } from 'icons';

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ProfileImg = styled(Profile)<{ size: number }>`
  position: absolute;
  top: calc(53% - ${props => props.size / 2}px);
  bottom: 0;
  left: calc(50% - ${props => props.size / 2}px);
  right: 0;
  font-size: ${props => props.size}px;
`;

export const ReferenceWrapper = styled(Space)`
  margin-top: 30px;
`;
